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
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #111827 100%)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
      aria-label="Organisation at a glance"
    >
      <div className="container">
        <div className="grid grid-4" style={{ gap: '0' }}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '2.25rem 1.75rem',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                position: 'relative',
              }}
            >
              <span
                style={{
                  width: 46, height: 46, borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(185,28,28,0.25) 0%, rgba(127,19,19,0.18) 100%)',
                  border: '1px solid rgba(248,113,113,0.15)',
                  color: '#FCA5A5',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.5rem',
                }}
                aria-hidden="true"
              >
                <Icon name={s.icon} size={20} />
              </span>
              <div
                style={{
                  fontSize: 'clamp(2.25rem, 4.5vw, 3rem)',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #fff 0%, #FCA5A5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.35 }}>
                {s.label}
              </div>
              <div
                style={{
                  fontSize: '0.7rem', color: 'rgba(255,255,255,0.32)',
                  textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600,
                }}
              >
                {s.note}
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: '0.76rem', color: 'rgba(255,255,255,0.28)',
            marginTop: '0.75rem', textAlign: 'center',
            letterSpacing: '0.01em',
          }}
        >
          Verified figures published in our annual report. Patient counts are not displayed
          in real-time to protect patient privacy.
        </p>
      </div>
    </section>
  )
}
