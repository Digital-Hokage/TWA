import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VolunteerForm from '../components/VolunteerForm'
import BloodDonorCTA from '../components/BloodDonorCTA'
import Icon, { type IconName } from '../components/Icon'

export const metadata: Metadata = {
  title: 'Get involved',
  description: 'Volunteer with TWA Chennai. Roles for blood drive coordinators, patient companions, fundraisers, medical professionals and digital support.',
}

const ROLES: { title: string; desc: string; icon: IconName; commitment: string }[] = [
  { title: 'Blood drive coordinator', icon: 'droplet',
    desc: 'Help organise monthly blood donation camps across Chennai. Coordinate venues, donors and logistics. No medical background required.',
    commitment: '4–6 hours / week' },
  { title: 'Patient companion', icon: 'heart',
    desc: 'Spend time with patients during transfusion days. Read aloud, help with homework, give a parent a few hours of rest.',
    commitment: '2–4 hours / week' },
  { title: 'Office & digital support', icon: 'file-text',
    desc: 'Data entry, donor outreach, social media, graphic design, grant documentation. Work remotely or from our centre.',
    commitment: 'Flexible' },
  { title: 'Fundraising & events', icon: 'award',
    desc: 'Run a workplace campaign, host a friends-and-family event, organise a marathon team. We provide collateral and on-the-ground support.',
    commitment: 'Project-based' },
  { title: 'Medical & counselling', icon: 'stethoscope',
    desc: 'Licensed clinicians, psychologists and social workers contributing pro-bono hours for patient consultations and family counselling.',
    commitment: 'By arrangement' },
]

export default function GetInvolvedPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: 'var(--color-bg-subtle)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <span className="eyebrow eyebrow--accent">Get involved</span>
            <h1>Your time is as valuable as your blood.</h1>
            <p className="lead" style={{ marginTop: '0.75rem' }}>
              Whether you have an hour a week, a weekend a month, or a professional skill we
              urgently need — there is a role for you at TWA Chennai. Our three dedicated
              volunteers and three staff members cannot do this alone. Your time, your blood,
              and your voice are urgently needed.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Volunteer roles</h2>
            </div>
            <div className="grid grid-3">
              {ROLES.map((r) => (
                <article key={r.title} className="card card-hover">
                  <span className="icon-tile accent" aria-hidden="true"><Icon name={r.icon} size={20} /></span>
                  <h3 className="card-title" style={{ marginTop: '0.85rem' }}>{r.title}</h3>
                  <p className="card-body">{r.desc}</p>
                  <p style={{ marginTop: '0.85rem', fontSize: '0.82rem', color: 'var(--color-text-subtle)' }}>
                    Commitment: <strong style={{ color: 'var(--color-text-muted)' }}>{r.commitment}</strong>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-narrow">
            <h2>Thank You to Our Blood Donors</h2>
            <p style={{ marginTop: '0.75rem' }}>
              This centre exists because of people who gave blood, again and again, with no
              expectation of return. Our patients — especially children — depend on voluntary,
              non-remunerated blood donation for life. We thank every individual, college,
              company, and community group that has ever organised or participated in a blood
              donation camp for TWA.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              If your organisation would like to host a dedicated blood drive for thalassemia
              patients, please contact us — we will provide full logistical support.
            </p>
          </div>
        </section>

        <section id="apply" className="section bg-subtle">
          <div className="container">
            <VolunteerForm />
          </div>
        </section>

        <BloodDonorCTA
          extraNote="Every unit of blood donated at a TWA camp goes directly to a patient in our care. Over two decades, voluntary blood donors have been the single most important reason our patients are alive today. We remain deeply grateful to every donor who has ever shown up — and we welcome you to join the TWA donor family."
        />
      </main>
      <Footer />
    </>
  )
}
