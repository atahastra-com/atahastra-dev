import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const linkClass = (to) => {
    const isActive = pathname === to
    return `text-xs uppercase tracking-wider transition-colors ${
      isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
    }`
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-black/80 backdrop-blur-md">
        <div className="section-container flex h-16 items-center justify-between">
          <Logo size="md" />

          {/* Desktop Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="minimal-button-primary rounded-full px-4 py-1.5 text-xs font-semibold"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 text-gray-400 hover:text-white md:hidden"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                menuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                menuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 flex h-[calc(100dvh-4rem)] flex-col justify-between border-t border-white/[0.08] bg-black p-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-lg font-medium text-gray-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/[0.08] pt-6 pb-8">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="minimal-button-primary block w-full rounded-full py-3 text-center text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
