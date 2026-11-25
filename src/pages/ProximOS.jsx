import { useState } from 'react'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'
import {
  ISO_DOWNLOAD,
  PROXIM_SCREENSHOTS,
  PROXIM_PILLARS,
  PROXIM_SPECS,
  useProximRelease,
} from '../data/proximOs'

export default function ProximOS({ seo = PAGE_SEO.proximOs }) {
  useSeo(seo)
  const release = useProximRelease()
  const [activeShotId, setActiveShotId] = useState(PROXIM_SCREENSHOTS[0].id)
  const [copied, setCopied] = useState(false)
  const activeShot =
    PROXIM_SCREENSHOTS.find((shot) => shot.id === activeShotId) ?? PROXIM_SCREENSHOTS[0]

  const copyChecksum = async () => {
    try {
      await navigator.clipboard.writeText(ISO_DOWNLOAD.sha256)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable
    }
  }

  return (
    <div className="bg-black text-white">
      {/* ========================================================
          HERO
         ======================================================== */}
      <section className="pt-20 pb-20 md:pt-28 md:pb-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl leading-[1.06]">
              Proxim OS 1
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-zinc-400 sm:text-xl font-normal">
              A fast, simple, Debian-based desktop OS for your PC. Clean
              interface, zero bloat, and ready to use out of the box.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href={ISO_DOWNLOAD.url}
                className="minimal-button-primary rounded-full px-6 py-2.5 text-sm font-medium"
              >
                Download ISO ({ISO_DOWNLOAD.size})
              </a>
              <a
                href={ISO_DOWNLOAD.releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Release notes ↗
              </a>
            </div>
          </div>

          {/* Real OS Screenshots */}
          <div className="mt-14">
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#060606]">
              <img
                key={activeShot.id}
                src={activeShot.src}
                alt={activeShot.alt}
                decoding="async"
                className="block aspect-video w-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center gap-5">
              {PROXIM_SCREENSHOTS.map((shot) => {
                const isActive = shot.id === activeShot.id
                return (
                  <button
                    key={shot.id}
                    type="button"
                    onClick={() => setActiveShotId(shot.id)}
                    className={`text-sm transition-colors ${
                      isActive
                        ? 'font-medium text-white'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {shot.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          OVERVIEW
         ======================================================== */}
      <section id="features" className="border-t border-white/[0.08] py-20 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {PROXIM_PILLARS.map((item) => (
              <div key={item.title}>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  {item.title}
                </h2>
                <p className="mt-2.5 text-base leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Detail Screenshots */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#060606]">
              <img
                src="/images/proxim-os/context-menu.jpg"
                alt="Right-click context menu on Proxim OS 1 desktop"
                loading="lazy"
                decoding="async"
                className="block h-72 w-full object-cover object-center"
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#060606]">
              <img
                src="/images/proxim-os/desktop-folders.jpg"
                alt="Files and folders alongside app icons on Proxim OS 1"
                loading="lazy"
                decoding="async"
                className="block h-72 w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DOWNLOAD, INSTALL & SPECIFICATIONS
         ======================================================== */}
      <section id="install" className="border-t border-white/[0.08] py-20 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Download & 3-Step Install */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                Download &amp; Install
              </h2>

              <ol className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-300">
                <li className="flex gap-4">
                  <span className="font-mono text-xs text-zinc-500 pt-0.5">1.</span>
                  <span>
                    Flash <code className="font-mono text-xs text-white">{ISO_DOWNLOAD.filename}</code> to
                    a USB drive using Rufus, balenaEtcher, or <code className="font-mono text-xs text-white">dd</code>.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-xs text-zinc-500 pt-0.5">2.</span>
                  <span>
                    Boot from the USB drive to try the live desktop or launch Install Proxim OS.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-xs text-zinc-500 pt-0.5">3.</span>
                  <span>
                    Follow the guided setup (Wi-Fi/Ethernet, timezone, disk, user) and remove the USB once the system restarts.
                  </span>
                </li>
              </ol>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href={ISO_DOWNLOAD.url}
                  className="minimal-button-primary rounded-full px-6 py-2.5 text-sm font-medium"
                >
                  Download ISO ({ISO_DOWNLOAD.size})
                </a>
                <a
                  href={ISO_DOWNLOAD.releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  GitHub Release ↗
                </a>
              </div>

              {/* SHA-256 Checksum */}
              <div className="mt-8 border-t border-white/[0.08] pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-zinc-500">SHA-256</span>
                  <button
                    type="button"
                    onClick={copyChecksum}
                    className="font-mono text-xs text-zinc-400 transition-colors hover:text-white"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <p className="mt-1.5 break-all font-mono text-xs text-zinc-400 select-all">
                  {ISO_DOWNLOAD.sha256}
                </p>
              </div>
            </div>

            {/* Specifications */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                Specifications
              </h2>
              <dl className="mt-6 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {PROXIM_SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="text-xs text-zinc-500 shrink-0">{spec.label}</dt>
                    <dd className="text-sm text-zinc-200 sm:text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          RELEASE NOTES
         ======================================================== */}
      <section id="releases" className="border-t border-white/[0.08] py-20 md:py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                Release notes
              </h2>
              <div className="flex items-center gap-4">
                <a
                  href={ISO_DOWNLOAD.releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-500 transition-colors hover:text-white"
                >
                  GitHub Releases ↗
                </a>
                <a
                  href="/proxim-os/latest.json"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-500 transition-colors hover:text-white"
                >
                  latest.json ↗
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-medium text-white">
                  {release.name}{' '}
                  <span className="font-mono text-xs font-normal text-zinc-500">
                    v{release.version} ({release.channel})
                  </span>
                </p>
                <span className="font-mono text-xs text-zinc-500">
                  {release.released_at}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {release.notes.map((note, idx) => (
                  <li key={`${note}-${idx}`}>— {note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
