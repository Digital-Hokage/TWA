import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import Icon from '../components/Icon'

export const metadata: Metadata = {
  title: 'What is thalassemia?',
  description:
    'Thalassemia is an inherited blood disorder in which the body produces less haemoglobin than it needs. Learn about types, treatment, carrier screening and care for thalassemia in India.',
}

export default function ThalassemiaPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: 'var(--color-bg-subtle)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <span className="eyebrow">Patient & family resources</span>
            <h1>Understanding thalassemia</h1>
            <p className="lead" style={{ marginTop: '0.75rem' }}>
              An overview of what thalassemia is, how it is treated, and why carrier
              screening before marriage is the single most powerful step a family can take.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', marginTop: '0.75rem' }}>
              This page is for general information. It is not a substitute for advice from a
              qualified medical professional. Always consult your treating physician.
            </p>
          </div>
        </section>

        {/* What */}
        <section className="section">
          <div className="container-narrow">
            <h2>What is thalassemia?</h2>
            <p style={{ marginTop: '0.75rem' }}>
              Thalassemia is an inherited blood disorder in which the body produces less of the
              haemoglobin protein than it needs. Haemoglobin is the molecule inside red blood cells
              that carries oxygen from the lungs to every organ in the body.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              When haemoglobin production is reduced, red blood cells do not work properly and
              are destroyed faster than the body can replace them. The result is chronic anaemia,
              which in its severe form can cause fatigue, growth problems and organ damage if
              untreated.
            </p>
          </div>
        </section>

        {/* Types */}
        <section className="section bg-subtle">
          <div className="container">
            <div className="section-header">
              <h2>Types of thalassemia</h2>
              <p className="lead" style={{ margin: '0.75rem auto 0' }}>
                Doctors classify thalassemia by which haemoglobin chain is affected (alpha or beta)
                and by how severely.
              </p>
            </div>
            <div className="grid grid-3">
              <article className="card">
                <span className="badge badge-accent">Carrier</span>
                <h3 className="card-title" style={{ marginTop: '0.85rem' }}>Thalassemia minor (trait)</h3>
                <p className="card-body">
                  A person carries one altered gene. They are usually healthy and may not need
                  treatment, but they can pass the gene to children. Screening before marriage is
                  important.
                </p>
              </article>
              <article className="card">
                <span className="badge">Moderate</span>
                <h3 className="card-title" style={{ marginTop: '0.85rem' }}>Thalassemia intermedia</h3>
                <p className="card-body">
                  Anaemia is more pronounced. Some patients need occasional transfusions and
                  medicines; many can lead largely normal lives with regular monitoring.
                </p>
              </article>
              <article className="card">
                <span className="badge badge-primary">Severe</span>
                <h3 className="card-title" style={{ marginTop: '0.85rem' }}>Thalassemia major</h3>
                <p className="card-body">
                  Both parents have passed on the altered gene. Patients need lifelong, regular
                  blood transfusions — typically every 2–4 weeks — and daily medicines to manage
                  iron overload.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="section">
          <div className="container-narrow">
            <h2>How is thalassemia treated?</h2>
            <ul className="list-checks" style={{ marginTop: '1rem' }}>
              <li><strong>Regular transfusions:</strong> Safe, screened, leukocyte-filtered blood every few weeks to keep haemoglobin in a safe range.</li>
              <li><strong>Iron chelation:</strong> Iron from repeated transfusions builds up in organs. Medicines like deferasirox or deferiprone remove the excess and protect the heart, liver and endocrine glands.</li>
              <li><strong>Regular monitoring:</strong> Quarterly ferritin and liver, kidney and cardiac assessments are essential.</li>
              <li><strong>Curative options:</strong> Bone-marrow transplantation can be curative for some patients with a matched donor, but it is not appropriate for every family.</li>
              <li><strong>Comprehensive care:</strong> Vaccinations, nutrition, schooling continuity and psychosocial support are part of good care, not extras.</li>
            </ul>
          </div>
        </section>

        {/* Prevention */}
        <section className="section bg-subtle">
          <div className="container-narrow">
            <h2>Carrier screening: the single most important step</h2>
            <p style={{ marginTop: '0.75rem' }}>
              Thalassemia major occurs only when both parents are carriers of the altered gene.
              A simple, inexpensive blood test (HbA2 quantification with a complete blood count)
              can tell a young adult whether they are a carrier. When two carriers know in
              advance, they can make informed choices and access prenatal counselling.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              India has one of the largest populations of thalassemia carriers in the world, with
              an estimated overall carrier rate of 3–4% (higher in some communities). Screening
              before marriage — or at the latest, before planning a family — is the most powerful
              public-health step a community can take.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-narrow text-center">
            <h2>Looking for help, or want to help?</h2>
            <p className="lead" style={{ margin: '0.75rem auto 1.5rem' }}>
              If you are a patient or a family member, our helpline is open six days a week.
              If you would like to support our work, every contribution counts.
            </p>
            <div className="flex" style={{ justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-outline btn-lg">
                Talk to us
              </Link>
              <Link href="/donate" className="btn btn-primary btn-lg">
                Donate <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  )
}
