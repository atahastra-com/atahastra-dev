import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

export { PAGE_SEO, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from './data/seo'
export { faqs } from './data/faq'
export { services } from './data/services'
export { CONTACT_EMAIL, CAL_BOOKING_URL } from './data/contact'
export { socialLinks } from './data/socialLinks'

// Renders a route to static HTML. `prerender` waits for every lazy route / Suspense
// boundary to resolve, so the output contains the full page content.
export async function render(url) {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
  return new Response(prelude).text()
}

