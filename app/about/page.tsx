import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import Icon, { type IconName } from '../components/Icon'
import { ORG } from '../lib/constants'

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Founded in 2009, the Thalassemia Welfare Association supports thalassemia patients in Chennai and across Tamil Nadu with lifelong care, medicines and safe blood.',
}

const VALUES: { title: string; desc: string; icon: IconName }[] = [
  { title: 'Patient first',
    desc: 'Every decision is weighed against one question: does it improve the life of the patient we serve?',
    icon: 'heart' },
  { title: 'Transparent always',
    desc: 'Audited accounts, published expense ratios and a public list of our registrations. Trust is earned with evidence.',
    icon: 'file-text' },
  { title: 'Medically led',
    desc: 'Treatment protocols and partnerships are reviewed by paediatric haematologists. We follow guidelines, not trends.',
    icon: 'stethoscope' },
  { title: 'Community powered',
    desc: 'Donors, volunteers, blood donors and parent groups are partners — not audiences. We grow only because they choose to stay.',
    icon: 'users' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section style={{ background: 'var(--color-bg-subtle)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <span className="eyebrow">About</span>
            <h1>{ORG.name}</h1>
            <p className="lead" style={{ marginTop: '0.75rem' }}>
              Since {ORG.foundedYear}, we have walked alongside families navigating thalassemia in
              Tamil Nadu — one transfusion, one prescription, one school year at a time.
            </p>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="section">
          <div className="container-narrow">
            <div className="grid grid-2">
              <div className="card">
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Our mission</h2>
                <p>
                  To ensure that no thalassemia patient in Tamil Nadu misses a transfusion or a
                  dose of medicine because of cost — and that every family has access to
                  guidance, counselling and community support along the way.
                </p>
              </div>
              <div className="card">
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Our vision</h2>
                <p>
                  A generation of thalassemia patients who grow up well-treated, well-informed and
                  fully able to plan their futures — and a public that understands how a simple
                  carrier-screening conversation can prevent the next case.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section bg-subtle">
          <div className="container-narrow">
            <span className="eyebrow eyebrow--accent">Our story</span>
            <h2>How a small parents&apos; group became a statewide support network.</h2>
            <p style={{ marginTop: '1rem' }}>
              TWA Chennai began in {ORG.foundedYear} when a small group of parents whose children
              were living with thalassemia major realised the same thing at the same time:
              treatment was available, but the cost, logistics and emotional load were quietly
              breaking families. A few of those parents started coordinating blood donors, pooling
              prescriptions, and making hospital trips together.
            </p>
            <p style={{ marginTop: '1rem' }}>
              That informal mutual aid is still the heart of our work. What changed is the scale —
              today, we coordinate with hospitals and blood banks across the city, run carrier
              screening camps, and partner with physicians who guide our protocols. The promise to
              families has not changed: while a patient is in our care, treatment will not stop
              for want of money.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow eyebrow--muted">Our values</span>
              <h2>Four commitments that shape how we work.</h2>
            </div>
            <div className="grid grid-4">
              {VALUES.map((v) => (
                <article key={v.title} className="card card-hover">
                  <span className="icon-tile accent" aria-hidden="true"><Icon name={v.icon} size={20} /></span>
                  <h3 className="card-title" style={{ marginTop: '0.85rem' }}>{v.title}</h3>
                  <p className="card-body">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership placeholder */}
        <section className="section bg-subtle">
          <div className="container-narrow">
            <span className="eyebrow eyebrow--muted">Leadership</span>
            <h2>Our board and team.</h2>
            <p style={{ marginTop: '0.75rem' }}>
              TWA Chennai is governed by a board of trustees that includes parents of patients,
              treating physicians and independent professionals. No member of paid staff serves
              on the board. A full list of trustees, their roles and conflict-of-interest
              declarations is available in our annual report.
            </p>
            <div className="mt-6">
              <Link href="/transparency" className="btn btn-outline">
                View governance documents <Icon name="arrow-right" size={16} />
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
