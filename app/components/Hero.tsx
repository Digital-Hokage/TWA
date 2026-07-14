import Link from 'next/link'
import Icon from './Icon'
import ImagePlaceholder from './ImagePlaceholder'

const STATS = [
  { value: '199',  label: 'Patients in care' },
  { value: '300+', label: 'BMTs performed free' },
  { value: '20+',  label: 'Years of service' },
  { value: '₹0',   label: 'Cost to patients' },
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

            {/* Stats strip */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              borderRadius: '14px',
              background: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
            }}>
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderRight: i < STATS.length - 1 ? '1px solid var(--color-border)' : undefined,
                    flex: '1 1 0', minWidth: 0,
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '1.8rem', fontWeight: 800,
                    color: 'var(--color-primary)', lineHeight: 1,
                    letterSpacing: '-0.035em',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: '0.7rem', color: 'var(--color-text-subtle)',
                    marginTop: '0.3rem', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.07em',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
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

          {/* ── Right: images ── */}
          <div className="hero-image-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <ImagePlaceholder
              aspectRatio="16/11"
              label="Warm group photo of patients, families and medical staff at the TWA Chennai centre, VHS Taramani — showing the community and care atmosphere"
            />
            <div className="hero-image-sub">
              <ImagePlaceholder
                aspectRatio="1/1"
                label="Dr. Revathi Raj, President of TWA Chennai — portrait or candid at the centre"
              />
              {/* Pull quote card */}
              <div
                style={{
                  background: 'var(--color-primary-soft)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '3px solid var(--color-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '0.75rem',
                }}
              >
                <svg
                  width="22" height="22" viewBox="0 0 24 24"
                  fill="var(--color-primary)" opacity={0.3} aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p style={{
                  color: 'var(--color-text)', fontSize: '0.9rem',
                  lineHeight: 1.65, fontStyle: 'italic', fontWeight: 500, margin: 0,
                }}>
                  No family should lose a child to a treatable condition.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', margin: 0, fontWeight: 600 }}>
                  Dr. Revathi Raj<br />
                  <span style={{ fontWeight: 400 }}>Honorary President, TWA Chennai</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
