import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import Icon, { type IconName } from '../components/Icon'

export const metadata: Metadata = {
  title: 'Our programmes',
  description: 'Safe blood transfusions, free medicines, diagnostics, transit support, awareness camps and family counselling for thalassemia patients in Tamil Nadu.',
}

type Section = { id: string; eyebrow: string; title: string; icon: IconName; body: React.ReactNode }

const SECTIONS: Section[] = [
  {
    id: 'blood', eyebrow: 'Core programme', title: 'Safe blood transfusions', icon: 'droplet',
    body: (
      <>
        <p>Children with thalassemia major need 2–4 transfusions a month for life. We work with hospitals and blood banks in Chennai to ensure that every patient on our register receives:</p>
        <ul className="list-checks mt-3">
          <li>Screened, leukocyte-filtered blood matched to their group and phenotype.</li>
          <li>Transfusion appointments scheduled in advance, not improvised in emergencies.</li>
          <li>Coordination with treating physicians on pre-transfusion haemoglobin targets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'medicines', eyebrow: 'Core programme', title: 'Free iron chelation & medicines', icon: 'pill',
    body: (
      <>
        <p>Repeated transfusions cause iron to build up in the heart, liver and endocrine glands. Daily iron chelators (deferasirox, deferiprone) prevent this — but cost ₹2,000 – ₹4,000 a month, which is impossible for many families. We supply chelators and supporting medicines free for families on our care register.</p>
      </>
    ),
  },
  {
    id: 'diagnostics', eyebrow: 'Core programme', title: 'Diagnostics & monitoring', icon: 'flask',
    body: (
      <>
        <p>Quarterly ferritin, liver, kidney and cardiac assessments at our partner laboratories. Cardiac T2* MRI access for older patients where indicated. All tests are reviewed with the treating physician.</p>
      </>
    ),
  },
  {
    id: 'transit', eyebrow: 'Support programme', title: 'Transit & nutrition support', icon: 'bus',
    body: (
      <>
        <p>Some of our patients travel several hours each way for treatment. A small transit allowance keeps a hospital visit from becoming an impossible cost. Where needed, we add nutrition support so that children gain weight steadily between transfusions.</p>
      </>
    ),
  },
  {
    id: 'awareness', eyebrow: 'Prevention', title: 'Awareness & carrier screening camps', icon: 'users',
    body: (
      <>
        <p>We run carrier-screening drives in colleges, workplaces and communities. Knowing your carrier status before planning a family is the single most effective step to prevent the next generation of patients.</p>
      </>
    ),
  },
  {
    id: 'counselling', eyebrow: 'Family support', title: 'Family counselling & advocacy', icon: 'heart',
    body: (
      <>
        <p>A diagnosis changes a family. We support parents with guidance on long-term care planning, school and college continuity, and access to government schemes and entitlements available to patients with chronic illness.</p>
      </>
    ),
  },
]

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: 'var(--color-bg-subtle)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <span className="eyebrow">Our programmes</span>
            <h1>A lifelong package of care.</h1>
            <p className="lead" style={{ marginTop: '0.75rem' }}>
              Six programmes that work together. None of them works in isolation — and skipping
              even one quietly undoes the others.
            </p>
          </div>
        </section>

        {SECTIONS.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="section"
            style={{ background: i % 2 ? 'var(--color-bg-subtle)' : '#fff' }}
          >
            <div className="container-narrow">
              <div className="flex" style={{ alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span className="icon-tile lg accent" aria-hidden="true"><Icon name={s.icon} size={26} /></span>
                <div>
                  <span className="eyebrow eyebrow--muted" style={{ marginBottom: 0 }}>{s.eyebrow}</span>
                  <h2 style={{ marginTop: '0.25rem' }}>{s.title}</h2>
                </div>
              </div>
              <div>{s.body}</div>
            </div>
          </section>
        ))}

        <CTABand />
      </main>
      <Footer />
    </>
  )
}
