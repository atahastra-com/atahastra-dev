const variants = {
  primary:
    'bg-white text-black hover:bg-gray-200 border border-white font-medium text-sm',
  secondary:
    'bg-transparent text-white hover:bg-white/[0.05] border border-white/[0.15] font-medium text-sm',
  ghost:
    'bg-transparent text-gray-400 hover:text-white font-medium text-sm',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) {
  const classes = `inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-2.5 transition-all duration-200 active:scale-95 ${variants[variant] || variants.primary} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
