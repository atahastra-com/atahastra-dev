import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import SocialLinks from '../ui/SocialLinks'
import { products } from '../../data/products'

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/about#contact' },
]

const linkClass = 'cursor-pointer text-sm text-gray-muted transition-colors hover:text-foreground'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-page">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <Logo size="md" />

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-muted">
                Products
              </p>
              <nav className="mt-4 flex flex-col gap-3">
                {products.map((product) =>
                  product.href ? (
                    <a
                      key={product.id}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {product.name}
                    </a>
                  ) : (
                    <span key={product.id} className="text-sm text-gray-muted">
                      {product.name}
                    </span>
                  ),
                )}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-muted">
                Company
              </p>
              <nav className="mt-4 flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <Link key={link.label} to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row md:items-center">
          <p className="text-sm text-gray-muted">
            © {new Date().getFullYear()} Atahastra
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
