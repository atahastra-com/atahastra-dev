// Build-time prerenderer.
// Renders every route to static HTML with route-specific <head> tags and JSON-LD.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// Output (served by Vercel with "cleanUrls"):
//   dist/index.html  dist/proxim-os.html  dist/about.html
//   dist/contact.html  dist/404.html
//   dist/privacy.html  dist/terms.html  dist/cookies.html

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
  CONTACT_EMAIL,
} = await import(pathToFileURL(ssrEntry).href)

const ROUTES = [
  { key: 'home', url: '/', file: 'index.html' },
  { key: 'proximOs', url: '/proxim-os', file: 'proxim-os.html' },
  { key: 'about', url: '/about', file: 'about.html' },
  { key: 'contact', url: '/contact', file: 'contact.html' },
  { key: 'privacy', url: '/privacy', file: 'privacy.html' },
  { key: 'terms', url: '/terms', file: 'terms.html' },
  { key: 'cookies', url: '/cookies', file: 'cookies.html' },
  // Any unmatched URL renders the catch-all NotFound route.
  { key: 'notFound', url: '/__not-found__', file: '404.html' },
]

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')}</script>`

const pageUrl = (seo) => `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`

function structuredData(key, seo) {
  const blocks = []
  const url = pageUrl(seo)

  if (key === 'home' || key === 'proximOs') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Proxim OS 1.1',
      operatingSystem: 'Linux (Debian 13 Trixie, Kernel 6.12)',
      applicationCategory: 'OperatingSystem',
      softwareVersion: '1.1',
      url,
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      description: seo.description,
    })
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
  const seo = PAGE_SEO[route.key]
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

const today = new Date().toISOString().slice(0, 10)
const sitemapPages = ROUTES.filter((r) => !PAGE_SEO[r.key].noindex)
const priorities = { home: '1.0', proximOs: '0.9', contact: '0.7', about: '0.7' }
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages
  .map(
    (r) => `  <url>
    <loc>${pageUrl(PAGE_SEO[r.key])}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.key === 'home' || r.key === 'proximOs' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priorities[r.key] ?? '0.5'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap)
console.log('generated dist/sitemap.xml')
