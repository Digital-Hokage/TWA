import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DonateForm from '../components/DonateForm'
import BankTransfer from '../components/BankTransfer'
import TaxBenefitsCalculator from '../components/TaxBenefitsCalculator'
import CostBreakdown from '../components/CostBreakdown'
import TrustSignals from '../components/TrustSignals'
import PageHero from '../components/PageHero'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Donate to support thalassemia patients in Tamil Nadu. ₹8,500 funds one patient for a full month. Eligible for tax deduction under Section 80G.',
}

export default function DonatePage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Donate"
          title="Make a donation that lasts a lifetime."
          lead="Thalassemia care is not a one-time gift. Patients need transfusions and medicines every month, for life. Recurring giving — even a modest amount — is the most powerful way to support them."
        />

        <section className="section">
          <div className="container">
            <DonateForm />
          </div>
        </section>

        <section className="section-tight bg-subtle" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <BankTransfer />
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
