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
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Atahastra • Design & Development Agency
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
              Websites, apps & stores that win customers.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
              We design and build websites, mobile apps, Shopify stores,
              custom web apps, and clean UI — fixed quotes, fast delivery, and
              support after launch.
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

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-gray-500">
              <span>Fixed quotes</span>
              <span>2–6 week delivery</span>
              <span>Support after launch</span>
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
              One team for design, build, and launch — so nothing gets lost between freelancers.
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
          AGENCY NOTE
         ======================================================== */}
      <section className="py-24 border-t border-white/[0.08] bg-[#050505]">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="text-2xl sm:text-3xl font-light italic leading-relaxed text-gray-200">
              "A good website should pay for itself, bringing enquiries, sales, and
              trust while you focus on running the business."
            </blockquote>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Atahastra Studio
            </p>
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
                q: 'How much will my project cost?',
                a: 'Every project gets a fixed quote before we start. No hourly billing, no surprise invoices. Tell us what you want to build and we reply within one business day.',
              },
              {
                q: 'How long does it take?',
                a: 'Landing pages take 1–2 weeks, business websites 2–4 weeks, Shopify stores 2–5 weeks, and apps or custom web apps 4–8+ weeks depending on scope.',
              },
              {
                q: 'Can you redesign my existing website or store?',
                a: 'Yes. We start with a quick audit of speed, SEO, and usability, then rebuild what is holding you back while keeping the content and rankings that already work.',
              },
              {
                q: 'Will I be able to update things myself?',
                a: 'Yes. You get an easy-to-edit CMS where it makes sense, plus handover docs and credentials, so routine updates never need a developer.',
              },
              {
                q: 'What happens after launch?',
                a: 'We check speed and SEO basics at launch, then stay on with care plans covering updates, backups, fixes, and steady monthly improvements.',
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
