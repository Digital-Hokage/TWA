import Icon, { type IconName } from './Icon'

type Stat = { value: string; label: string; icon: IconName; note: string }

// Static site: stats are edited here in code (the admin /stats editor was
// server-side and is disabled on static hosting — see _disabled/).
const STATS: Stat[] = [
  { value: '199',  label: 'Patients on Register',           icon: 'users',    note: 'As of 2026' },
  { value: '300+', label: 'Bone Marrow Transplants Free',   icon: 'award',    note: 'Fully covered' },
  { value: '20+',  label: 'Years of Uninterrupted Care',    icon: 'calendar', note: 'Since 2006' },
  { value: '₹0',   label: 'Cost to Every Patient We Serve', icon: 'heart',    note: 'Always free' },
]

export default function ImpactStats() {
  return (
    <section
      className="section-tight"
      style={{
        background: 'var(--color-bg-subtle)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
      aria-label="Organisation at a glance"
    >
      <div className="container">
        <div className="grid grid-4" style={{ gap: '0' }}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '2rem 1.75rem',
                borderRight: i < STATS.length - 1 ? '1px solid var(--color-border)' : undefined,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span className="icon-tile" aria-hidden="true">
                <Icon name={s.icon} size={20} />
              </span>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--color-primary)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', fontWeight: 500, lineHeight: 1.35 }}>
                {s.label}
              </div>
              <div style={{
                fontSize: '0.7rem', color: 'var(--color-text-subtle)',
                textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600,
              }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>
        <p style={{
          fontSize: '0.76rem', color: 'var(--color-text-subtle)',
          marginTop: '0.75rem', textAlign: 'center',
          letterSpacing: '0.01em',
        }}>
          Verified figures published in our annual report. Patient counts are not displayed
          in real-time to protect patient privacy.
        </p>
      </div>
    </section>
  )
}
