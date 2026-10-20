import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Analytics />
    </BrowserRouter>
  )
}
