import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import PageHero from '../components/PageHero'

export const metadata: Metadata = {
  title: 'Patient stories',
  description: 'Stories from thalassemia patients and families supported by TWA Chennai, shared with their permission.',
}

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Patient stories"
          title="The lives behind the work."
          lead="Every patient on our register has a story. We publish them only with informed, written consent from the patient and family — and only when sharing helps a wider conversation, never to extract emotion."
        />

        <section className="section">
          <div className="container-narrow">
            <div
              className="card"
              style={{
                borderLeft: '3px solid var(--color-primary)',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(90deg, rgba(185,28,28,0.03) 0%, transparent 100%)',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--color-primary)',
                  display: 'block', marginBottom: '0.75rem',
                }}
              >
                In progress
              </span>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>We&apos;re collecting stories with consent.</h2>
              <p style={{ lineHeight: 1.72 }}>
                Rather than publish synthesised or anonymous testimonials, we are building this
                section the long way — by sitting with families, recording their own words, and
                getting written consent for what is shared and how.
              </p>
              <p className="mt-3" style={{ lineHeight: 1.72 }}>
                If you have been part of our community as a patient, parent, sibling or donor and
                would like to share your experience, please write to us at
                {' '}<a href="mailto:stories@twachennai.org" style={{ fontWeight: 600 }}>stories@twachennai.org</a>.
              </p>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  )
}
