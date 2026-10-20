import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies'

// Homepage proof section: selected work shown right after the services grid,
// so visitors see outcomes before they reach the contact form.
export default function SelectedWork() {
  return (
    <section className="py-24 border-t border-white/[0.08] bg-black">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recent projects, real outcomes
          </h2>
          <p className="mt-3 text-base text-gray-400">
            A sample of the engagements we take on — each scoped, fixed-priced, and shipped on a clear timeline.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="minimal-card rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-500">{study.index}</span>
                  <span className="text-xs text-gray-500">{study.industry}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{study.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {study.problem}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  <span className="font-semibold text-white">Outcome: </span>
                  {study.result}
                </p>
                <p className="mt-3 font-mono text-xs text-gray-500">
                  {study.timeline}
                </p>
              </div>
              <Link
                to={`/services/${study.serviceSlug}`}
                className="mt-6 text-sm font-medium text-white hover:underline"
              >
                {study.service} →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
          >
            Get a fixed quote for your project
          </Link>
        </div>
      </div>
    </section>
  )
}
