type PageHeroProps = {
  eyebrow?: string
  eyebrowVariant?: 'primary' | 'accent' | 'muted'
  title: React.ReactNode
  lead?: React.ReactNode
}

export default function PageHero({ eyebrow, eyebrowVariant = 'primary', title, lead }: PageHeroProps) {
  const eyebrowColor =
    eyebrowVariant === 'accent' ? 'var(--color-accent)'
    : eyebrowVariant === 'muted' ? 'var(--color-text-subtle)'
    : 'var(--color-primary)'

  return (
    <section
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid rgba(76, 122, 76, 0.12)',
        padding: '4.5rem 0 4rem',
      }}
    >
      <div className="container-narrow">
        {eyebrow && (
          <span
            style={{
              display: 'block',
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '1rem',
              color: eyebrowColor,
            }}
          >
            {eyebrow}
          </span>
        )}
        <h1
          style={{
            color: 'var(--color-ink)',
            lineHeight: 1.15,
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 700,
            marginBottom: lead ? '1rem' : 0,
          }}
        >
          {title}
        </h1>
        {lead && (
          <p
            style={{
              fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.75,
              color: 'var(--color-ink-muted)',
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
