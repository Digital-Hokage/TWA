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

export default function BloodDonorCTA({ extraNote }: { extraNote?: string }) {
  return (
    <section
      className="section bg-subtle"
      id="blood"
      aria-labelledby="donor-heading"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow--accent">Blood donors</span>
          <h2 id="donor-heading">You can give a thalassemia patient their next week of life.</h2>
          <p className="lead" style={{ margin: '0.75rem auto 0' }}>
            Patients on our register need transfusions every 2–4 weeks. We coordinate drives across
            Chennai and welcome donors any time at our partner blood banks.
          </p>
        </div>

        <div className="grid grid-4">
          {ITEMS.map((it) => (
            <div key={it.title} className="card">
              <span className="icon-tile accent" aria-hidden="true">
                <Icon name={it.icon} size={20} />
              </span>
              <h3 style={{ fontSize: '1.05rem', marginTop: '0.85rem', marginBottom: '0.4rem' }}>
                {it.title}
              </h3>
              <p style={{ fontSize: '0.92rem' }}>{it.desc}</p>
            </div>
          ))}
        </div>

        <p style={{ color: 'var(--color-text-muted)', maxWidth: '70ch', margin: '2rem auto 0', textAlign: 'center' }}>
          Blood donors are the foundation of everything we do. Without consistent, voluntary donors,
          there is no alternative for our patients. We remain deeply grateful to every individual who
          has donated blood at our camps over the past two decades.
        </p>

        {extraNote && (
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '70ch', margin: '1.25rem auto 0', textAlign: 'center' }}>
            {extraNote}
          </p>
        )}

        <div className="flex" style={{ justifyContent: 'center', gap: '0.75rem', marginTop: '2.25rem', flexWrap: 'wrap' }}>
          <Link href="/get-involved#blood-drive" className="btn btn-primary btn-lg">
            Register as a blood donor
          </Link>
          <Link href="/contact" className="btn btn-outline btn-lg">
            Host a drive at your workplace
          </Link>
        </div>
      </div>
    </section>
  )
}
