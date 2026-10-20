import { Link } from 'react-router-dom'
import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'

export default function Careers() {
  useSeo(PAGE_SEO.careers)

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Studio
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Careers
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-gray-300 md:text-xl font-medium">
              Build real client work: websites, apps, and stores that ship.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
              We are a small agency team. When we hire, we look for people who care
              about clean design, fast builds, and clear client communication.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 max-w-2xl border-t border-white/[0.08] pt-12">
          <h2 className="text-xl font-semibold text-white">Open Inquiries</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400">
            We hire project by project for web developers, mobile developers,
            Shopify specialists, and UI designers. If you do strong work, send your
            portfolio and a short note to{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white font-mono hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
            >
              See our work
            </Link>
            <Link
              to="/contact"
              className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
            >
              Start a project
            </Link>
          </div>

          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
