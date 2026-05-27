import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'Terms governing the use of the Thalassemia Welfare Association website and donation services.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-narrow">
          <span className="eyebrow">Terms of use</span>
          <h1>Terms of use</h1>
          <p className="text-subtle" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}.
          </p>

          <section className="mt-8">
            <h2>1. About these terms</h2>
            <p className="mt-3">
              These terms apply to your use of the Thalassemia Welfare Association website and
              the donation, volunteer and contact services offered through it. By using the
              website you agree to these terms.
            </p>
          </section>

          <section className="mt-8">
            <h2>2. Donations</h2>
            <p className="mt-3">
              Donations are processed in Indian rupees. An 80G receipt is issued by email to the
              donor named in the transaction. Donations are non-refundable except in cases of
              proven duplicate payment or technical error. Refund requests must be raised within
              7 days at <a href="mailto:donate@twachennai.org">donate@twachennai.org</a>.
            </p>
          </section>

          <section className="mt-8">
            <h2>3. Content</h2>
            <p className="mt-3">
              Material on this website is intended for general information only. It is not a
              substitute for medical advice. Always consult a qualified physician for clinical
              decisions.
            </p>
          </section>

          <section className="mt-8">
            <h2>4. Limitation of liability</h2>
            <p className="mt-3">
              To the extent permitted by law, TWA Chennai is not liable for any indirect or
              consequential loss arising from use of the website.
            </p>
          </section>

          <section className="mt-8">
            <h2>5. Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of India. Disputes are subject to the
              jurisdiction of the courts of Chennai, Tamil Nadu.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
