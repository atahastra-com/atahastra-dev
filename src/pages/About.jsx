import { Link } from 'react-router-dom'
import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'
import useSeo from '../hooks/useSeo'

export default function About() {
  useSeo({
    title: 'About Atahastra | Design & Development Agency',
    description:
      'Atahastra is a design and development agency building websites, mobile apps, Shopify stores, web apps, and UI for growing businesses.',
    path: '/about',
  })

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Studio
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Atahastra
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-gray-300 md:text-xl font-medium">
              A small agency that designs and builds websites, apps, and stores.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
              We help startups and local businesses launch online: websites,
              mobile apps for iOS and Android, Shopify stores, custom web
              apps, and UI/UX design. You work directly with the people building
              your project, with fixed quotes and clear timelines.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 max-w-3xl border-t border-white/[0.08] pt-14">
          <h2 className="text-xl font-bold text-white sm:text-2xl">What we believe</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <span className="font-mono text-xs text-gray-500">01</span>
              <h3 className="mt-2 text-base font-semibold text-white">Clarity first</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Fixed scope, fixed price, and a staging link before you pay the final
                amount. No jargon, no surprise invoices.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-gray-500">02</span>
              <h3 className="mt-2 text-base font-semibold text-white">Built to convert</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Every page and screen has a clear job: calls, enquiries, checkouts, or
                bookings. Design serves that goal.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-gray-500">03</span>
              <h3 className="mt-2 text-base font-semibold text-white">Support after launch</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Launch is the middle, not the end. We stay on for fixes, speed,
                SEO, and steady improvements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-2xl border-t border-white/[0.08] pt-14">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Start a project</h2>
          <p className="mt-3 text-base text-gray-400">
            Tell us about your website, app, or store idea and we reply within one
            business day.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
            >
              Contact us
            </Link>
            <Link
              to="/services"
              className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
            >
              View services
            </Link>
          </div>
          <p className="mt-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-base text-white font-mono hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
