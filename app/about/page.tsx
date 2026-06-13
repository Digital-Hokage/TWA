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
    'Founded in 2006, the Thalassemia Welfare Association supports thalassemia patients in Chennai and across Tamil Nadu with lifelong care, medicines and safe blood.',
}

const VALUES: { title: string; desc: string; icon: IconName }[] = [
  { title: 'Patient first',
    desc: 'Every decision is weighed against one question: does it improve the life of the patient we serve?',
    icon: 'heart' },
  { title: 'Transparent always',
    desc: 'Audited accounts, published expense ratios and a public list of our registrations. Trust is earned with evidence.',
    icon: 'file-text' },
  { title: 'Medically led',
    desc: 'Treatment protocols are reviewed by paediatric haematologists. We hold MoUs with Apollo Hospitals for bone marrow transplantation and Mediscan Systems for prenatal diagnosis. We follow evidence-based guidelines, not trends.',
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
              Tamil Nadu — one transfusion, one bone marrow transplant, one school year at a time.
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
              TWA Chennai began in 2006 when a small group of patient families, volunteers, and
              physicians came together at Voluntary Health Services (VHS) Hospital, Chennai. In the
              words of our Honorary President, Dr. Revathi Raj: &lsquo;Home is a place where hearts
              are woven together, and no family member gets left behind or forgotten.&rsquo;
            </p>
            <p style={{ marginTop: '1rem' }}>
              What started with four patients on regular transfusion in 2006 has grown to 199
              patients in 2026, over 300 bone marrow transplants performed free of cost, and a
              statewide network of care that extends to Coimbatore and Nellore.
            </p>
            <p style={{ marginTop: '1rem' }}>
              This is our story — told fully and honestly, with all the setbacks and the triumphs.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <Link href="/our-story" className="text-primary" style={{ textDecoration: 'underline', fontWeight: 600 }}>
                Read the full story in Dr. Revathi Raj&apos;s own words →
              </Link>
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
              declarations is available in our annual report. Dr. Revathi Raj serves as Honorary
              President of TWA and has guided the centre&apos;s clinical and advocacy work since
              its founding. The board also includes treating physicians, parent representatives,
              and independent professionals.
            </p>
            <h3 style={{ marginTop: '2rem' }}>Government Recognition</h3>
            <p style={{ marginTop: '0.75rem' }}>
              TWA&apos;s work has been acknowledged by the Government of Tamil Nadu with a Medal of
              Honour — a recognition of two decades of service to thalassemia patients and their
              families across the state.
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
