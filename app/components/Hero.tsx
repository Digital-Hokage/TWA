import Link from 'next/link'
import Icon from './Icon'

const MICRO_STATS = [
  { value: '199',  label: 'Patients in care' },
  { value: '300+', label: 'BMTs free' },
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
      style={{ padding: '5.5rem 0 5rem' }}
    >
      <div className="container">
        <div className="hero-grid">

          {/* ── Left: copy ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Eyebrow pill */}
            <span style={{
              alignSelf: 'flex-start',
              display: 'inline-flex', alignItems: 'center',
              fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--color-primary)',
              background: 'var(--color-primary-soft)',
              borderRadius: 'var(--radius-full)',
              padding: '0.35rem 0.85rem',
              marginBottom: '1.5rem',
            }}>
              VHS Hospital, Taramani · Chennai · Est. 2006
            </span>

            <h1
              id="hero-heading"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                lineHeight: 1.1,
                fontWeight: 700,
                color: 'var(--color-ink)',
                marginBottom: '1.5rem',
              }}
            >
              Learn from <span style={{ color: 'var(--color-primary)' }}>Yesterday.</span><br />
              Live for <span style={{ color: 'var(--color-primary)' }}>Today.</span><br />
              Hope for <span style={{ color: 'var(--color-primary)' }}>Tomorrow.</span>
            </h1>

            <p style={{
              fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.75,
              color: 'var(--color-ink-muted)',
              maxWidth: 480, marginBottom: '2rem',
            }}>
              For over two decades, TWA Chennai has provided lifesaving blood transfusions,
              medicines, and comprehensive care to thalassemia patients — completely free of
              cost. No family should lose a child to a treatable condition.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link href="/donate" className="btn btn-primary">
                Donate to a Patient <Icon name="arrow-right" size={15} />
              </Link>
              <Link href="/get-involved" className="btn btn-outline">
                Become a Blood Donor
              </Link>
            </div>

            {/* Trust strip */}
            <ul style={{
              marginTop: '1.5rem',
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem',
              listStyle: 'none', fontSize: '0.78rem', color: 'var(--color-ink-muted)',
            }}>
              {TRUST.map((t, i) => (
                <li key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ color: 'var(--color-primary)', display: 'inline-flex' }}>
                      <Icon name="check-circle" size={13} />
                    </span>
                    {t}
                  </span>
                  {i < TRUST.length - 1 && (
                    <span aria-hidden="true" style={{ color: 'var(--color-primary)', opacity: 0.5 }}>·</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: the statement card ── */}
          <div
            className="hero-image-col"
            style={{
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              borderRadius: 20,
              padding: '2.5rem',
              boxShadow: 'var(--shadow-card-hover)',
            }}
          >
            {/* Background photo of the VHS Blood Bank building */}
            <img
              src="/images/story/vhs-blood-bank.jpg"
              alt="Rotary Central TTK VHS Blood Bank — home of the TWA Thalassaemia Centre, Chennai since 2006"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
            />
            {/* Dark green overlay keeps the white text readable */}
            <div
              aria-hidden="true"
              style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(55, 89, 57, 0.85), rgba(55, 89, 57, 0.92))', zIndex: 1 }}
            />

            {/* Top block — quote */}
            <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '5rem',
                  lineHeight: 1,
                  color: 'rgba(255,255,255,0.2)',
                  marginBottom: '-1rem',
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </span>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: '1.3rem',
                lineHeight: 1.5,
                color: '#fff',
              }}>
                Home is a place where hearts are woven together, and no family member gets
                left behind or forgotten.
              </p>
              <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
                — Dr. Revathi Raj, Honorary President, TWA Chennai
              </p>
            </div>

            {/* Middle block — micro-stats */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem', display: 'flex', position: 'relative', zIndex: 2 }}>
              {MICRO_STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: '1 1 0', minWidth: 0, textAlign: 'center',
                    borderRight: i < MICRO_STATS.length - 1 ? '1px solid rgba(255,255,255,0.2)' : undefined,
                    padding: '0 0.5rem',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#fff', fontWeight: 700, fontSize: '2rem', lineHeight: 1.1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    marginTop: '0.35rem', color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.07em',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom block — badge */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span style={{
                display: 'inline-block',
                padding: '0.3rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.03em',
              }}>
                VHS Hospital, Taramani · Est. 2006
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
