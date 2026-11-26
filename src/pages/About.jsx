import { Link } from 'react-router-dom'
import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'

export default function About() {
  useSeo(PAGE_SEO.about)

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-gray-500">
              About
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Atahastra
            </h1>
            <p className="mt-8 text-lg font-medium leading-relaxed text-gray-300 md:text-xl">
              We build Proxim OS — a clean, fast desktop operating system that
              respects your hardware and your privacy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              Built on Debian 13 (Trixie) and Linux 6.12, Proxim OS focuses on
              quiet craft: fluid motion, out-of-the-box laptop support, signed
              OTA updates, and zero telemetry.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 max-w-3xl border-t border-white/[0.08] pt-14">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">Principles</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <span className="font-mono text-xs text-gray-500">01</span>
              <h3 className="mt-2 text-base font-semibold text-white">Quiet by design</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                No ads, no popups, no bloat. Every pixel has a reason to exist.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-gray-500">02</span>
              <h3 className="mt-2 text-base font-semibold text-white">Real hardware first</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Wi-Fi, Bluetooth, touchpads, codecs, and dual-boot work from first boot.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-gray-500">03</span>
              <h3 className="mt-2 text-base font-semibold text-white">Yours completely</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Zero telemetry, Ed25519-signed updates, and full local control.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-2xl border-t border-white/[0.08] pt-14">
          <div className="flex flex-wrap gap-4">
            <Link
              to="/proxim-os"
              className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
            >
              Explore Proxim OS
            </Link>
            <Link
              to="/contact"
              className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
            >
              Contact us
            </Link>
          </div>
          <p className="mt-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-mono text-sm text-gray-400 transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
