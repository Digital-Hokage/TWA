import Link from 'next/link'
import Header from './components/Header'
import Hero from './components/Hero'
import ImpactStats from './components/ImpactStats'
import OurStory from './components/OurStory'
import ProgramsOverview from './components/ProgramsOverview'
import CostBreakdown from './components/CostBreakdown'
import TrustSignals from './components/TrustSignals'
import TaxBenefitsCalculator from './components/TaxBenefitsCalculator'
import BloodDonorCTA from './components/BloodDonorCTA'
import MediaCoverage from './components/MediaCoverage'
import CTABand from './components/CTABand'
import FAQAccordion from './components/FAQAccordion'
import Footer from './components/Footer'
import ImagePlaceholder from './components/ImagePlaceholder'
import ScrollReveal from './components/ScrollReveal'

const FAQS = [
  {
    q: 'Is my donation tax-deductible?',
    a: 'Yes. Donations to TWA Chennai are eligible for a 50% deduction under Section 80G of the Income Tax Act, 1961. An 80G receipt is emailed to you after every successful donation. You can use the PAN field on the donation form to ensure the receipt is generated correctly.',
  },
  {
    q: 'Where does my money go?',
    a: 'Every rupee of restricted donations is spent on patient care — safe blood, iron-chelating medicines, diagnostics and transit support for families. Administrative and salary costs are funded separately. Our audited annual report breaks down expenditure line-by-line and is available on the Transparency page.',
  },
  {
    q: 'Can I donate blood instead of money?',
    a: 'Absolutely. Patients on our register need transfusions every 2–4 weeks. You can register as a donor through the Get Involved page, walk in to any of our partner blood banks, or host a drive at your workplace, college or community.',
  },
  {
    q: 'Do you support patients outside Chennai?',
    a: 'Yes. Through our sister centres at Masonic Medical Centre in Coimbatore (led by Dr Kavitha Ganesan) and the Rotary Centre in Nellore (led by Dr Ramya Uppuluri), we support an additional 150 patients outside Chennai with the same care pathways.',
  },
  {
    q: 'How can my company partner with TWA?',
    a: 'We work with companies on CSR funding, employee giving, volunteering days and blood drives. Write to us at info@twachennai.org and we will share our CSR profile and partnership options.',
  },
  {
    q: 'Can I visit your centre?',
    a: 'Yes, visits by appointment are welcome. Please use the contact form so we can schedule a time that does not coincide with patient transfusions.',
  },
]

type Partner = {
  name: string
  shortName: string
  role: string
  type: string
}

const PARTNERS: Partner[] = [
  {
    name: 'Apollo Hospitals, Chennai',
    shortName: 'Apollo',
    role: 'MoU partner for haploidentical Bone Marrow Transplantation — over 300 BMTs performed free.',
    type: 'Hospital Partner',
  },
  {
    name: 'Mediscan Systems',
    shortName: 'Mediscan',
    role: 'MoU partner for prenatal diagnosis and chorion villous sampling — over 100 procedures completed.',
    type: 'Diagnostics Partner',
  },
  {
    name: 'Annamayil',
    shortName: 'Annamayil',
    role: 'Provides high-quality nutritious meals to patients attending transfusion sessions.',
    type: 'Nutrition Partner',
  },
  {
    name: 'Camp Rainbow',
    shortName: 'Camp Rainbow',
    role: 'Conducts art therapy and creative wellness sessions for our young patients.',
    type: 'Wellness Partner',
  },
  {
    name: 'Masonic Medical Centre, Coimbatore',
    shortName: 'Masonic — Coimbatore',
    role: 'Sister thalassemia centre led by Dr. Kavitha Ganesan, serving the Coimbatore region.',
    type: 'Sister Centre',
  },
  {
    name: 'Rotary Centre, Nellore',
    shortName: 'Rotary — Nellore',
    role: 'Sister centre led by Dr. Ramya Uppuluri, serving Nellore and surrounding areas.',
    type: 'Sister Centre',
  },
]

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  'Hospital Partner':     { bg: '#FEE2E2', text: '#7F1313' },
  'Diagnostics Partner':  { bg: '#DBEAFE', text: '#1E3A8A' },
  'Nutrition Partner':    { bg: '#DCFCE7', text: '#14532D' },
  'Wellness Partner':     { bg: '#FEF3C7', text: '#78350F' },
  'Sister Centre':        { bg: 'var(--color-accent-soft)', text: 'var(--color-accent-dark)' },
}

function Partners() {
  return (
    <section className="section bg-subtle" aria-labelledby="partners-heading">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow--accent">Our network</span>
          <h2 id="partners-heading">Partners &amp; Collaborators</h2>
          <p className="lead" style={{ margin: '0.75rem auto 0' }}>
            TWA works alongside a network of hospitals, NGOs, and government bodies that share our
            commitment to comprehensive thalassemia care across Tamil Nadu.
          </p>
        </div>

        <div className="partner-grid">
          {PARTNERS.map((p) => {
            const color = TYPE_COLORS[p.type] ?? { bg: 'var(--color-bg-muted)', text: 'var(--color-text-muted)' }
            return (
              <div
                key={p.name}
                className="card card-hover"
                style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}
              >
                {/* logo placeholder */}
                <ImagePlaceholder
                  label={`Logo of ${p.name}`}
                  height={64}
                  style={{
                    aspectRatio: undefined,
                    borderRadius: 'var(--radius)',
                    border: '1px dashed var(--color-border-strong)',
                    background: 'var(--color-bg-muted)',
                  }}
                />

                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      background: color.bg,
                      color: color.text,
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      marginBottom: '0.45rem',
                    }}
                  >
                    {p.type}
                  </span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-text)' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                    {p.role}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <p
          style={{
            maxWidth: 700, margin: '2.25rem auto 0',
            color: 'var(--color-text-subtle)', textAlign: 'center', fontSize: '0.9rem',
          }}
        >
          We are grateful to all blood donors, corporate partners, and individual supporters who
          make this work possible. TWA is also supported by government schemes that cover complete
          thalassemia care for patients at no cost.
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero + ImpactStats are above-the-fold — no animation delay needed */}
        <Hero />
        <ImpactStats />

        {/* Below-fold sections get smooth scroll-reveal */}
        <ScrollReveal><OurStory /></ScrollReveal>
        <ScrollReveal><ProgramsOverview /></ScrollReveal>
        <ScrollReveal><CostBreakdown /></ScrollReveal>
        <ScrollReveal><TrustSignals /></ScrollReveal>
        <ScrollReveal><TaxBenefitsCalculator /></ScrollReveal>
        <ScrollReveal><BloodDonorCTA /></ScrollReveal>
        <ScrollReveal><Partners /></ScrollReveal>
        <ScrollReveal><MediaCoverage /></ScrollReveal>
        <ScrollReveal><FAQAccordion items={FAQS} /></ScrollReveal>
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
