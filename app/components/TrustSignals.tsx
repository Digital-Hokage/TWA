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
            <div key={s.title} className="card card-hover">
              <span className="icon-tile accent lg" aria-hidden="true"><Icon name={s.icon} size={22} /></span>
              <h3 className="card-title" style={{ marginTop: '1rem', fontWeight: 700 }}>{s.title}</h3>
              <p className="card-body">{s.desc}</p>
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
