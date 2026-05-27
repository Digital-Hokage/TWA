import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'

export const metadata: Metadata = {
  title: 'Patient stories',
  description: 'Stories from thalassemia patients and families supported by TWA Chennai, shared with their permission.',
}

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: 'var(--color-bg-subtle)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <span className="eyebrow">Patient stories</span>
            <h1>The lives behind the work.</h1>
            <p className="lead" style={{ marginTop: '0.75rem' }}>
              Every patient on our register has a story. We publish them only with informed,
              written consent from the patient and family — and only when sharing helps a wider
              conversation, never to extract emotion.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-narrow">
            <div className="card" style={{ background: 'var(--color-bg-subtle)' }}>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>We&apos;re collecting stories with consent.</h2>
              <p>
                Rather than publish synthesised or anonymous testimonials, we are building this
                section the long way — by sitting with families, recording their own words, and
                getting written consent for what is shared and how.
              </p>
              <p className="mt-3">
                If you have been part of our community as a patient, parent, sibling or donor and
                would like to share your experience, please write to us at
                {' '}<a href="mailto:stories@twachennai.org">stories@twachennai.org</a>.
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
