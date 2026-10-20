import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { CAL_BOOKING_URL } from '../../data/contact'

export default function ContactSection() {
  const [formState, handleSubmit] = useForm('mdeargpg')
  const [form, setForm] = useState({ name: '', email: '', project: '' })

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  return (
    <section id="contact-cta" className="py-24 border-t border-white/[0.08] bg-black">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Fixed quote · Reply in 1 business day
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get a fixed quote for your project.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            Share a few lines about your project. We reply within one business day with
            next steps and a fixed quote.
          </p>
          <ul className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-2.5 text-left sm:grid-cols-2">
            <li className="rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-xs leading-relaxed text-gray-300">
              <span className="font-semibold text-white">2–4 weeks</span> typical website timeline
            </li>
            <li className="rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-xs leading-relaxed text-gray-300">
              <span className="font-semibold text-white">Fixed price</span> agreed before work begins
            </li>
            <li className="rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-xs leading-relaxed text-gray-300">
              <span className="font-semibold text-white">Full ownership</span> of design, code, and content
            </li>
            <li className="rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-xs leading-relaxed text-gray-300">
              <span className="font-semibold text-white">Support after launch</span> for fixes and improvements
            </li>
          </ul>

          <div className="mt-10">
            {formState.succeeded ? (
              <div className="mx-auto max-w-md rounded-2xl border border-white/[0.08] bg-black p-8 text-center shadow-2xl">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-white">Request received.</p>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Thanks <span className="text-white font-medium">{form.name}</span>. We will reply to{' '}
                  <span className="text-white font-mono text-xs">{form.email}</span> within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 text-left">
                <div className="space-y-1.5">
                  <label htmlFor="cta-name" className="block text-xs font-medium text-gray-400">
                    Your name <span className="text-gray-600">*</span>
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="e.g. Alex Chen"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-sm text-white placeholder-gray-600 transition-colors duration-200 hover:border-white/[0.16] focus:border-white/30 focus:bg-[#0d0d0d] focus:outline-none"
                  />
                  <ValidationError field="name" errors={formState.errors} />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cta-email" className="block text-xs font-medium text-gray-400">
                    Email address <span className="text-gray-600">*</span>
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="alex@company.com"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-sm text-white placeholder-gray-600 transition-colors duration-200 hover:border-white/[0.16] focus:border-white/30 focus:bg-[#0d0d0d] focus:outline-none"
                  />
                  <ValidationError field="email" errors={formState.errors} />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cta-project" className="block text-xs font-medium text-gray-400">
                    Project details <span className="text-gray-600">*</span>
                  </label>
                  <textarea
                    id="cta-project"
                    name="project"
                    value={form.project}
                    onChange={update('project')}
                    placeholder="What are you looking to build, scale, or redesign?"
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#070707] px-4 py-3 text-sm text-white placeholder-gray-600 transition-colors duration-200 hover:border-white/[0.16] focus:border-white/30 focus:bg-[#0d0d0d] focus:outline-none leading-relaxed"
                  />
                  <ValidationError field="project" errors={formState.errors} />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-[#121212] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-[#1a1a1a] hover:shadow-[0_0_24px_rgba(255,255,255,0.06)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {formState.submitting ? (
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
        </div>
      </div>
    </section>
  )
}
