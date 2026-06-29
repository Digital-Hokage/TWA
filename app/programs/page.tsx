import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import Icon, { type IconName } from '../components/Icon'
import PageHero from '../components/PageHero'

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
          <li>Leucodepletion filters and 4th generation ELISA kits for all screened blood units. Febrile reaction rates maintained below 1%.</li>
          <li>Alloimmunisation rates and the need for splenectomy reduced to 4.5% — among the lowest in India.</li>
          <li>A pioneering technique using simple scalp vein sets protects veins in patients undergoing long-term transfusions.</li>
          <li>Transfusion appointments are scheduled in advance and coordinated with treating physicians based on pre-transfusion haemoglobin targets.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'medicines', eyebrow: 'Core programme', title: 'Free iron chelation & medicines', icon: 'pill',
    body: (
      <>
        <p>Repeated transfusions cause iron to build up in the heart, liver and endocrine glands. Daily iron chelators (deferasirox, deferiprone) prevent this — but cost ₹2,000 – ₹4,000 a month, which is impossible for many families. We supply chelators and supporting medicines free for families on our care register.</p>
        <p className="mt-3">Chelation therapy, supporting medicines, and the cost of iron monitoring are now covered under the government insurance scheme — the result of years of advocacy by TWA. Hepatitis C, historically at 33% in our cohort, is now actively treated with newer oral antiviral agents; all patients have cleared the virus within 3 months of a 6-month therapy course.</p>
      </>
    ),
  },
  {
    id: 'diagnostics', eyebrow: 'Core programme', title: 'Diagnostics & monitoring', icon: 'flask',
    body: (
      <>
        <p>Quarterly ferritin, liver, kidney and cardiac assessments at our partner laboratories. Cardiac T2* MRI access for older patients where indicated. All tests are reviewed with the treating physician.</p>
        <p className="mt-3">Cardiac T2* MRI is available for older patients where indicated. All patients receive Vitamin D supplementation every 6 months to address bone disease, which is particularly prevalent in the young adult population. Hepatitis B vaccination with boosters every 5 years is standard for all patients.</p>
      </>
    ),
  },
  {
    id: 'bmt', eyebrow: 'Curative Care', title: 'Bone Marrow Transplantation', icon: 'stethoscope',
    body: (
      <>
        <p>For eligible patients with a matched donor, bone marrow transplantation (BMT) offers a cure. Through an MoU with Apollo Hospitals, Chennai, we have facilitated over 300 BMT procedures — including haploidentical BMT — completely free of cost for patients in our care. The average age of patients still on regular transfusion is now over 15 years, as most younger patients have had successful BMTs. TWA also assists with access to BMT through the TBSY government scheme.</p>
      </>
    ),
  },
  {
    id: 'transit', eyebrow: 'Support programme', title: 'Transit & nutrition support', icon: 'bus',
    body: (
      <>
        <p>Some of our patients travel several hours each way for treatment. A small transit allowance keeps a hospital visit from becoming an impossible cost. Where needed, we add nutrition support so that children gain weight steadily between transfusions.</p>
        <p className="mt-3">Annamayil, our NGO partner, provides high-quality nutritious meals to patients travelling for transfusion sessions. Ensuring good nutrition between transfusions helps children maintain healthy weight and development.</p>
      </>
    ),
  },
  {
    id: 'awareness', eyebrow: 'Prevention', title: 'Awareness & carrier screening camps', icon: 'users',
    body: (
      <>
        <p>We run carrier-screening drives in colleges, workplaces, schools, and communities. Our volunteers ensure that thalassemia awareness is represented at all regional obstetric meetings and conferences across Tamil Nadu. We have conducted extensive campaigns in Sitteri, Dharmapuri — one of the highest-prevalence districts in the state.</p>
        <p className="mt-3">TWA has assisted over 100 chorion villous sampling (CVS) procedures through an MoU with Mediscan Systems, helping families access prenatal diagnosis and informed choices. Nine babies have been successfully delivered within our own thalassemia patient cohort.</p>
      </>
    ),
  },
  {
    id: 'counselling', eyebrow: 'Family support', title: 'Family counselling & advocacy', icon: 'heart',
    body: (
      <>
        <p>A diagnosis changes a family. We support parents with guidance on long-term care planning, school and college continuity, and access to government schemes and entitlements available to patients with chronic illness.</p>
        <p className="mt-3">We provide extended family counselling to help prevent new affected births in existing families. For young adults in our cohort, we address concerns around higher education, marriage, and sexual health. Post-splenectomy patients are issued a care card instructing them to start early antibiotics at the first sign of fever or infection.</p>
      </>
    ),
  },
  {
    id: 'network', eyebrow: 'Network & Sister Centres', title: 'Expanding the Model Beyond Chennai', icon: 'building',
    body: (
      <>
        <p>To make this level of care accessible to more families, TWA has established two sister centres with the same care pathways:</p>
        <ul className="list-checks mt-3">
          <li>Masonic Medical Centre, Coimbatore — led by Dr. Kavitha Ganesan</li>
          <li>Rotary Centre, Nellore — led by Dr. Ramya Uppuluri</li>
        </ul>
        <p className="mt-3">Together, these centres support an additional 150 children outside Chennai. TWA provides ongoing guidance on clinical protocols and advocacy to both centres.</p>
      </>
    ),
  },
  {
    id: 'wellness', eyebrow: 'Wellness', title: 'Camp Rainbow — Art Therapy', icon: 'heart',
    body: (
      <>
        <p>Camp Rainbow, our NGO partner, conducts regular art therapy and creative wellness sessions for young patients at our centre. These sessions support the psychological and emotional wellbeing of children who spend significant time in clinical settings.</p>
      </>
    ),
  },
]

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Our programmes"
          title="A lifelong package of care."
          lead="Nine programmes that work together. None of them works in isolation — and skipping even one quietly undoes the others."
        />

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
