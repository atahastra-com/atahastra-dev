import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { services, processSteps } from '../data/services'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'

export default function Services() {
  useSeo(PAGE_SEO.services)

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Services
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              What we can build for you.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
              We design and build websites, mobile apps, Shopify stores, custom
              web applications, and product UI. Every engagement starts with a
              fixed quote, includes design approval before development, and ends
              with handover plus support after launch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              Not sure which service fits?{' '}
              <Link to="/contact" className="text-white underline underline-offset-4 hover:text-gray-300">
                Tell us about your project
              </Link>{' '}
              and we will point you to the smallest scope that solves it.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="minimal-card rounded-2xl p-7 transition-colors hover:border-white/30">
              <span className="font-mono text-xs text-gray-500">{service.number}</span>
              <h2 className="mt-3 text-lg font-bold text-white">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{service.description}</p>
              <ul className="mt-4 space-y-1.5">
                {service.deliverables.slice(0, 3).map((item) => (
                  <li key={item} className="text-xs text-gray-500">· {item}</li>
                ))}
              </ul>
              <span className="mt-5 inline-block text-sm font-medium text-white">Explore {service.title} →</span>
            </Link>
          ))}
        </div>

        <section className="mt-20 border-t border-white/[0.08] pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
            Who we help
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
            Built for startups and local businesses that need results.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-base font-semibold text-white">Startups</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Launch a landing page, MVP app, or storefront fast, then iterate
                from real customer feedback instead of long specs.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Local and service businesses</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Turn visits into calls, quotes, and bookings with clear pages,
                fast load times, and simple contact paths.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Ecommerce and operations teams</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Rebuild slow stores, migrate to Shopify, or replace spreadsheets
                with portals, dashboards, and booking tools.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/[0.08] pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
            How we work
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Simple process, no surprises.
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number}>
                <span className="font-mono text-xs text-gray-500">{step.number}</span>
                <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
            >
              Get a fixed quote
            </Link>
            <Link
              to="/about"
              className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
            >
              About the studio
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
