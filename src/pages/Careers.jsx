import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'
import useSeo from '../hooks/useSeo'

export default function Careers() {
  useSeo({
    title: 'Careers — Atahastra',
    description: 'Careers at Atahastra.',
    path: '/careers',
  })

  return (
    <Reveal>
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Company</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Careers
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gray-muted md:text-xl">
            Work on Proxim, My Simple Resume, and what comes next.
          </p>

          <div className="mt-16 border-t border-white/[0.06] pt-12">
            <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              No open roles right now
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-muted md:text-lg">
              When roles open, they will be listed here.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-muted md:text-lg">
              Follow Atahastra on social to stay updated.
            </p>
            <SocialLinks className="mt-8" />
          </div>
        </div>
      </div>
    </Reveal>
  )
}
