import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToHash from '../ScrollToHash'
import CookieBanner from '../ui/CookieBanner'

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-page">
      <ScrollToHash />
      <Navbar />
      <main key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
