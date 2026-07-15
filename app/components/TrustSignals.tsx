import Link from 'next/link'
import Icon, { type IconName } from './Icon'

type Signal = { title: string; desc: string; icon: IconName }
const SIGNALS: Signal[] = [
  { title: 'Registered non-profit', icon: 'building',
    desc: 'Society registered under the Tamil Nadu Societies Registration Act. Governance documents available on request.' },
  { title: '80G & 12A certified', icon: 'award',
    desc: 'Donations are eligible for tax deduction under Section 80G. Registration certificates held; numbers available on request.' },
  { title: 'Annual audited accounts', icon: 'file-text',
    desc: 'Independent statutory audit every financial year. Reports available on the Transparency page or on request.' },
  { title: 'Patient-first governance', icon: 'users',
    desc: 'Board includes parents of patients, treating physicians and independent professionals. No staff member sits on the board.' },
]

export default function TrustSignals() {
  return (
    <section className="section" aria-labelledby="trust-heading">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow--muted">Why donors trust us</span>
          <h2 id="trust-heading">Built on credentials, not claims.</h2>
        </div>

        <div className="grid grid-4">
          {SIGNALS.map((s) => (
            <div
              key={s.title}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: '1.5rem',
                borderLeft: '3px solid var(--color-primary)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--color-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                <Icon name={s.icon} size={14} /> Credential
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/transparency" className="btn btn-outline">
            See our registrations & financials <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
