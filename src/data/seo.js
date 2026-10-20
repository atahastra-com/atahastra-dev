// Single source of truth for page metadata.
// Used at runtime by the useSeo hook and at build time by scripts/prerender.mjs.

export const SITE_URL = 'https://www.atahastra.com'
export const SITE_NAME = 'Atahastra'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero.png`

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'Atahastra | Websites, Mobile Apps, Shopify & UI/UX Agency',
    description:
      'Atahastra designs and builds websites, mobile apps, Shopify stores, custom web apps, and UI/UX. Fixed quotes, fast delivery, and support after launch.',
  },
  services: {
    path: '/services',
    title: 'Services | Websites, Mobile Apps & Shopify | Atahastra',
    description:
      'Website design and development, iOS and Android apps, Shopify ecommerce, custom web applications, UI/UX design, and ongoing care and growth plans.',
  },
  about: {
    path: '/about',
    title: 'About Atahastra | Design & Development Agency',
    description:
      'Atahastra is a small design and engineering studio building fast, conversion-focused websites, apps, and stores, with support that continues after launch.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Atahastra | Get a Fixed Quote or Book a Free Call',
    description:
      'Start a project with Atahastra. Get a fixed quote within one business day, or book a free 30-minute discovery call if you are not sure where to start.',
  },
  careers: {
    path: '/careers',
    title: 'Careers at Atahastra | Design & Engineering Roles',
    description:
      'Work with Atahastra on real client websites, mobile apps, Shopify stores, and product UI. We hire people who care about clean design and fast builds.',
  },
  notFound: {
    path: '/404',
    title: 'Page not found | Atahastra',
    description:
      'The page you are looking for does not exist. Explore our services or start a project with Atahastra.',
    noindex: true,
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy | Atahastra',
    description:
      'How Atahastra collects, uses, and protects your personal information when you visit our website or contact us.',
    noindex: true,
  },
  terms: {
    path: '/terms',
    title: 'Terms & Conditions | Atahastra',
    description:
      'The terms governing your use of the Atahastra website, including services information, intellectual property, and liability.',
    noindex: true,
  },
  cookies: {
    path: '/cookies',
    title: 'Cookie Policy | Atahastra',
    description:
      'How Atahastra and linked third-party services use cookies, and how you can manage them in your browser.',
    noindex: true,
  },
}

export const serviceSeo = Object.fromEntries(
  [
    ['website-design-development', 'Website Design & Development', 'Website design and development for businesses that need a clear, fast, conversion-focused website.'],
    ['mobile-apps', 'Mobile App Development', 'Mobile app design and development for iOS and Android, from product flow to launch.'],
    ['shopify-ecommerce', 'Shopify & Ecommerce Development', 'Shopify ecommerce design and development for stores that make it easier to discover and buy products.'],
    ['web-apps', 'Custom Web Application Development', 'Custom web application development for portals, dashboards, booking systems, and business workflows.'],
    ['ui-ux-design', 'UI/UX Design', 'UI and UX design for digital products, websites, and web applications that are clear and easy to use.'],
    ['care-growth', 'Website Care & Growth', 'Ongoing website care, performance improvements, technical SEO, and conversion-focused updates.'],
  ].map(([slug, name, description]) => [slug, { path: `/services/${slug}`, title: `${name} | Atahastra`, description }]),
)
