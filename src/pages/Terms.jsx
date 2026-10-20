import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'

const sections = [
  {
    title: '1. Acceptance of terms',
    body: 'By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please do not use this site.',
  },
  {
    title: '2. Services and information',
    body: 'Content on this site is provided as general information about Atahastra and our services. Project scopes, pricing, timelines, and deliverables are finalized through separate written agreements, typically a fixed quote sent after your inquiry.',
  },
  {
    title: '3. Intellectual property',
    body: 'Unless stated otherwise, website content, branding, design, and related materials are owned by Atahastra or used with permission. You may not copy, reproduce, distribute, or reuse content without prior written consent.',
  },
  {
    title: '4. Acceptable use',
    body: 'You agree not to misuse this website, attempt unauthorized access, interfere with service operation, or submit unlawful or harmful content through forms or communication channels.',
  },
  {
    title: '5. Third-party links',
    body: 'This site may contain links to third-party websites or tools, such as scheduling pages. We are not responsible for the content, policies, or practices of third-party services.',
  },
  {
    title: '6. Limitation of liability',
    body: 'To the fullest extent permitted by law, Atahastra is not liable for indirect, incidental, or consequential damages arising from your use of this website.',
  },
  {
    title: '7. Changes to terms',
    body: 'We may update these Terms & Conditions at any time. Continued use of the site after updates constitutes acceptance of the revised terms.',
  },
  {
    title: '8. Contact',
    body: null,
  },
]

export default function Terms() {
  useSeo(PAGE_SEO.terms)

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Legal
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Terms & Conditions
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
                  For questions regarding these terms, contact{' '}
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
