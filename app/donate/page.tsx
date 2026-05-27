import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DonateForm from '../components/DonateForm'
import TaxBenefitsCalculator from '../components/TaxBenefitsCalculator'
import CostBreakdown from '../components/CostBreakdown'
import TrustSignals from '../components/TrustSignals'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Donate to support thalassemia patients in Tamil Nadu. ₹8,500 funds one patient for a full month. Eligible for tax deduction under Section 80G.',
}

export default function DonatePage() {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: 'var(--color-bg-subtle)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <span className="eyebrow">Donate</span>
            <h1>Make a donation that lasts a lifetime.</h1>
            <p className="lead" style={{ marginTop: '0.75rem' }}>
              Thalassemia care is not a one-time gift. Patients need transfusions and medicines
              every month, for life. Recurring giving — even a modest amount — is the most
              powerful way to support them.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <DonateForm />
          </div>
        </section>

        <CostBreakdown />
        <TaxBenefitsCalculator />
        <TrustSignals />
      </main>
      <Footer />
    </>
  )
}
