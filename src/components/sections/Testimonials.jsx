import { testimonials } from '../../data/testimonials'

// Reusable client-proof section. Rendered on the homepage and the Contact page,
// beside the point where visitors decide whether to send an enquiry.
export default function Testimonials({ compact = false }) {
  return (
    <section className={compact ? 'mt-8 border-t border-white/[0.08] pt-8' : 'py-24 border-t border-white/[0.08] bg-[#050505]'}>
      <div className={compact ? '' : 'section-container'}>
        <div className={compact ? '' : 'mx-auto max-w-2xl text-center'}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Client words
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why clients hire us again
          </h2>
        </div>

        <div className={compact ? 'mt-6 flex flex-col gap-4' : 'mt-16 grid grid-cols-1 gap-8 md:grid-cols-3'}>
          {testimonials.map((item) => (
            <figure
              key={item.quote}
              className="minimal-card rounded-2xl p-8 flex flex-col justify-between"
            >
              <blockquote className="text-sm leading-relaxed text-gray-300">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-gray-500">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
