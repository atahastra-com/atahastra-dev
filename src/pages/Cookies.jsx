import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'

const sections = [
  {
    title: '1. What are cookies',
    body: 'Cookies are small text files stored on your device when you visit a website. They help websites function, remember preferences, and improve user experience.',
  },
  {
    title: '2. How we use cookies',
    body: 'Our website itself does not set tracking or advertising cookies. We keep the site lean so pages load fast and nothing follows you around after you leave.',
  },
  {
    title: '3. Third-party services',
    body: 'Some embedded or linked services may set their own cookies, for example fonts loaded from Google Fonts, or scheduling pages on Cal.com when you book a call. Their use of data is governed by their respective privacy and cookie policies.',
  },
  {
    title: '4. Managing cookies',
    body: 'You can control or delete cookies through your browser settings at any time. Because our own site does not rely on cookies, blocking them will not break core browsing here, though third-party booking or scheduling features may behave differently.',
  },
  {
    title: '5. Updates to this policy',
    body: 'We may update this Cookie Policy periodically to reflect legal, technical, or operational changes. Updated versions will be posted on this page.',
  },
  {
    title: '6. Contact',
    body: null,
  },
]

export default function Cookies() {
  useSeo(PAGE_SEO.cookies)

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Legal
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Cookie Policy
            </h1>
            <p className="mt-6 text-sm text-gray-500 font-mono">
              Last updated: October 20, 2026
            </p>
          </div>
        </Reveal>

        <div className="mt-12 max-w-2xl">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-white/[0.08] py-8">
              <h2 className="text-xl font-bold text-white sm:text-2xl">{section.title}</h2>
              {section.body ? (
                <p className="mt-3 text-base leading-relaxed text-gray-400">{section.body}</p>
              ) : (
                <p className="mt-3 text-base leading-relaxed text-gray-400">
                  If you have questions about our use of cookies, contact{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-white font-mono hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex max-w-2xl flex-wrap gap-4 border-t border-white/[0.08] pt-10">
          <Link
            to="/contact"
            className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
          >
            Get a fixed quote
          </Link>
          <Link
            to="/privacy"
            className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
