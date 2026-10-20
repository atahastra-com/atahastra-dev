import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import useSeo from '../hooks/useSeo'

export default function NotFound() {
  useSeo({
    title: 'Page not found | Atahastra Agency',
    description: 'The page you are looking for does not exist. Explore our services or start a project with Atahastra.',
    path: '/404',
  })

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              404
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              This page does not exist.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
              The link may be broken, or the page may have moved. Here is where to go next.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/"
                className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
              >
                Back to home
              </Link>
              <Link
                to="/services"
                className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
              >
                View services
              </Link>
              <Link
                to="/contact"
                className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
