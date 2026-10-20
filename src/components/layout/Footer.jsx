import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import SocialLinks from '../ui/SocialLinks'
import { CONTACT_EMAIL, CAL_BOOKING_URL } from '../../data/contact'

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
  { label: 'Book 30-min call', href: CAL_BOOKING_URL, external: true },
]

const serviceLinks = [
  { label: 'Custom web apps & AI', to: '/services' },
  { label: 'Mobile engineering', to: '/services' },
  { label: 'Shopify & ecommerce', to: '/services' },
  { label: 'Performance websites', to: '/services' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="section-container py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Atahastra is a design and development agency building websites,
              mobile apps, Shopify stores, web apps, and UI.
            </p>
            <p className="mt-3 text-xs text-gray-500 font-mono flex flex-wrap items-center gap-x-2 gap-y-1">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                {CONTACT_EMAIL}
              </a>
              <span>·</span>
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Schedule call ↗
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Services
              </p>
              <nav className="mt-4 flex flex-col gap-2.5">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Company
              </p>
              <nav className="mt-4 flex flex-col gap-2.5">
                {companyLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-gray-500">
          <p>© {currentYear} Atahastra. All rights reserved.</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
