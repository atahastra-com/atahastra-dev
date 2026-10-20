import { Link } from 'react-router-dom'
import ContactSection from '../components/sections/ContactSection'
import { services, processSteps } from '../data/services'
import useSeo from '../hooks/useSeo'

export default function Home() {
  useSeo({
    title: 'Atahastra | Web, Mobile Apps, Shopify & UI Agency',
    description:
      'Atahastra is a web and app agency. We build websites, mobile apps, Shopify stores, custom web apps, and UI/UX design.',
    path: '/',
  })

  return (
    <div className="bg-black text-white">
      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28">
        {/* Vercel-style background grid */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          {/* Subtle top ambient radial spotlight */}
          <div className="absolute -top-36 left-1/2 -translate-x-1/2 h-[450px] w-[720px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />

          {/* Symmetrical SVG grid pattern with enhanced visibility and smooth radial fade mask */}
          <svg
            className="absolute inset-0 h-full w-full stroke-white/[0.08] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,#000_35%,transparent_100%)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-grid-pattern"
                width={48}
                height={48}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 48V.5H48" fill="none" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#hero-grid-pattern)" />
          </svg>

          {/* Subtle top border horizon line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <div className="section-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Atahastra • Design & Development Agency
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
              Websites, apps & stores that win customers.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
              Websites, mobile apps, Shopify stores, and clean UI.
              Fixed quotes, fast delivery, support after launch.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
              >
                Start a project
              </Link>
              <Link
                to="/services"
                className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
              >
                View services ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES GRID
         ======================================================== */}
      <section className="py-24 border-t border-white/[0.08] bg-[#050505]">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Services built around your business
            </h2>
            <p className="mt-3 text-base text-gray-400">
              One team for design, build, and launch so nothing gets lost between freelancers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="minimal-card rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-gray-500">{service.number}</span>
                  <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {service.short}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="mt-6 text-sm font-medium text-white hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          PROCESS
         ======================================================== */}
      <section className="py-24 border-t border-white/[0.08] bg-black">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple process, no surprises
            </h2>
            <p className="mt-3 text-base text-gray-400">
              You always know what happens next, what it costs, and when it ships.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number}>
                <span className="font-mono text-xs text-gray-500">{step.number}</span>
                <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          FAQ
         ======================================================== */}
      <section className="py-24 border-t border-white/[0.08] bg-black">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Common questions
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            {[
              {
                q: 'How much will it cost?',
                a: 'A fixed quote before we start. No hourly billing, no surprises.',
              },
              {
                q: 'How long does it take?',
                a: 'Most websites ship in 2 to 4 weeks. Apps and complex builds take longer.',
              },
              {
                q: 'What happens after launch?',
                a: 'We hand over everything and stay on for updates and support.',
              },
            ].map((item) => (
              <div key={item.q} className="border-t border-white/[0.08] py-6 last:border-b">
                <h3 className="text-base font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT CTA
         ======================================================== */}
      <ContactSection />
    </div>
  )
}
