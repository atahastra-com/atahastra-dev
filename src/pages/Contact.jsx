import { useState } from 'react'
import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'
import useSeo from '../hooks/useSeo'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'Website', project: '' })
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

  useSeo({
    title: 'Contact | Atahastra Agency',
    description:
      'Start a project with Atahastra. Websites, mobile apps, Shopify stores, web apps, and UI design — fixed quotes within one business day.',
    path: '/contact',
  })

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
              .
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="minimal-card rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-base font-semibold text-white">Request received.</p>
                <p className="mt-2 text-sm text-gray-400">
                  Thanks <span className="text-white">{form.name}</span>. We will reply to{' '}
                  <span className="text-white font-mono">{form.email}</span> within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  required
                  className="rounded-full border border-white/[0.14] bg-[#0c0c0c] px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="Email address"
                  required
                  className="rounded-full border border-white/[0.14] bg-[#0c0c0c] px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                />
                <select
                  value={form.type}
                  onChange={update('type')}
                  className="rounded-full border border-white/[0.14] bg-[#0c0c0c] px-5 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                >
                  <option>Website</option>
                  <option>Mobile app</option>
                  <option>Shopify store</option>
                  <option>Custom web app</option>
                  <option>UI / UX design</option>
                  <option>Care & growth</option>
                </select>
                <textarea
                  value={form.project}
                  onChange={update('project')}
                  placeholder="Describe your project, timeline, and budget range"
                  required
                  rows={5}
                  className="rounded-2xl border border-white/[0.14] bg-[#0c0c0c] px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="minimal-button-primary rounded-full px-6 py-3 text-sm font-semibold active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Request a quote'}
                </button>
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
