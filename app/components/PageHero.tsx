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
        borderBottom: '1px solid var(--color-border)',
        padding: '4rem 0 3.5rem',
      }}
    >
      <div className="container-narrow">
        {eyebrow && (
          <span
            style={{
              display: 'block',
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '1rem',
              color: eyebrowColor,
              borderLeft: '3px solid currentColor',
              paddingLeft: '0.75rem',
            }}
          >
            {eyebrow}
          </span>
        )}
        <h1
          style={{
            color: 'var(--color-text)',
            lineHeight: 1.08,
            marginBottom: lead ? '1rem' : 0,
          }}
        >
          {title}
        </h1>
        {lead && (
          <p
            style={{
              fontSize: '1.125rem', lineHeight: 1.72,
              color: 'var(--color-text-muted)',
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
