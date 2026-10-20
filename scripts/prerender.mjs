// Build-time prerenderer.
// Renders every route to static HTML with route-specific <head> tags and JSON-LD,
// so crawlers and social previews get complete pages without running JavaScript.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// Output (served by Vercel with "cleanUrls"):
//   dist/index.html  dist/services.html  dist/about.html
//   dist/contact.html  dist/careers.html  dist/404.html

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const {
  render,
  PAGE_SEO,
  SITE_URL,
  SITE_NAME,
  faqs,
  services,
  serviceSeo,
  CONTACT_EMAIL,
} = await import(pathToFileURL(ssrEntry).href)

const ROUTES = [
  { key: 'home', url: '/', file: 'index.html' },
  { key: 'services', url: '/services', file: 'services.html' },
  { key: 'about', url: '/about', file: 'about.html' },
  { key: 'contact', url: '/contact', file: 'contact.html' },
  { key: 'careers', url: '/careers', file: 'careers.html' },
  ...Object.entries(serviceSeo).map(([slug, seo]) => ({
    key: `service:${slug}`,
    url: seo.path,
    file: `services/${slug}.html`,
    seo,
  })),
  // Any unmatched URL renders the catch-all NotFound route.
  { key: 'notFound', url: '/__not-found__', file: '404.html' },
]

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

// Safe to embed inside <script type="application/ld+json">.
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')}</script>`

const pageUrl = (seo) => `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`

function structuredData(key, seo) {
  const blocks = []
  const url = pageUrl(seo)

  if (key !== 'home' && key !== 'notFound') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: seo.title.split('|')[0].trim(), item: url },
      ],
    })
  }

  if (key === 'home') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  if (key === 'services') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${SITE_NAME} services`,
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.title,
          description: s.short,
          provider: { '@id': `${SITE_URL}/#organization` },
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    })
  }

  if (key.startsWith('service:')) {
    const slug = key.slice('service:'.length)
    const service = services.find((item) => item.slug === slug)
    if (service) {
      blocks.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url,
        provider: { '@id': `${SITE_URL}/#organization` },
      })
      if (Array.isArray(service.faqs) && service.faqs.length > 0) {
        blocks.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        })
      }
    }
  }

  if (key === 'contact') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: seo.title,
      url,
      mainEntity: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        email: CONTACT_EMAIL,
      },
    })
  }

  return blocks.map(jsonLd).join('\n    ')
}

function setTag(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender: could not find ${label} in index.html`)
  return html.replace(regex, replacement)
}

function applyHead(template, key, seo) {
  const url = pageUrl(seo)
  const title = escapeAttr(seo.title)
  const description = escapeAttr(seo.description)
  const robots = seo.noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  let html = template
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, '<title>')
  html = setTag(html, /<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${description}" />`, 'meta description')
  html = setTag(html, /<meta\s+name="robots"[\s\S]*?\/>/, `<meta name="robots" content="${robots}" />`, 'meta robots')
  html = setTag(html, /<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${title}" />`, 'og:title')
  html = setTag(html, /<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${description}" />`, 'og:description')
  html = setTag(html, /<meta\s+name="twitter:title"[\s\S]*?\/>/, `<meta name="twitter:title" content="${title}" />`, 'twitter:title')
  html = setTag(html, /<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${description}" />`, 'twitter:description')

  if (seo.noindex) {
    // A 404 page should not advertise a canonical or a share URL.
    html = html.replace(/\s*<link\s+rel="canonical"[\s\S]*?\/>/, '')
    html = html.replace(/\s*<meta\s+property="og:url"[\s\S]*?\/>/, '')
  } else {
    html = setTag(html, /<link\s+rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${url}" />`, 'canonical')
    html = setTag(html, /<meta\s+property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${url}" />`, 'og:url')
  }

  const ld = structuredData(key, seo)
  if (ld) html = html.replace('</head>', `    ${ld}\n  </head>`)
  return html
}

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8')
if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: <div id="root"></div> not found in dist/index.html')
}

for (const route of ROUTES) {
  const seo = route.seo ?? PAGE_SEO[route.key]
  const appHtml = await render(route.url)
  const html = applyHead(template, route.key, seo).replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  )
  const outputPath = path.join(distDir, route.file)
  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, html)
  console.log(`prerendered ${route.url.padEnd(16)} -> dist/${route.file}`)
}

// Keep sitemap lastmod current on every build.
const today = new Date().toISOString().slice(0, 10)
const sitemapPages = ROUTES.filter((r) => !(r.seo ?? PAGE_SEO[r.key]).noindex)
const priorities = { home: '1.0', services: '0.9', contact: '0.9', about: '0.7', careers: '0.5', service: '0.7' }
const priorityFor = (key) => priorities[key] ?? (key.startsWith('service:') ? priorities.service : '0.5')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages
  .map(
    (r) => `  <url>
    <loc>${pageUrl(r.seo ?? PAGE_SEO[r.key])}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.key === 'home' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priorityFor(r.key)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap)
console.log('generated dist/sitemap.xml')
