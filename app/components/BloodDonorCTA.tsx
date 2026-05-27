import Link from 'next/link'
import Icon, { type IconName } from './Icon'

type Item = { title: string; desc: string; icon: IconName }

const ITEMS: Item[] = [
  { title: 'Eligible donors', icon: 'check-circle',
    desc: 'Age 18–65, weight ≥ 50 kg, in good health and last donation more than 90 days ago.' },
  { title: 'Quick and safe', icon: 'shield',
    desc: 'Whole blood donation takes about 10 minutes. Sterile, single-use equipment is used at every camp.' },
  { title: 'Health benefits', icon: 'stethoscope',
    desc: 'Donors receive a free haemoglobin and blood-pressure screening at every donation.' },
  { title: 'Save up to three lives', icon: 'heart',
    desc: 'A single unit of whole blood can be separated into red cells, plasma and platelets, helping multiple patients.' },
]

export default function BloodDonorCTA() {
  return (
    <section className="section bg-dark" id="blood" aria-labelledby="donor-heading">
      <div className="container">
        <div className="section-header" style={{ color: '#fff' }}>
          <span className="eyebrow" style={{ color: '#FCA5A5' }}>Blood donors</span>
          <h2 id="donor-heading" style={{ color: '#fff' }}>You can give a thalassemia patient their next week of life.</h2>
          <p className="lead" style={{ margin: '0.75rem auto 0', color: 'rgba(255,255,255,0.78)' }}>
            Patients on our register need transfusions every 2–4 weeks. We coordinate drives across
            Chennai and welcome donors any time at our partner blood banks.
          </p>
        </div>

        <div className="grid grid-4">
          {ITEMS.map((it) => (
            <div key={it.title}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
              }}>
              <span style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(185, 28, 28, 0.18)', color: '#FCA5A5',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }} aria-hidden="true">
                <Icon name={it.icon} size={20} />
              </span>
              <h3 style={{ color: '#fff', fontSize: '1.05rem', marginTop: '0.85rem', marginBottom: '0.4rem' }}>
                {it.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.92rem' }}>{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex" style={{ justifyContent: 'center', gap: '0.75rem', marginTop: '2.25rem', flexWrap: 'wrap' }}>
          <Link href="/get-involved#blood-drive" className="btn btn-light btn-lg">
            Register as a blood donor
          </Link>
          <Link href="/contact" className="btn btn-outline btn-lg" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
            Host a drive at your workplace
          </Link>
        </div>
      </div>
    </section>
  )
}
