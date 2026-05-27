import Header from './components/Header'
import Hero from './components/Hero'
import ImpactStats from './components/ImpactStats'
import ProgramsOverview from './components/ProgramsOverview'
import CostBreakdown from './components/CostBreakdown'
import TrustSignals from './components/TrustSignals'
import TaxBenefitsCalculator from './components/TaxBenefitsCalculator'
import BloodDonorCTA from './components/BloodDonorCTA'
import CTABand from './components/CTABand'
import FAQAccordion from './components/FAQAccordion'
import Footer from './components/Footer'

const FAQS = [
  { q: 'Is my donation tax-deductible?', a:
    'Yes. Donations to TWA Chennai are eligible for a 50% deduction under Section 80G of the Income Tax Act, 1961. An 80G receipt is emailed to you after every successful donation. You can use the PAN field on the donation form to ensure the receipt is generated correctly.' },
  { q: 'Where does my money go?', a:
    'Every rupee of restricted donations is spent on patient care — safe blood, iron-chelating medicines, diagnostics and transit support for families. Administrative and salary costs are funded separately. Our audited annual report breaks down expenditure line-by-line and is available on the Transparency page.' },
  { q: 'Can I donate blood instead of money?', a:
    'Absolutely. Patients on our register need transfusions every 2–4 weeks. You can register as a donor through the Get Involved page, walk in to any of our partner blood banks, or host a drive at your workplace, college or community.' },
  { q: 'Do you support patients outside Chennai?', a:
    'Yes. Most of our patients are based in Chennai and nearby districts of Tamil Nadu, but we extend medicine and counselling support to families across the state where logistics allow.' },
  { q: 'How can my company partner with TWA?', a:
    'We work with companies on CSR funding, employee giving, volunteering days and blood drives. Write to us at info@twachennai.org and we will share our CSR profile and partnership options.' },
  { q: 'Can I visit your centre?', a:
    'Yes, visits by appointment are welcome. Please use the contact form so we can schedule a time that does not coincide with patient transfusions.' },
]

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ImpactStats />
        <ProgramsOverview />
        <CostBreakdown />
        <TrustSignals />
        <TaxBenefitsCalculator />
        <BloodDonorCTA />
        <FAQAccordion items={FAQS} />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
