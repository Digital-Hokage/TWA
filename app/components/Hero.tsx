import Link from 'next/link'
import Icon from './Icon'
import ImagePlaceholder from './ImagePlaceholder'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        background: 'linear-gradient(135deg, #FFF7F7 0%, #F8FAFC 55%, #F0FDF9 100%)',
        borderBottom: '1px solid var(--color-border)',
        padding: '5rem 0 4.5rem',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* subtle radial glow behind the right column */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, right: 0,
          width: '55%', height: '100%',
          background: 'radial-gradient(ellipse at 75% 30%, rgba(185,28,28,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div className="hero-grid">

          {/* ── Left: copy ── */}
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '1.5rem', maxWidth: '100%' }}>
              <Icon name="droplet" size={13} />
              VHS Hospital, Taramani, Chennai · Est. 2006
            </span>

            <h1
              id="hero-heading"
              style={{ marginBottom: '1.25rem', lineHeight: 1.1 }}
            >
              Learn from Yesterday.<br />
              Live for Today.<br />
              <span style={{ color: 'var(--color-primary)' }}>Hope for Tomorrow.</span>
            </h1>

            <p className="lead" style={{ maxWidth: '56ch', marginBottom: '2rem' }}>
              For over two decades, TWA Chennai has provided lifesaving blood transfusions,
              medicines, and comprehensive care to thalassemia patients — completely free of
              cost. No family should lose a child to a treatable condition.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.25rem' }}>
              <Link href="/donate" className="btn btn-primary btn-lg">
                Donate to a Patient <Icon name="arrow-right" size={16} />
              </Link>
              <Link href="/get-involved" className="btn btn-outline btn-lg">
                Become a Blood Donor
              </Link>
            </div>

            {/* mini stats bar */}
            <div className="hero-mini-stats">
              {[
                { value: '199',  label: 'Patients in care' },
                { value: '300+', label: 'BMTs performed free' },
                { value: '20+',  label: 'Years of service' },
                { value: '₹0',   label: 'Cost to patients' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: '1.65rem', fontWeight: 800,
                      color: 'var(--color-primary)', lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem', color: 'var(--color-text-subtle)',
                      marginTop: '0.2rem', fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <ul
              style={{
                marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
                listStyle: 'none', fontSize: '0.875rem', color: 'var(--color-text-muted)',
              }}
            >
              {[
                'Registered non-profit',
                '80G tax exemption',
                'Government Medal of Honour',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Icon name="check-circle" size={16} className="text-accent" />
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
              {/* pull quote card */}
              <div
                style={{
                  background: 'var(--color-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '0.6rem',
                }}
              >
                <svg
                  width="24" height="24" viewBox="0 0 24 24"
                  fill="rgba(255,255,255,0.3)" aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p
                  style={{
                    color: '#fff', fontSize: '0.875rem',
                    lineHeight: 1.55, fontStyle: 'italic', margin: 0,
                  }}
                >
                  No family should lose a child to a treatable condition.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', margin: 0, fontWeight: 500 }}>
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
