import Link from 'next/link'
import Icon, { type IconName } from './Icon'

type Program = {
  title: string
  desc: string
  icon: IconName
  href: string
}

const PROGRAMS: Program[] = [
  {
    title: 'Safe Blood Transfusions',
    desc: 'We coordinate with partner hospitals and blood banks to ensure regular, screened, leukocyte-filtered transfusions every 2–4 weeks for the patients in our care. Using leucodepletion filters and 4th generation ELISA kits. Febrile reaction rates kept below 1%. A pioneering use of scalp vein sets protects veins in long-term patients.',
    icon: 'droplet',
    href: '/programs#blood',
  },
  {
    title: 'Free Medicines & Iron Chelation',
    desc: 'Iron chelators like deferasirox are essential to prevent iron overload but cost ₹2,000–₹4,000 a month. We provide them free to families who cannot afford the lifelong expense. Chelation therapy is fully covered under the government insurance scheme. Our team monitors each patient\u2019s ferritin, liver, and cardiac iron quarterly.',
    icon: 'pill',
    href: '/programs#medicines',
  },
  {
    title: 'Diagnostics & Monitoring',
    desc: 'Quarterly ferritin, liver, kidney and cardiac monitoring at our partner laboratories — at no cost to patient families. Includes Hepatitis C screening and antiviral treatment where needed. All patients receive Vitamin D supplementation every 6 months to address bone disease.',
    icon: 'flask',
    href: '/programs#diagnostics',
  },
  {
    title: 'Transit Support',
    desc: 'Many of our patients travel from neighbouring districts. We assist with transit costs so a hospital visit never becomes a financial choice.',
    icon: 'bus',
    href: '/programs#transit',
  },
  {
    title: 'Awareness & Carrier Screening',
    desc: 'We run carrier-screening drives in colleges, workplaces and community events. We have represented thalassemia awareness at all regional obstetric meetings and conferences across Tamil Nadu. Our campaigns have reached the high-prevalence district of Sitteri, Dharmapuri.',
    icon: 'users',
    href: '/programs#awareness',
  },
  {
    title: 'Family Counselling',
    desc: 'A diagnosis changes a family. We support parents with guidance on care planning, school continuity and access to government schemes. We provide extended family counselling to prevent new affected births in existing families. We have assisted 9 successful deliveries within our own thalassemia patient cohort.',
    icon: 'heart',
    href: '/programs#counselling',
  },
]

export default function ProgramsOverview() {
  return (
    <section className="section" id="programs" aria-labelledby="programs-heading">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow--accent">What we do</span>
          <h2 id="programs-heading">A lifelong package of care, not a one-time gift.</h2>
          <p className="lead" style={{ margin: '0.75rem auto 0' }}>
            Thalassemia major is a lifelong condition. Patients need transfusions every few weeks
            and daily medication for life. Our programmes are built around that reality.
          </p>
        </div>

        <div className="grid grid-3">
          {PROGRAMS.map((p) => (
            <article key={p.title} className="card card-hover">
              <span className="icon-tile" aria-hidden="true">
                <Icon name={p.icon} size={20} />
              </span>
              <h3 className="card-title" style={{ marginTop: '1rem' }}>{p.title}</h3>
              <p className="card-body">{p.desc}</p>
              <Link
                href={p.href}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.85rem', fontSize: '0.9rem', fontWeight: 600 }}
              >
                Learn more <Icon name="arrow-right" size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
