import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', project: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email.includes('@') || !form.name.trim() || !form.project.trim()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 500)
  }

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  return (
    <section id="contact-cta" className="py-24 border-t border-white/[0.08] bg-black">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Start a project
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tell us what you want to build.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            Share a few lines about your project. We reply within one business day with
            next steps and a fixed quote.
          </p>

          <div className="mt-10">
            {submitted ? (
              <div className="rounded-xl border border-white/[0.1] bg-[#0c0c0c] p-6 text-center">
                <p className="text-base font-semibold text-white">Request received.</p>
                <p className="mt-1.5 text-sm text-gray-400">
                  Thanks <span className="text-white">{form.name}</span>. We will reply to{' '}
                  <span className="text-white font-mono">{form.email}</span> within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3">
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  required
                  className="flex-1 rounded-full border border-white/[0.14] bg-[#0c0c0c] px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 rounded-full border border-white/[0.14] bg-[#0c0c0c] px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                />
                <textarea
                  value={form.project}
                  onChange={update('project')}
                  placeholder="What do you want to build? (e.g. Shopify store, business website, mobile app)"
                  required
                  rows={4}
                  className="rounded-2xl border border-white/[0.14] bg-[#0c0c0c] px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="minimal-button-primary rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Request a quote'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
