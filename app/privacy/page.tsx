import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CONTACT } from '../lib/constants'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How the Thalassemia Welfare Association collects, uses and protects personal data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-narrow">
          <span className="eyebrow">Privacy policy</span>
          <h1>Privacy policy</h1>
          <p className="text-subtle" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}.
          </p>

          <section className="mt-8">
            <h2>1. What this policy covers</h2>
            <p className="mt-3">
              This policy explains what personal information the Thalassemia Welfare Association
              (&ldquo;TWA Chennai&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, why we collect it, how we use it, and the
              rights you have over it.
            </p>
          </section>

          <section className="mt-8">
            <h2>2. Information we collect</h2>
            <ul className="list-checks mt-3">
              <li>Information you give us directly: name, email, phone, PAN (for 80G receipts), and any message you share.</li>
              <li>Information about your donation: amount, frequency, payment method (we do not store card details).</li>
              <li>Standard server logs: IP address, browser type, pages visited, for security and analytics.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>3. How we use it</h2>
            <ul className="list-checks mt-3">
              <li>To process your donation and issue 80G receipts.</li>
              <li>To respond to your messages, volunteer applications and partnership enquiries.</li>
              <li>To send occasional updates about our work (you can opt out at any time).</li>
              <li>To comply with our legal and regulatory obligations.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>4. Who we share it with</h2>
            <p className="mt-3">
              We share personal data only with the service providers we need to operate — for
              example, our payment gateway and email service. We do not sell donor data.
            </p>
          </section>

          <section className="mt-8">
            <h2>5. Your rights</h2>
            <p className="mt-3">
              You can ask us at any time to confirm what data we hold about you, correct it, or
              delete it. Write to <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>
          </section>

          <section className="mt-8">
            <h2>6. Contact</h2>
            <p className="mt-3">
              Questions about this policy? Please email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
