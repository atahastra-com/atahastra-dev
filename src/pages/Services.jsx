import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { services, processSteps } from '../data/services'
import useSeo from '../hooks/useSeo'

export default function Services() {
  useSeo({
    title: 'Services | Atahastra Agency',
    description:
      'Website design and development, mobile apps, Shopify stores, custom web apps, UI/UX design, and care plans from Atahastra.',
    path: '/services',
  })

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Services
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Everything you need to launch online.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-gray-300 md:text-xl font-medium">
              Design, build, and growth from one team.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
              Pick one service or hand us the whole project. Every engagement includes
              a fixed quote, a staging preview before launch, and handover docs.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.slug} className="minimal-card rounded-2xl p-8">
              <span className="font-mono text-xs text-gray-500">{service.number}</span>
              <h2 className="mt-4 text-xl font-bold text-white">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
              <ul className="mt-5 list-disc pl-4 space-y-2 text-sm text-gray-300 marker:text-gray-500">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-mono text-gray-500">{service.stack}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl border-t border-white/[0.08] pt-14">
          <h2 className="text-xl font-bold text-white sm:text-2xl">How every project runs</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
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
        </div>
      </div>
    </div>
  )
}
