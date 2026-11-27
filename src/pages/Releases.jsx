import { useState } from 'react'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'
import { ISO_DOWNLOAD, useProximRelease } from '../data/proximOs'

export default function Releases() {
  useSeo(PAGE_SEO.releases)
  const release = useProximRelease()
  const [copied, setCopied] = useState(false)

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
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            Releases
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Latest release notes, ISO download, and OTA manifest for Proxim OS.
          </p>

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

          {/* Latest Release Notes */}
          <div className="mt-14 border-t border-white/[0.08] pt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-white">
                {release.name}{' '}
                <span className="font-mono text-xs font-normal text-zinc-500">
                  v{release.version} ({release.channel})
                </span>
              </h2>
              <span className="font-mono text-xs text-zinc-500">
                {release.released_at}
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-400">
              {release.notes.map((note, idx) => (
                <li key={`${note}-${idx}`}>— {note}</li>
              ))}
            </ul>
          </div>

          {/* ISO Checksum */}
          <div className="mt-14 border-t border-white/[0.08] pt-8">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-zinc-500">
                ISO SHA-256 ({ISO_DOWNLOAD.filename})
              </span>
              <button
                type="button"
                onClick={copyChecksum}
                className="font-mono text-xs text-zinc-400 transition-colors hover:text-white"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <p className="mt-2 break-all font-mono text-xs text-zinc-400 select-all">
              {ISO_DOWNLOAD.sha256}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
