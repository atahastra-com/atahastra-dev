import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStart = useRef(null)
  const activeTestimonial = testimonials[activeIndex]

  const showTestimonial = (nextIndex) => {
    const total = testimonials.length
    setActiveIndex((nextIndex + total) % total)
  }

  useEffect(() => {
    const rotation = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length)
    }, 5000)

    return () => window.clearTimeout(rotation)
  }, [activeIndex])

  const handlePointerDown = (event) => {
    pointerStart.current = event.clientX
  }

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) return

    const distance = event.clientX - pointerStart.current
    pointerStart.current = null

    if (Math.abs(distance) < 40) return
    showTestimonial(activeIndex + (distance < 0 ? 1 : -1))
  }

  return (
    <section className="border-t border-white/[0.08] bg-[#050505] py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Client words
          </p>

          <div
            className="mt-10 select-none touch-pan-y py-4"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              pointerStart.current = null
            }}
          >
            <div key={activeTestimonial.quote} className="animate-[fadeIn_450ms_ease-out]">
              <blockquote className="font-serif text-2xl italic leading-loose text-gray-200 sm:text-4xl sm:leading-relaxed">
                “{activeTestimonial.quote}”
              </blockquote>
              <p className="mt-8 text-right text-sm font-semibold text-white">
                {activeTestimonial.name}
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => showTestimonial(activeIndex - 1)}
              className="text-2xl text-gray-500 transition-colors hover:text-white"
            >
              ←
            </button>
            <div className="flex items-center gap-2" aria-label="Testimonial navigation">
              {testimonials.map((item, index) => (
                <button
                  key={item.quote}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  onClick={() => showTestimonial(index)}
                  className={`relative h-1.5 overflow-hidden rounded-full transition-all ${
                    index === activeIndex ? 'w-8 bg-white/20' : 'w-1.5 bg-gray-600 hover:bg-gray-400'
                  }`}
                >
                  {index === activeIndex && (
                    <span
                      key={`progress-${activeIndex}`}
                      className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-white"
                      style={{ animation: 'testimonial-progress 5s linear forwards' }}
                    />
                  )}
                </button>
              ))}
              <span className="sr-only">
                Testimonial {activeIndex + 1} of {testimonials.length}
              </span>
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => showTestimonial(activeIndex + 1)}
              className="text-2xl text-gray-500 transition-colors hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
