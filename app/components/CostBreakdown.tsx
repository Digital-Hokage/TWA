import { MONTHLY_COST } from '../lib/constants'
import { type IconName } from './Icon'

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
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(76,122,76,0.1)',
                borderRadius: 14,
                padding: '1.75rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                {ROWS.map((r) => {
                  const pct = Math.round((r.amount / MONTHLY_COST.total) * 100)
                  return (
                    <li key={r.label}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
                        <div>
                          <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-ink)' }}>{r.label}</span>
                          <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>{r.detail}</span>
                        </div>
                        <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-primary)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>
                          {formatINR(r.amount)}
                        </span>
                      </div>
                      <div
                        aria-hidden="true"
                        style={{ height: 4, borderRadius: 'var(--radius-full)', background: 'rgba(76,122,76,0.1)', overflow: 'hidden' }}
                      >
                        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 'var(--radius-full)', background: 'var(--color-primary)' }} />
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div
                style={{
                  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem',
                  marginTop: '1.5rem', paddingTop: '1.25rem',
                  borderTop: '1.5px solid rgba(15,26,16,0.15)',
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--color-ink)' }}>Total per patient, per month</span>
                <span style={{
                  fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.5rem',
                  color: 'var(--color-ink)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap',
                }}>
                  {formatINR(MONTHLY_COST.total)}
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', marginTop: '1rem' }}>
              Comprehensive care including BMT, chelation, diagnostics, and transfusions for our
              patients is covered under the government insurance scheme through years of advocacy by TWA.
            </p>
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
