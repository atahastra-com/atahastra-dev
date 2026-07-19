import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'
import useSeo from '../hooks/useSeo'

export default function About() {
  useSeo({
    title: 'About Atahastra',
    description: 'Atahastra. Proxim and My Simple Resume.',
    path: '/about',
  })

  return (
    <Reveal>
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Company</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            About Atahastra
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gray-muted md:text-xl">
            Atahastra makes Proxim and My Simple Resume.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-muted md:text-lg">
            Proxim is an evidence-first social knowledge platform, coming soon. My Simple Resume
            creates a professional resume in minutes.
          </p>
        </div>

        <div id="contact" className="mt-20 max-w-2xl border-t border-white/[0.06] pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Contact</h2>
          <p className="mt-3 text-base text-gray-muted">Email or find us on social.</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-5 inline-block text-base text-foreground transition-colors hover:text-accent"
          >
            {CONTACT_EMAIL}
          </a>
          <SocialLinks className="mt-8" />
        </div>
      </div>
    </Reveal>
  )
}
