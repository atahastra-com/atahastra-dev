import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'
import { products } from '../../data/products'

const navLinks = [{ label: 'About', to: '/about' }]

function ChevronDown({ open }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [productsVisible, setProductsVisible] = useState(false)
  const [productsClosing, setProductsClosing] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const { pathname } = useLocation()

  const closeProductsDropdown = () => {
    if (!productsOpen && !productsVisible) return
    setProductsOpen(false)
    setProductsClosing(true)
  }

  const toggleProductsDropdown = () => {
    if (productsOpen) {
      closeProductsDropdown()
      return
    }
    setProductsClosing(false)
    setProductsVisible(true)
    setProductsOpen(true)
  }

  const linkClass = (to) => {
    const isAbout = to === '/about' && pathname === '/about'
    return `cursor-pointer text-sm transition-colors ${
      isAbout ? 'text-foreground' : 'text-gray-muted hover:text-foreground'
    }`
  }

  useEffect(() => {
    closeProductsDropdown()
    setMobileProductsOpen(false)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!productsClosing) return
    const timer = setTimeout(() => {
      setProductsVisible(false)
      setProductsClosing(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [productsClosing])

  useEffect(() => {
    if (!productsOpen) return

    const handleClickOutside = (event) => {
      const target = event.target
      if (toggleRef.current?.contains(target) || panelRef.current?.contains(target)) return
      closeProductsDropdown()
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') closeProductsDropdown()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [productsOpen])

  useEffect(() => {
    if (!menuOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  const mobileLinkClass = (to) => {
    const isAbout = to === '/about' && pathname === '/about'
    return `cursor-pointer text-lg font-medium transition-colors ${
      isAbout ? 'text-foreground' : 'text-gray-muted hover:text-foreground'
    }`
  }

  return (
    <>
      <header className="relative sticky top-0 z-50 border-b border-white/[0.06] bg-page/80 backdrop-blur-xl">
        <div className="section-container flex h-14 items-center justify-between md:h-16">
          <Logo size="md" />

          <nav className="hidden items-center gap-7 md:flex">
            <div ref={toggleRef}>
              <button
                type="button"
                onClick={toggleProductsDropdown}
                aria-expanded={productsOpen}
                aria-haspopup="true"
                className={`flex cursor-pointer items-center gap-1.5 text-sm transition-colors ${
                  productsOpen ? 'text-foreground' : 'text-gray-muted hover:text-foreground'
                }`}
              >
                Products
                <ChevronDown open={productsOpen} />
              </button>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkClass(link.to)}
                onClick={closeProductsDropdown}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://mysimpleresume.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full bg-foreground px-4 py-2 text-sm font-medium text-page transition-opacity hover:opacity-90"
            >
              My Simple Resume
            </a>
          </nav>

          <button
            type="button"
            className="flex cursor-pointer flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>

        {productsVisible && (
          <div
            ref={panelRef}
            className={`absolute inset-x-0 top-full overflow-hidden border-b border-white/[0.06] bg-page/95 backdrop-blur-xl ${
              productsClosing ? 'products-dropdown-closing' : 'products-dropdown'
            }`}
          >
            <div className="section-container py-8 md:py-10">
              <div className="grid gap-2 sm:grid-cols-2">
                {products.map((product) => {
                  const isLive = product.status === 'live' && product.href
                  const itemClass =
                    'group rounded-xl px-5 py-5 transition-colors hover:bg-white/[0.04]'

                  const inner = (
                    <>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-foreground">{product.name}</h3>
                        {isLive ? (
                          <span
                            aria-hidden="true"
                            className="text-gray-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-foreground"
                          >
                            →
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm text-gray-muted">{product.tagline}</p>
                    </>
                  )

                  if (isLive) {
                    return (
                      <a
                        key={product.id}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeProductsDropdown}
                        className={itemClass}
                      >
                        {inner}
                      </a>
                    )
                  }

                  return (
                    <div key={product.id} className={`${itemClass} cursor-default`} aria-disabled="true">
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {menuOpen && (
        <nav className="fixed inset-x-0 top-14 z-40 flex h-[calc(100dvh-3.5rem)] w-full flex-col overflow-y-auto bg-page md:hidden">
          <div className="section-container flex h-full flex-1 flex-col gap-8 py-8 pb-10">
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen((current) => !current)}
                aria-expanded={mobileProductsOpen}
                className="flex w-full cursor-pointer items-center justify-between text-lg font-medium text-gray-muted transition-colors hover:text-foreground"
              >
                Products
                <ChevronDown open={mobileProductsOpen} />
              </button>
              {mobileProductsOpen && (
                <div className="mt-4 space-y-1">
                  {products.map((product) => {
                    const isLive = product.status === 'live' && product.href
                    const rowClass = 'block rounded-xl px-4 py-3'

                    if (isLive) {
                      return (
                        <a
                          key={product.id}
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            setMenuOpen(false)
                            setMobileProductsOpen(false)
                          }}
                          className={`${rowClass} hover:bg-white/[0.04]`}
                        >
                          <span className="text-base font-medium text-foreground">{product.name}</span>
                          <span className="mt-1 block text-sm text-gray-muted">{product.tagline}</span>
                        </a>
                      )
                    }

                    return (
                      <div key={product.id} className={rowClass}>
                        <span className="text-base font-medium text-foreground">{product.name}</span>
                        <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Coming soon
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={mobileLinkClass(link.to)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://mysimpleresume.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto cursor-pointer rounded-full bg-foreground px-5 py-3.5 text-center text-base font-medium text-page"
              onClick={() => setMenuOpen(false)}
            >
              My Simple Resume
            </a>
          </div>
        </nav>
      )}
    </>
  )
}
