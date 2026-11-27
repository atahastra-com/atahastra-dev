// Single source of truth for page metadata.
// Used at runtime by the useSeo hook and at build time by scripts/prerender.mjs.

export const SITE_URL = 'https://www.atahastra.com'
export const SITE_NAME = 'Atahastra'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero.png`

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'Proxim OS 1.2 — Fast, Simple, Debian-based Desktop OS | Atahastra',
    description:
      'Proxim OS 1.2 by Atahastra: a fast, simple, Debian-based desktop OS with built-in Proxim AI, dark blurred glass UI, signed OTA updates, and zero telemetry.',
  },
  proximOs: {
    path: '/proxim-os',
    title: 'Proxim OS 1.2 — Fast, Simple, Debian-based Desktop OS | Atahastra',
    description:
      'Proxim OS 1.2 by Atahastra: a fast, simple, Debian-based desktop OS with built-in Proxim AI, dark blurred glass UI, signed OTA updates, and zero telemetry.',
  },
  about: {
    path: '/about',
    title: 'About | Atahastra',
    description:
      'Atahastra builds Proxim OS — a clean, fast, zero-telemetry desktop operating system.',
  },
  contact: {
    path: '/contact',
    title: 'Contact | Atahastra',
    description:
      'Get in touch with Atahastra regarding Proxim OS 1, ISO access, or support.',
  },
  notFound: {
    path: '/404',
    title: 'Page not found | Atahastra',
    description: 'The page you are looking for does not exist.',
    noindex: true,
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy | Atahastra',
    description: 'How Atahastra handles your personal information.',
    noindex: true,
  },
  terms: {
    path: '/terms',
    title: 'Terms & Conditions | Atahastra',
    description: 'Terms governing use of the Atahastra website and Proxim OS.',
    noindex: true,
  },
  cookies: {
    path: '/cookies',
    title: 'Cookie Policy | Atahastra',
    description: 'How Atahastra uses cookies.',
    noindex: true,
  },
}
