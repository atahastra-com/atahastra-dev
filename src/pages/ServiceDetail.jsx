import { Link, useParams } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { services, processSteps } from '../data/services'
import { serviceSeo } from '../data/seo'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  const seo = serviceSeo[slug]

  useSeo(seo)
  if (!service || !seo) return <NotFound />

  const faqs = service.faqs ?? []

  return (
    <div className="min-h-[75vh] bg-black text-white">
      <section className="border-b border-white/[0.08]">
        <div className="section-container py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
            <Link to="/" className="hover:text-white">Home</Link><span aria-hidden="true"> / </span>
            <Link to="/services" className="hover:text-white">Services</Link><span aria-hidden="true"> / </span>
            <span className="text-gray-200">{service.title}</span>
          </nav>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Service {service.number}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">{service.description}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400">{service.audience}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold">Get a fixed quote</Link>
            <Link to="/services" className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium">All services</Link>
          </div>
        </div>
      </section>

      <section className="section-container py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.25fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">What is included</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">A focused, practical engagement.</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Typical timeline: {service.timeline}
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((deliverable) => <li key={deliverable} className="minimal-card rounded-xl p-5 text-sm leading-relaxed text-gray-300">{deliverable}</li>)}
          </ul>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Typical projects</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">What we usually build.</h2>
            <ul className="mt-6 space-y-2.5">
              {service.projects.map((project) => (
                <li key={project} className="text-sm leading-relaxed text-gray-300">· {project}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Technology and platform expertise</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Tools we use for this service.</h2>
            <ul className="mt-6 space-y-2.5">
              {service.technologies.map((tech) => (
                <li key={tech} className="text-sm leading-relaxed text-gray-300">· {tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-[#050505]">
        <div className="section-container py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Process and timeline</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">You approve each step before we build.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number}>
                <span className="font-mono text-xs text-gray-500">{step.number}</span>
                <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-gray-400">{service.timeline}</p>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="border-t border-white/[0.08]">
          <div className="section-container py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">FAQs</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Common questions about {service.title.toLowerCase()}.</h2>
            <div className="mx-auto mt-10 max-w-2xl">
              {faqs.map((item) => (
                <div key={item.q} className="border-t border-white/[0.08] py-6 last:border-b">
                  <h3 className="text-base font-semibold text-white">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold">Get a fixed quote</Link>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-white/[0.08] bg-[#050505]">
        <div className="section-container py-16 md:py-20">
          <h2 className="text-2xl font-bold">Explore our other services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.filter((item) => item.slug !== slug).map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`} className="minimal-card rounded-xl p-5 transition-colors hover:border-white/30">
                <h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-400">{item.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
