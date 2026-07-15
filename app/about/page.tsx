import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import PageHero from '../components/PageHero'
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
    desc: 'Treatment protocols are reviewed by paediatric haematologists. We hold MoUs with Apollo Hospitals for bone marrow transplantation and Mediscan Systems for prenatal diagnosis.',
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

        <PageHero
          eyebrow="About"
          title={ORG.name}
          lead={`Since ${ORG.foundedYear}, we have walked alongside families navigating thalassemia in Tamil Nadu — one transfusion, one bone marrow transplant, one school year at a time.`}
        />

        {/* Blood Bank building banner */}
        <section style={{ padding: '2rem 1.5rem 0' }}>
          <div className="container">
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', maxHeight: 400, borderRadius: 16, overflow: 'hidden', marginBottom: '2rem' }}>
              <Image
                src="/images/story/vhs-blood-bank.jpg"
                alt="Rotary Central TTK VHS Blood Bank — home of the TWA Thalassaemia Centre since 2006"
                fill
                sizes="(max-width: 1100px) 100vw, 1100px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="section">
          <div className="container-narrow">
            <div className="grid grid-2">
              <div
                className="card"
                style={{
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <span className="icon-tile" aria-hidden="true" style={{ marginBottom: '1.125rem' }}>
                  <Icon name="heart" size={22} />
                </span>
                <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Our mission</h2>
                <p style={{ lineHeight: 1.72 }}>
                  To ensure that no thalassemia patient in Tamil Nadu misses a transfusion or a
                  dose of medicine because of cost — and that every family has access to
                  guidance, counselling and community support along the way.
                </p>
              </div>
              <div
                className="card"
                style={{
                  borderTop: '3px solid var(--color-accent)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <span className="icon-tile accent" aria-hidden="true" style={{ marginBottom: '1.125rem' }}>
                  <Icon name="zap" size={22} />
                </span>
                <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Our vision</h2>
                <p style={{ lineHeight: 1.72 }}>
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
            <h2 style={{ marginTop: '0.25rem', marginBottom: '1.25rem' }}>
              How a small parents&apos; group became a statewide support network.
            </h2>
            <blockquote
              style={{
                borderLeft: '3px solid var(--color-primary)',
                background: 'linear-gradient(90deg, rgba(76,122,76,0.04) 0%, transparent 100%)',
                borderRadius: '0 8px 8px 0',
                padding: '1rem 1.375rem',
                marginBottom: '1.5rem',
                fontStyle: 'italic',
                color: 'var(--color-text-muted)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
              }}
            >
              &lsquo;Home is a place where hearts are woven together, and no family member gets left
              behind or forgotten.&rsquo;
              <footer style={{ marginTop: '0.5rem', fontStyle: 'normal', fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text-subtle)' }}>
                — Dr. Revathi Raj, Honorary President
              </footer>
            </blockquote>
            <p style={{ lineHeight: 1.72 }}>
              TWA Chennai began in 2006 when a small group of patient families, volunteers, and
              physicians came together at Voluntary Health Services (VHS) Hospital, Chennai.
              What started with four patients on regular transfusion has grown to 199 patients
              in 2026, over 300 bone marrow transplants performed free of cost, and a statewide
              network of care that extends to Coimbatore and Nellore.
            </p>
            <p style={{ marginTop: '1rem', lineHeight: 1.72 }}>
              This is our story — told fully and honestly, with all the setbacks and the triumphs.
            </p>
            <p style={{ marginTop: '1.25rem' }}>
              <Link href="/our-story" className="btn btn-primary btn-sm">
                Read the full story <Icon name="arrow-right" size={14} />
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
                  <span className="icon-tile accent" aria-hidden="true" style={{ marginBottom: '1rem' }}>
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3 className="card-title">{v.title}</h3>
                  <p className="card-body">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section bg-subtle">
          <div className="container-narrow">
            <span className="eyebrow eyebrow--muted">Leadership</span>
            <h2 style={{ marginTop: '0.25rem', marginBottom: '1rem' }}>Our board and team.</h2>
            <p style={{ lineHeight: 1.72 }}>
              TWA Chennai is governed by a board of trustees that includes parents of patients,
              treating physicians and independent professionals. No member of paid staff serves
              on the board. Dr. Revathi Raj serves as Honorary President and has guided the
              centre&apos;s clinical and advocacy work since its founding.
            </p>

            {/* Government recognition callout */}
            <div
              style={{
                marginTop: '2rem',
                background: 'linear-gradient(135deg, rgba(76,122,76,0.06) 0%, rgba(76,122,76,0.03) 100%)',
                border: '1px solid rgba(76,122,76,0.18)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 44, height: 44, borderRadius: 10,
                  background: 'rgba(76,122,76,0.1)',
                  color: 'var(--color-primary)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}
                aria-hidden="true"
              >
                <Icon name="award" size={22} />
              </span>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.875rem', letterSpacing: '0.02em', marginBottom: '0.35rem' }}>
                  Government Acknowledgement
                </div>
                <p style={{ fontSize: '0.935rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
                  TWA&apos;s two decades of service has been acknowledged by the Government of Tamil Nadu
                  — a recognition of our commitment to thalassemia patients and their families
                  across the state.
                </p>
              </div>
            </div>

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
