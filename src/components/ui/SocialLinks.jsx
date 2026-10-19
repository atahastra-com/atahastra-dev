import { socialLinks } from '../../data/socialLinks'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.02] text-gray-400 transition-colors hover:border-white/30 hover:text-white"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d={link.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}
