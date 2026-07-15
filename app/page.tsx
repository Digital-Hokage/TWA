import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
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
  logo?: string
}

const PARTNERS: Partner[] = [
  {
    name: 'Apollo Hospitals, Chennai',
    shortName: 'Apollo',
    role: 'MoU partner for haploidentical Bone Marrow Transplantation — over 300 BMTs performed free.',
    type: 'Hospital Partner',
    logo: '/images/partners/apollo-hospitals.png',
  },
  {
    name: 'Mediscan Systems',
    shortName: 'Mediscan',
    role: 'MoU partner for prenatal diagnosis and chorion villous sampling — over 100 procedures completed.',
    type: 'Diagnostics Partner',
    logo: '/images/partners/mediscan-systems.png',
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
    logo: '/images/partners/camp-rainbow.webp',
  },
  {
    name: 'Five Star Business Finance Limited',
    shortName: 'Five Star',
    role: 'Corporate donor supporting patient care and programme costs at TWA Chennai.',
    type: 'Corporate Donor',
    logo: '/images/partners/five-star-business-finance.png',
  },
  {
    name: 'Rotork',
    shortName: 'Rotork',
    role: 'Corporate donor supporting patient care and programme costs at TWA Chennai.',
    type: 'Corporate Donor',
    logo: '/images/partners/rotork.png',
  },
]

function Partners() {
  return (
    <section
      aria-labelledby="partners-heading"
      style={{ background: 'var(--color-primary-dark)', padding: '4rem 1.5rem' }}
    >
      <div className="container" style={{ padding: 0 }}>
        <div className="section-header">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Our network</span>
          <h2 id="partners-heading" style={{ color: '#fff' }}>Partners &amp; Collaborators</h2>
          <p style={{ margin: '0.75rem auto 0', fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', maxWidth: '60ch' }}>
            TWA works alongside a network of hospitals, NGOs, and government bodies that share our
            commitment to comprehensive thalassemia care across Tamil Nadu.
          </p>
        </div>

        <div className="partner-grid">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="partner-card-dark"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 12,
                padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.85rem',
                transition: 'background .2s ease',
              }}
            >
              {p.logo ? (
                <div
                  style={{
                    width: 48, height: 48,
                    borderRadius: 10,
                    background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '0.35rem',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={p.logo}
                    alt={`Logo of ${p.name}`}
                    width={40}
                    height={40}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  style={{
                    width: 48, height: 48,
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '1rem',
                    flexShrink: 0,
                  }}
                >
                  {p.shortName.slice(0, 2).toUpperCase()}
                </div>
              )}

              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.65rem', fontWeight: 600,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {p.type}
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.35rem', color: '#fff' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            maxWidth: 700, margin: '2.25rem auto 0',
            color: 'rgba(255,255,255,0.6)', textAlign: 'center', fontSize: '0.9rem',
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
        {/* Hero is above-the-fold — no animation delay needed.
            The impact stats live inside the hero card; the full-width strip was removed as duplicate. */}
        <Hero />

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
