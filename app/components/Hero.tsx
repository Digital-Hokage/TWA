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
  'Government Medal of Honour',
]

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        background: 'linear-gradient(150deg, #0A0D1A 0%, #1A0707 50%, #080C18 100%)',
        padding: '6rem 0 5.5rem',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Radial atmospheric glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 12% 65%, rgba(185,28,28,0.18) 0%, transparent 52%), radial-gradient(ellipse at 82% 18%, rgba(15,118,110,0.09) 0%, transparent 48%)',
          pointerEvents: 'none',
        }}
      />
      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <div className="hero-grid">

          {/* ── Left: copy ── */}
          <div>
            {/* Pill badge */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              padding: '0.375rem 0.9rem',
              borderRadius: '999px',
              background: 'rgba(185,28,28,0.2)',
              border: '1px solid rgba(248,113,113,0.25)',
              color: '#FCA5A5',
              fontSize: '0.73rem', fontWeight: 700, letterSpacing: '0.09em',
              textTransform: 'uppercase',
              marginBottom: '2.25rem',
            }}>
              <Icon name="droplet" size={11} />
              VHS Hospital, Taramani, Chennai · Est. 2006
            </span>

            <h1
              id="hero-heading"
              style={{ marginBottom: '1.5rem', lineHeight: 1.05, color: '#F1F5F9' }}
            >
              Learn from Yesterday.<br />
              Live for Today.<br />
              <span style={{
                background: 'linear-gradient(135deg, #FCA5A5 0%, #F87171 60%, #FB923C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Hope for Tomorrow.
              </span>
            </h1>

            <p style={{
              fontSize: '1.125rem', lineHeight: 1.75,
              color: 'rgba(241,245,249,0.58)',
              maxWidth: '52ch', marginBottom: '2.5rem',
            }}>
              For over two decades, TWA Chennai has provided lifesaving blood transfusions,
              medicines, and comprehensive care to thalassemia patients — completely free of
              cost. No family should lose a child to a treatable condition.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
              <Link
                href="/donate"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.95rem 1.875rem', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #C41E1E 0%, #7F1313 100%)',
                  color: '#fff', fontWeight: 700, fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 28px rgba(185,28,28,0.50)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  letterSpacing: '-0.01em',
                  transition: 'transform .15s ease, box-shadow .2s ease',
                }}
              >
                Donate to a Patient <Icon name="arrow-right" size={16} />
              </Link>
              <Link
                href="/get-involved"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.95rem 1.875rem', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: 'rgba(255,255,255,0.88)', fontWeight: 600, fontSize: '1rem',
                  textDecoration: 'none', letterSpacing: '-0.01em',
                  transition: 'background .15s ease, border-color .15s ease',
                }}
              >
                Become a Blood Donor
              </Link>
            </div>

            {/* Glassmorphism stats strip */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}>
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                    flex: '1 1 0', minWidth: 0,
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '1.8rem', fontWeight: 800,
                    color: '#F87171', lineHeight: 1,
                    letterSpacing: '-0.035em',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)',
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
              listStyle: 'none', fontSize: '0.84rem', color: 'rgba(255,255,255,0.4)',
            }}>
              {TRUST.map((t) => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: '#34D399', flexShrink: 0, display: 'inline-flex' }}>
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
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '18px',
              }}
            />
            <div className="hero-image-sub">
              <ImagePlaceholder
                aspectRatio="1/1"
                label="Dr. Revathi Raj, President of TWA Chennai — portrait or candid at the centre"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              {/* Pull quote card */}
              <div
                style={{
                  background: 'linear-gradient(145deg, #C41E1E 0%, #7F1313 100%)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 16px 48px rgba(185,28,28,0.42)',
                }}
              >
                <svg
                  width="24" height="24" viewBox="0 0 24 24"
                  fill="rgba(255,255,255,0.22)" aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p style={{
                  color: 'rgba(255,255,255,0.95)', fontSize: '0.9rem',
                  lineHeight: 1.6, fontStyle: 'italic', margin: 0,
                }}>
                  No family should lose a child to a treatable condition.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: '0.75rem', margin: 0, fontWeight: 600, letterSpacing: '0.02em' }}>
                  Dr. Revathi Raj<br />
                  <span style={{ fontWeight: 400 }}>President, TWA Chennai</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
