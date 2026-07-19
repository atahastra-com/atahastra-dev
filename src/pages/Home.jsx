import Reveal from '../components/ui/Reveal'
import Products from '../components/sections/Products'
import useSeo from '../hooks/useSeo'

export default function Home() {
  useSeo({
    title: 'Atahastra',
    description: 'Atahastra. Proxim and My Simple Resume.',
    path: '/',
  })

  return (
    <Reveal>
      <Products />
    </Reveal>
  )
}
