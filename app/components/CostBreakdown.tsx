import { MONTHLY_COST } from '../lib/constants'
import Icon, { type IconName } from './Icon'

type Row = { label: string; amount: number; icon: IconName; detail: string }

const ROWS: Row[] = [
  { label: 'Safe blood units',         amount: MONTHLY_COST.blood,     icon: 'droplet',     detail: '2 screened, leukocyte-filtered units' },
  { label: 'Iron chelation & medicines', amount: MONTHLY_COST.medicines, icon: 'pill',      detail: 'Deferasirox / deferiprone, folic acid' },
  { label: 'Diagnostic tests',         amount: MONTHLY_COST.tests,     icon: 'flask',       detail: 'Ferritin, liver & kidney panels' },
  { label: 'Transit & nutrition',      amount: MONTHLY_COST.transit,   icon: 'bus',         detail: 'Travel for families from rural areas' },
]

const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

export default function CostBreakdown() {
  return (
    <section className="section bg-subtle" aria-labelledby="cost-heading">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Where your donation goes</span>
          <h2 id="cost-heading">{formatINR(MONTHLY_COST.total)} covers one patient for one month.</h2>
          <p className="lead" style={{ margin: '0.75rem auto 0' }}>
            We publish every line item because trust is built on transparency, not slogans.
          </p>
        </div>

        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {ROWS.map((r) => (
                <li key={r.label} className="card card-flat" style={{ padding: '1rem 1.25rem' }}>
                  <div className="flex-between" style={{ alignItems: 'center', gap: '1rem' }}>
                    <div className="flex" style={{ alignItems: 'center', gap: '0.85rem' }}>
                      <span className="icon-tile" aria-hidden="true"><Icon name={r.icon} size={18} /></span>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>{r.label}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)' }}>{r.detail}</div>
                      </div>
                    </div>
                    <div style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{formatINR(r.amount)}</div>
                  </div>
                </li>
              ))}
              <li className="card" style={{ padding: '1rem 1.25rem', background: 'var(--color-text)', color: '#fff' }}>
                <div className="flex-between" style={{ alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, color: '#fff' }}>Total per patient, per month</span>
                  <span style={{ fontWeight: 800, fontSize: '1.15rem', fontVariantNumeric: 'tabular-nums', color: '#fff' }}>
                    {formatINR(MONTHLY_COST.total)}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <aside className="card" style={{ background: '#fff' }}>
            <h3 style={{ marginBottom: '0.75rem' }}>What changes when a patient is in our care</h3>
            <ul className="list-checks">
              <li>Transfusions are scheduled, not missed. Haemoglobin stays in the safe range.</li>
              <li>Iron chelation is taken consistently, preventing damage to heart and liver.</li>
              <li>Families stop choosing between rent and a child&apos;s medicine.</li>
              <li>School and college continue. Children plan futures, not just next month.</li>
            </ul>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', marginTop: '1rem' }}>
              Costs above reflect average direct medical expenditure per patient per month for
              the 2024–25 financial year. Administrative overhead is funded separately.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
