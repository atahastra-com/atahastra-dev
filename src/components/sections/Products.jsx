import Reveal from '../ui/Reveal'
import { products } from '../../data/products'

const panelTone = {
  orange:
    'bg-[radial-gradient(ellipse_90%_70%_at_50%_-20%,rgba(255,122,0,0.22),transparent_55%),linear-gradient(180deg,#0a0a0a_0%,#000_100%)]',
  neutral:
    'bg-[radial-gradient(ellipse_90%_70%_at_50%_-20%,rgba(255,255,255,0.08),transparent_55%),linear-gradient(180deg,#0a0a0a_0%,#000_100%)]',
}

function ProductCta({ product }) {
  const isLive = product.status === 'live' && product.href

  if (isLive) {
    return (
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-base font-medium text-accent transition-colors hover:text-foreground"
      >
        Open
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    )
  }

  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gray-muted">
      Coming soon
    </span>
  )
}

export default function Products() {
  return (
    <section id="products" className="pb-0">
      {products.map((product, index) => {
        const tone = panelTone[product.accent] || panelTone.neutral

        return (
          <Reveal key={product.id} delay={index * 60}>
            <article
              className={`relative overflow-hidden border-t border-white/[0.06] ${tone}`}
            >
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                aria-hidden="true"
              />

              <div className="section-container flex min-h-[70vh] flex-col justify-center py-24 md:min-h-[75vh] md:py-32">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {product.status === 'live' ? 'Available now' : 'Coming soon'}
                  </p>

                  <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    {product.name}
                  </h2>

                  <p className="mt-5 text-xl font-medium tracking-tight text-foreground/90 md:text-2xl lg:text-3xl">
                    {product.tagline}
                  </p>

                  <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-muted md:text-lg">
                    {product.description}
                  </p>

                  <div className="mt-10 flex justify-center">
                    <ProductCta product={product} />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )
      })}
    </section>
  )
}
