import { useEffect, useState } from 'react'

export const ISO_DOWNLOAD = {
  url: 'https://github.com/atahastra-com/proxim/releases/latest/download/proxim-os-live-amd64.iso',
  releaseUrl: 'https://github.com/atahastra-com/proxim/releases/latest',
  filename: 'proxim-os-live-amd64.iso',
  size: '1.5 GB',
  sha256: '5ff148d76d64582de3de09ecf25680a45ac9d5d928994ba2102d0b83e3d5a88f',
}

export const LATEST_WEB_RELEASE = {
  version: '1.2',
  name: 'Proxim OS 1.2',
  channel: 'stable',
  released_at: '2026-11-27',
  notes: [
    'Built-in Proxim AI right-side panel in the dock supporting Gemini, OpenAI, Claude, AWS Bedrock, Custom OpenAI-compatible APIs, and Local Ollama',
    'Full OS agent control: launch apps, manage windows, control volume/Wi-Fi/DND, live screen vision, mouse & keyboard automation, and visible Terminal execution',
    'Clean collapsed activity dropdown in Proxim AI chat with safety confirmation before destructive actions',
    'Dark blurred glass app windows with minimal boxless headers, translucent frosted lists, and matching dark-blur dock, Calendar, and Quick Settings popups',
    'Redesigned lock screen password prompt with a centered frosted glass pill over blurred wallpaper',
    'Moved system controls cluster beside date/time on the left of the dock with minimal Quick Settings tiles and slim blue slider',
    'Larger 58px dock icons with 78% artwork fill and frosted dark glass squircle & folder tiles',
    'Streamlined Software Update UI with bullet-list release notes, top Install pill, Wi-Fi detection, and cached download reuse',
    'Full Proxim OS white-labeling in Settings About/System Details and Package Installer',
  ],
}

export const PROXIM_SCREENSHOTS = [
  {
    id: 'desktop',
    label: 'Desktop',
    src: '/images/proxim-os/desktop.jpg',
    alt: 'Proxim OS desktop with Launchpad app grid and frosted bottom dock',
  },
  {
    id: 'software',
    label: 'Software',
    src: '/images/proxim-os/software.jpg',
    alt: 'Proxim OS Software store with Flathub apps',
  },
  {
    id: 'settings',
    label: 'Settings',
    src: '/images/proxim-os/settings.jpg',
    alt: 'Proxim OS Settings Appearance window',
  },
]

export const PROXIM_PILLARS = [
  {
    title: 'Fast & simple.',
    body: 'Lightweight by design on Debian 13. Dark blurred glass windows, one clean Launchpad grid, and a frosted dock with no clutter.',
  },
  {
    title: 'Built-in Proxim AI.',
    body: 'A right-edge AI assistant with full OS control — launch apps, adjust settings, inspect your screen, and run Terminal commands with inline Allow/Deny confirmation. Bring Gemini, OpenAI, Claude, Bedrock, OpenRouter, or Local Ollama.',
  },
  {
    title: 'Ready out of the box.',
    body: 'Wi-Fi drivers, Bluetooth, touchpad gestures, automatic timezone sync, 1-click .deb installs, and Flathub work from the start.',
  },
  {
    title: 'Private.',
    body: 'No ads, no tracking, and no forced accounts. Built-in dual-boot USB installer and Ed25519-signed over-the-air updates.',
  },
]

export const PROXIM_SPECS = [
  { label: 'Version', value: 'Proxim OS 1.2 (64-bit amd64, UEFI + BIOS Hybrid)' },
  { label: 'Base', value: 'Debian 13 (Trixie), Linux Kernel 6.12' },
  { label: 'Desktop', value: 'Custom dark blurred glass shell (kos-shell)' },
  { label: 'AI Providers', value: 'Gemini, OpenAI, Claude, AWS Bedrock, OpenAI-compatible, Local Ollama' },
  { label: 'File Size', value: '1.5 GB (Live & Installer ISO)' },
  { label: 'Requirements', value: '64-bit x86_64 CPU, 4 GB RAM (8 GB rec.), 20 GB storage, 4 GB+ USB' },
  { label: 'Telemetry', value: 'None' },
]

function compareVersions(a, b) {
  const pa = String(a).split('.').map(Number)
  const pb = String(b).split('.').map(Number)
  const len = Math.max(pa.length, pb.length)
  for (let i = 0; i < len; i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0)
    if (diff !== 0) return diff
  }
  return 0
}

export function useProximRelease() {
  const [release, setRelease] = useState(LATEST_WEB_RELEASE)

  useEffect(() => {
    let cancelled = false

    fetch('/proxim-os/latest.json', { cache: 'no-cache' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (
          !cancelled &&
          data &&
          typeof data === 'object' &&
          data.version &&
          compareVersions(data.version, LATEST_WEB_RELEASE.version) >= 0
        ) {
          setRelease({
            version: String(data.version),
            name: data.name || `Proxim OS ${data.version}`,
            channel: data.channel || 'stable',
            released_at: data.released_at || data.released || LATEST_WEB_RELEASE.released_at,
            notes:
              Array.isArray(data.notes) && data.notes.length > 0
                ? data.notes
                : LATEST_WEB_RELEASE.notes,
          })
        }
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [])

  return release
}
