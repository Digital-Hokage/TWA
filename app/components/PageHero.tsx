type PageHeroProps = {
  eyebrow?: string
  eyebrowVariant?: 'primary' | 'accent' | 'muted'
  title: React.ReactNode
  lead?: React.ReactNode
}

export default function PageHero({ eyebrow, eyebrowVariant = 'primary', title, lead }: PageHeroProps) {
  const eyebrowColor =
    eyebrowVariant === 'accent' ? '#5EEAD4'
    : eyebrowVariant === 'muted' ? 'rgba(255,255,255,0.4)'
    : '#FCA5A5'

  return (
    <section
      style={{
        background: 'linear-gradient(150deg, #0A0D1A 0%, #14060A 55%, #0A0D1A 100%)',
        padding: '4.75rem 0 4.25rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 10% 65%, rgba(185,28,28,0.14) 0%, transparent 52%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div className="container-narrow" style={{ position: 'relative' }}>
        {eyebrow && (
          <span
            style={{
              display: 'block',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '1.125rem',
              color: eyebrowColor,
            }}
          >
            {eyebrow}
          </span>
        )}
        <h1
          style={{
            color: '#F1F5F9',
            lineHeight: 1.08,
            marginBottom: lead ? '1.125rem' : 0,
          }}
        >
          {title}
        </h1>
        {lead && (
          <p
            style={{
              fontSize: '1.125rem', lineHeight: 1.72,
              color: 'rgba(241,245,249,0.6)',
              maxWidth: '58ch',
              margin: 0,
            }}
          >
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
