import { useRef, useState } from 'react'

const projects = [
  {
    name: 'Victor Grossman',
    category: 'CMS website · Memorial archive',
    description: 'Memorial website for Victor Grossman, long-standing US activist based in Berlin.',
    href: 'https://www.victorgrossman.com/',
    image: '/victor-grossman.jpg',
    imageAlt: 'Victor Grossman in front of a bookshelf',
  },
  {
    name: 'Grado Babo',
    category: 'Restaurant website · Hospitality',
    description: 'A warm, editorial restaurant experience built around seasonal food, atmosphere, and simple table booking.',
    href: 'https://www.grado-babo.com/',
    image: '/grado-babo.png',
    imageAlt: 'Grado Babo Italian vegan bistro website',
    tagline: 'An Italian vegan bistro in Berlin',
  },
]

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStart = useRef(null)
  const activeProject = projects[activeIndex]

  const showProject = (nextIndex) => {
    setActiveIndex((nextIndex + projects.length) % projects.length)
  }

  const handlePointerDown = (event) => {
    pointerStart.current = event.clientX
  }

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) return

    const distance = event.clientX - pointerStart.current
    pointerStart.current = null

    if (Math.abs(distance) < 40) return
    showProject(activeIndex + (distance < 0 ? 1 : -1))
  }

  return (
    <section className="border-t border-white/[0.08] bg-black py-24">
      <div className="section-container">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Selected work</p>

        <div
          className="mt-10 select-none touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStart.current = null
          }}
        >
          <article
            key={activeProject.name}
            className="animate-[fadeIn_450ms_ease-out] group relative isolate min-h-[420px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0b0b] sm:min-h-[560px] sm:rounded-3xl lg:min-h-[680px]"
          >
            {activeProject.image ? (
              <>
                <img
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  width="1536"
                  height="768"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
              </>
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(217,56,111,0.35),transparent_32%),linear-gradient(135deg,#251015,#080808_65%)]" />
            )}

            <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">{activeProject.category}</p>
                <h2 className={`mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl ${activeProject.tagline ? 'font-serif uppercase tracking-[0.12em]' : ''}`}>
                  {activeProject.name}
                </h2>
                {activeProject.tagline && (
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[#f1b7c9]">
                    {activeProject.tagline}
                  </p>
                )}
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {activeProject.description}
                </p>
                <a
                  href={activeProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-block rounded-full px-6 py-3 text-sm font-semibold ${
                    'minimal-button-primary'
                  }`}
                >
                  Visit the live website ↗
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => showProject(activeIndex - 1)}
            className="text-2xl text-gray-500 transition-colors hover:text-white"
          >
            ←
          </button>
          <div className="flex items-center gap-2" aria-label="Selected work navigation">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                aria-label={`Show ${project.name}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => showProject(index)}
                className={`relative h-1.5 overflow-hidden rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-white/20' : 'w-1.5 bg-gray-600 hover:bg-gray-400'
                }`}
              >
                {index === activeIndex && <span className="absolute inset-0 rounded-full bg-white" />}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => showProject(activeIndex + 1)}
            className="text-2xl text-gray-500 transition-colors hover:text-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
