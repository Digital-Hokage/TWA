import Icon, { type IconName } from './Icon'

type Stat = { value: string; label: string; icon: IconName; note: string }

const STATS: Stat[] = [
  { value: '199',  label: 'Patients on Register',             icon: 'users',         note: 'As of 2026' },
  { value: '300+', label: 'Bone Marrow Transplants Free',     icon: 'award',         note: 'Fully covered' },
  { value: '20+',  label: 'Years of Uninterrupted Care',      icon: 'calendar',      note: 'Since 2006' },
  { value: '₹0',   label: 'Cost to Every Patient We Serve',   icon: 'heart',         note: 'Always free' },
]

export default function ImpactStats() {
  return (
    <section
      className="section-tight"
      style={{ background: '#0F172A' }}
      aria-label="Organisation at a glance"
    >
      <div className="container">
        <div className="grid grid-4" style={{ gap: '0' }}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '2rem 1.5rem',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  width: 44, height: 44, borderRadius: 'var(--radius)',
                  background: 'rgba(185,28,28,0.2)', color: '#FCA5A5',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.5rem',
                }}
                aria-hidden="true"
              >
                <Icon name={s.icon} size={20} />
              </span>
              <div
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, lineHeight: 1.35 }}>
                {s.label}
              </div>
              <div
                style={{
                  fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600,
                }}
              >
                {s.note}
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)',
            marginTop: '0.75rem', textAlign: 'center',
          }}
        >
          Verified figures published in our annual report. Patient counts are not displayed
          in real-time to protect patient privacy.
        </p>
      </div>
    </section>
  )
}
