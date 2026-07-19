const variants = {
  primary:
    'bg-foreground text-page hover:opacity-90 border border-foreground',
  secondary:
    'bg-transparent text-foreground hover:bg-foreground/5 border border-border',
  ghost:
    'bg-transparent text-foreground hover:bg-foreground/5 border border-border hover:border-foreground/40',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) {
  const classes = `inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
