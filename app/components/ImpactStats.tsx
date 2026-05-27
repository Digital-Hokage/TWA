import Icon, { type IconName } from './Icon'

type Stat = { value: string; label: string; icon: IconName; note?: string }

const STATS: Stat[] = [
  { value: '15+',  label: 'Years of service',          icon: 'award' },
  { value: '100%', label: 'Of donations reach patient care', icon: 'rupee', note: 'See Transparency report' },
  { value: '24×7', label: 'Patient helpline',          icon: 'phone' },
  { value: '0',    label: 'Cost to patients we serve', icon: 'check-circle' },
]

export default function ImpactStats() {
  return (
    <section className="section-tight bg-subtle" aria-label="Organisation at a glance">
      <div className="container">
        <div className="grid grid-4">
          {STATS.map((s) => (
            <div key={s.label} className="card card-flat" style={{ padding: '1.25rem 1.5rem' }}>
              <div className="flex" style={{ alignItems: 'center', gap: '0.85rem' }}>
                <span className="icon-tile accent" aria-hidden="true">
                  <Icon name={s.icon} size={20} />
                </span>
                <div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginTop: '1rem', textAlign: 'center' }}>
          Verified figures published in our annual report. Patient and donor numbers are intentionally not
          displayed in real-time to protect patient privacy.
        </p>
      </div>
    </section>
  )
}
