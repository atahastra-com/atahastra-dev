// Single source of truth for page metadata.
// Used at runtime by the useSeo hook and at build time by scripts/prerender.mjs.

export const SITE_URL = 'https://www.atahastra.com'
export const SITE_NAME = 'Atahastra'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero.png`

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'Atahastra | Web, Mobile App, Shopify & UI/UX Development Agency',
    description:
      'Atahastra designs and builds websites, mobile apps, Shopify stores, custom web apps, and UI/UX. Fixed quotes, fast delivery, and support after launch.',
  },
  services: {
    path: '/services',
    title: 'Services | Websites, Mobile Apps, Shopify & Web Apps | Atahastra',
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
}
