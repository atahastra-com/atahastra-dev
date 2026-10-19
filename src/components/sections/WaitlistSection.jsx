import { useState } from 'react'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 500)
  }

  return (
    <section id="waitlist" className="py-24 border-t border-white/[0.08] bg-black">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Early Access
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Be part of the Proxim private alpha.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            We are onboarding researchers, writers, journalists, and organizations in small,
            deliberate cohorts. Request an invitation below.
          </p>

          <div className="mt-10">
            {submitted ? (
              <div className="rounded-xl border border-white/[0.1] bg-[#0c0c0c] p-6 text-center">
                <p className="text-base font-semibold text-white">
                  Invitation requested.
                </p>
                <p className="mt-1.5 text-sm text-gray-400">
                  We have added <span className="text-white font-mono">{email}</span> to our queue.
                  Invitations are sent in weekly waves.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 rounded-full border border-white/[0.14] bg-[#0c0c0c] px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="minimal-button-primary rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Request Access'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
