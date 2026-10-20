import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { services } from '../data/services'
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
              Fixed quote before we start. Preview before you pay the final amount.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.slug} className="minimal-card rounded-2xl p-7">
              <span className="font-mono text-xs text-gray-500">{service.number}</span>
              <h2 className="mt-3 text-lg font-bold text-white">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{service.short}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
          >
            Get a fixed quote
          </Link>
        </div>
      </div>
    </div>
  )
}
