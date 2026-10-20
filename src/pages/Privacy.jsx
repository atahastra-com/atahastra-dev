import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'

const sections = [
  {
    title: '1. Introduction',
    body: 'Atahastra respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what we collect, why we collect it, and how we use and protect it when you visit our website or contact us.',
  },
  {
    title: '2. Information we collect',
    body: 'We may collect your name, email address, and any project details you submit through our forms or emails. We also collect basic technical data such as browser type, pages visited, and referral source for performance and analytics purposes.',
  },
  {
    title: '3. How we use information',
    body: 'We use your information to respond to inquiries, prepare fixed quotes, deliver services, improve website performance, communicate project updates, and maintain security. We do not sell your personal information.',
  },
  {
    title: '4. Data sharing',
    body: 'We only share information with trusted tools and service providers required to run our website, scheduling, and communication workflows, for example booking links and email. These providers process data under their own privacy obligations.',
  },
  {
    title: '5. Data retention and security',
    body: 'We retain personal data only as long as needed for business, legal, or operational purposes. Reasonable administrative, technical, and organizational safeguards are used to protect your data.',
  },
  {
    title: '6. Your rights',
    body: 'Depending on your location, you may have the right to access, update, correct, or delete your personal information. You may also request to limit or object to certain processing.',
  },
  {
    title: '7. Contact',
    body: null,
  },
]

export default function Privacy() {
  useSeo(PAGE_SEO.privacy)

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Legal
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Privacy Policy
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
                  For privacy requests or questions, contact us at{' '}
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
            to="/terms"
            className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  )
}
