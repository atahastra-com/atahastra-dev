import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'atahastra-cookie-consent'

// Consent banner matching the Cookie Policy: this site sets no tracking or
// advertising cookies itself. Accepting or declining only records the choice
// and dismisses the banner. Nothing about tracking changes either way,
// because there is nothing to enable. Third-party pages you visit from here
// (booking links, font delivery) follow their own policies.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setVisible(true)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // Storage unavailable (private mode, SSR): just dismiss for this visit.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.08] bg-black/95 backdrop-blur-md"
    >
      <div className="section-container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-xs leading-relaxed text-gray-400">
          We don't use tracking or advertising cookies on this site. Linked
          services (booking pages, font delivery) may set their own. See our{' '}
          <Link to="/cookies" className="text-white underline underline-offset-4 hover:text-gray-300">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => choose('declined')}
            className="rounded-full border border-white/[0.12] px-5 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white cursor-pointer"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="rounded-full border border-white/[0.14] bg-[#121212] px-5 py-2 text-xs font-semibold text-white transition-colors hover:border-white/30 hover:bg-[#1a1a1a] cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
