import Link from 'next/link'
import Icon from './Icon'

export default function CTABand() {
  return (
    <section className="section-tight" style={{ background: 'var(--color-primary)' }}>
      <div className="container">
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
            alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          <div>
            <h2 style={{ color: '#fff', marginBottom: '0.3rem' }}>Give a child their next month of life.</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '60ch' }}>
              ₹8,500 funds one patient&apos;s blood, medicines and tests for a full month.
            </p>
          </div>
          <div className="flex" style={{ gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn btn-light btn-lg">
              Donate now <Icon name="arrow-right" size={16} />
            </Link>
            <Link href="/get-involved" className="btn btn-outline btn-lg"
              style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>
              Other ways to help
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
