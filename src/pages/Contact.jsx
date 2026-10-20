import { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL, CAL_BOOKING_URL } from '../data/contact'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'

const SERVICE_OPTIONS = [
  'Custom Web Applications & AI Workflows',
  'Cross-Platform Mobile Engineering',
  'High-Conversion Shopify & Ecommerce',
  'Performance Websites & Growth Architecture',
  'Product UI / UX & Design Systems',
  'Engineering Retainers & Growth',
  'Other / Custom Scope',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: SERVICE_OPTIONS[0],
    project: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email.includes('@') || !form.name.trim() || !form.project.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 500)
  }

  useSeo(PAGE_SEO.contact)

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Start a project
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-gray-300 md:text-xl font-medium">
              Get a fixed quote within one business day.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
              Prefer email? Write directly to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white font-mono hover:underline">
                {CONTACT_EMAIL}
              </a>
              . Confused about what you need or where to start?{' '}
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
              >
                Schedule a 30-min discovery call
              </a>
              .
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative rounded-2xl border border-white/[0.08] bg-black p-7 sm:p-9 shadow-2xl">
            {/* Ambient top border specular highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Request received</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-gray-400 leading-relaxed">
                  Thanks <span className="text-white font-medium">{form.name}</span>. We will review your project and reply to{' '}
                  <span className="text-white font-mono text-xs">{form.email}</span> within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-400">
                    Your name <span className="text-gray-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="e.g. Alex Chen"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-sm text-white placeholder-gray-600 transition-colors duration-200 hover:border-white/[0.16] focus:border-white/30 focus:bg-[#0d0d0d] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-400">
                    Email address <span className="text-gray-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="alex@company.com"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-sm text-white placeholder-gray-600 transition-colors duration-200 hover:border-white/[0.16] focus:border-white/30 focus:bg-[#0d0d0d] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-400">
                    Project scope
                  </label>
                  <div className="relative">
                    <select
                      value={form.type}
                      onChange={update('type')}
                      className="w-full appearance-none rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 pr-10 text-sm text-white transition-colors duration-200 hover:border-white/[0.16] focus:border-white/30 focus:bg-[#0d0d0d] focus:outline-none cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-[#0b0b0b] text-white py-1">
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-400">
                    Project details <span className="text-gray-600">*</span>
                  </label>
                  <textarea
                    value={form.project}
                    onChange={update('project')}
                    placeholder="Describe your goals, timeline, and budget range..."
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-sm text-white placeholder-gray-600 transition-colors duration-200 hover:border-white/[0.16] focus:border-white/30 focus:bg-[#0d0d0d] focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-[#121212] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-[#1a1a1a] hover:shadow-[0_0_24px_rgba(255,255,255,0.06)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Request a quote</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                      </>
                    )}
                  </button>
                  <p className="mt-2.5 text-center text-[11px] text-gray-500 font-mono">
                    Fixed quote delivered within 1 business day
                  </p>

                  <div className="mt-4 flex flex-col items-center justify-center gap-1.5 border-t border-white/[0.06] pt-4 text-center">
                    <span className="text-xs text-gray-400">Confused about what you need?</span>
                    <a
                      href={CAL_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-white hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Book a free 30-min consultation on Cal.com</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div>
            <div className="border-t border-white/[0.08] pt-8">
              <span className="font-mono text-xs text-gray-500">01</span>
              <h3 className="mt-2 text-base font-semibold text-white">What happens next</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                We reply within one business day with clarifying questions, then send a
                fixed quote with scope and timeline.
              </p>
            </div>
            <div className="mt-8 border-t border-white/[0.08] pt-8">
              <span className="font-mono text-xs text-gray-500">02</span>
              <h3 className="mt-2 text-base font-semibold text-white">Typical timelines</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Landing pages in 1–2 weeks. Business websites in 2–4 weeks. Shopify
                stores in 2–5 weeks. Apps and web apps in 4–8+ weeks.
              </p>
              <p className="mt-4">
                <Link to="/services" className="text-sm text-white hover:underline">
                  Browse all services →
                </Link>
              </p>
            </div>
            <div className="mt-8 border-t border-white/[0.08] pt-8">
              <span className="font-mono text-xs text-gray-500">03</span>
              <h3 className="mt-2 text-base font-semibold text-white">Confused about where to start?</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Not sure what tech stack or scope fits your idea? Book a free 30-minute discovery call with our team to clear up confusion before taking on a project.
              </p>
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-[#0c0c0c] px-4 py-2.5 text-xs font-semibold text-white hover:border-white/30 hover:bg-[#141414] transition-all"
              >
                <span>Schedule 30-min call on Cal.com</span>
                <span>↗</span>
              </a>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
