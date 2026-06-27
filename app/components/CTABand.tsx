import Link from 'next/link'
import Icon from './Icon'

export default function CTABand() {
  return (
    <section
      className="section-tight"
      style={{
        background: 'linear-gradient(135deg, #991B1B 0%, #4C7A4C 45%, #7F1313 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
            alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <div style={{ maxWidth: '55ch' }}>
            <p style={{
              fontSize: '0.73rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
              marginBottom: '0.5rem',
            }}>
              Make a difference today
            </p>
            <h2 style={{ color: '#fff', marginBottom: '0.5rem', lineHeight: 1.15 }}>
              Give a child their next month of life.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              ₹8,500 funds one patient&apos;s blood, medicines and tests for a full month.
            </p>
          </div>
          <div className="flex" style={{ gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn btn-light btn-lg">
              Donate now <Icon name="arrow-right" size={16} />
            </Link>
            <Link
              href="/get-involved"
              className="btn btn-outline btn-lg"
              style={{
                background: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#fff',
              }}
            >
              Other ways to help
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
