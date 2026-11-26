import { useEffect, useState } from 'react'

export const ISO_DOWNLOAD = {
  url: 'https://github.com/atahastra-com/proxim/releases/latest/download/proxim-os-live-amd64.iso',
  releaseUrl: 'https://github.com/atahastra-com/proxim/releases/latest',
  filename: 'proxim-os-live-amd64.iso',
  size: '1.5 GB',
  sha256: '5ff148d76d64582de3de09ecf25680a45ac9d5d928994ba2102d0b83e3d5a88f',
}

export const FALLBACK_RELEASE = {
  version: '1.1',
  name: 'Proxim OS 1.1',
  channel: 'stable',
  released_at: '2026-11-26',
  notes: [
    'New Kora icon theme on supersampled satin-obsidian squircles + matching Launchpad folder tiles',
    'Redesigned setup/installer Wi-Fi UI with live clickable network list & password dialog',
    'Auto-hide dock and bottom bar during initial setup & Live USB installer',
    'Compact Package Installer (.deb) with collapsible details, auto-resizing window, Open Now button, and auto-close after uninstall',
    'Right-click Uninstall option on Launchpad for user-installed apps',
    'Fixed Flight / Airplane Mode (rfkill permissions + NetworkManager sync)',
    'Pre-created unlocked default keyring for autologin (no keyring password prompt on first Chrome launch)',
    'Fixed Chrome window caption buttons (removed oversized titlebutton circles)',
    'Added System (/) bookmark in Files sidebar and removed GNOME Maps from default apps',
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
    title: 'Fast.',
    body: 'Lightweight by design on Debian 13 (Trixie), so your PC starts quickly and stays responsive during everyday work.',
  },
  {
    title: 'Simple.',
    body: 'One clean Launchpad home grid, one frosted dock, no clutter. Open apps, create files, and organize folders without digging through menus.',
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
  { label: 'Version', value: 'Proxim OS 1.1 (64-bit amd64, UEFI + BIOS Hybrid)' },
  { label: 'Base', value: 'Debian 13 (Trixie), Linux Kernel 6.12' },
  { label: 'Desktop', value: 'GNOME Shell 48 (kos-shell)' },
  { label: 'File Size', value: '1.5 GB (Live & Installer ISO)' },
  { label: 'Requirements', value: '64-bit x86_64 CPU, 4 GB RAM (8 GB rec.), 20 GB storage, 4 GB+ USB' },
  { label: 'Telemetry', value: 'None' },
]

export function useProximRelease() {
  const [release, setRelease] = useState(FALLBACK_RELEASE)

  useEffect(() => {
    let cancelled = false

    fetch('/proxim-os/latest.json', { cache: 'no-cache' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled && data && typeof data === 'object' && data.version) {
          setRelease({
            version: String(data.version),
            name: data.name || `Proxim OS ${data.version}`,
            channel: data.channel || 'stable',
            released_at: data.released_at || FALLBACK_RELEASE.released_at,
            notes:
              Array.isArray(data.notes) && data.notes.length > 0
                ? data.notes
                : FALLBACK_RELEASE.notes,
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
