type ImagePlaceholderProps = {
  label: string
  aspectRatio?: string
  height?: string | number
  style?: React.CSSProperties
}

export default function ImagePlaceholder({ label, aspectRatio = '4/3', height, style }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Image needed: ${label}`}
      style={{
        aspectRatio: height ? undefined : aspectRatio,
        height: height ?? undefined,
        background: '#FFF7F7',
        border: '2px dashed #FCA5A5',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        textAlign: 'center',
        gap: '0.6rem',
        ...style,
      }}
    >
      {/* inline camera/image SVG — no external dep */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B91C1C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ opacity: 0.45 }}
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#B91C1C', opacity: 0.6, margin: 0 }}>
        Photo needed
      </p>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', maxWidth: '26ch', lineHeight: 1.45, margin: 0 }}>
        {label}
      </p>
    </div>
  )
}
