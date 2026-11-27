import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import SocialLinks from '../ui/SocialLinks'
import { CONTACT_EMAIL } from '../../data/contact'

const productLinks = [
  { label: 'Proxim OS', to: '/proxim-os' },
  { label: 'Install', to: '/#install' },
  { label: 'Releases', to: '/releases' },
]

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="section-container py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Makers of Proxim OS — a clean, fast, zero-telemetry desktop
              operating system.
            </p>
            <p className="mt-3 font-mono text-xs text-gray-500">
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Product
              </p>
              <nav className="mt-4 flex flex-col gap-2.5">
                {productLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/proxim-os/latest.json"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  OTA Manifest ↗
                </a>
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Company
              </p>
              <nav className="mt-4 flex flex-col gap-2.5">
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-gray-500 sm:flex-row">
          <p>© {currentYear} Atahastra. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
            <span>·</span>
            <Link to="/cookies" className="transition-colors hover:text-white">
              Cookie Policy
            </Link>
          </nav>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
