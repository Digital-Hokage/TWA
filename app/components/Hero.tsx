import Link from 'next/link'
import Icon from './Icon'

const MICRO_STATS = [
  { value: '199',  label: 'Patients' },
  { value: '300+', label: 'BMTs' },
  { value: '₹0',   label: 'Cost' },
]

const TRUST = [
  'Registered non-profit',
  '80G tax exemption',
  'Audited annually',
]

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        background: '#FFFFFF',
        padding: '5.5rem 0 5rem',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        <div className="hero-grid">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.09em',
              textTransform: 'uppercase', color: 'var(--color-primary)',
              marginBottom: '1.5rem',
              borderLeft: '3px solid var(--color-primary)',
              paddingLeft: '0.75rem',
            }}>
              VHS Hospital, Taramani · Chennai · Est. 2006
            </span>

            <h1
              id="hero-heading"
              style={{ marginBottom: '1.5rem', lineHeight: 1.05, color: 'var(--color-text)' }}
            >
              Learn from Yesterday.<br />
              Live for Today.<br />
              Hope for Tomorrow.
            </h1>

            <p style={{
              fontSize: '1.125rem', lineHeight: 1.75,
              color: 'var(--color-text-muted)',
              maxWidth: '52ch', marginBottom: '2.5rem',
            }}>
              For over two decades, TWA Chennai has provided lifesaving blood transfusions,
              medicines, and comprehensive care to thalassemia patients — completely free of
              cost. No family should lose a child to a treatable condition.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
              <Link href="/donate" className="btn btn-primary btn-lg">
                Donate to a Patient <Icon name="arrow-right" size={16} />
              </Link>
              <Link href="/get-involved" className="btn btn-outline btn-lg">
                Become a Blood Donor
              </Link>
            </div>

            {/* Trust badges */}
            <ul style={{
              marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
              listStyle: 'none', fontSize: '0.84rem', color: 'var(--color-text-subtle)',
            }}>
              {TRUST.map((t) => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: 'var(--color-primary)', flexShrink: 0, display: 'inline-flex' }}>
                    <Icon name="check-circle" size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: single quote/stats card ── */}
          <div
            className="hero-image-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              alignSelf: 'stretch',
              background: 'var(--color-primary-dark)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {/* Decorative rule */}
            <div style={{ width: 48, height: 3, borderRadius: 'var(--radius-full)', background: 'var(--color-primary-mid)' }} />

            {/* Quote */}
            <p style={{
              marginTop: '2rem',
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1.5rem',
              lineHeight: 1.42,
              color: '#fff',
            }}>
              &ldquo;Home is a place where hearts are woven together, and no family member gets
              left behind or forgotten.&rdquo;
            </p>

            {/* Attribution */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>
                — Dr. Revathi Raj
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                Honorary President, TWA Chennai
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '0.2rem' }}>
                VHS Hospital, Taramani · Est. 2006
              </p>
            </div>

            <div style={{ flex: 1 }} />

            {/* Micro-stats */}
            <div style={{ display: 'flex', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              {MICRO_STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: '1 1 0', minWidth: 0, textAlign: 'center',
                    borderRight: i < MICRO_STATS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : undefined,
                  }}
                >
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>
                    {s.value}
                  </div>
                  <div style={{
                    marginTop: '0.3rem', color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
