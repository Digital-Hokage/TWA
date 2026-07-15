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
import { CONTACT } from './lib/constants'

// Static site: homepage content (partners, FAQs) is maintained here in code.
// The admin panel that used to edit these was server-side and is disabled on
// static hosting — see _disabled/.

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
    a: `We work with companies on CSR funding, employee giving, volunteering days and blood drives. Write to us at ${CONTACT.email} and we will share our CSR profile and partnership options.`,
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

const PARTNERS_DATA: Partner[] = [
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

function Partners({ partners }: { partners: Partner[] }) {
  const PARTNERS = partners
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

function CorporateSupport() {
  return (
    <section
      aria-labelledby="corporate-support-heading"
      style={{ background: 'var(--color-bg-subtle)', padding: '4rem 1.5rem' }}
    >
      <div className="container" style={{ padding: 0 }}>
        <div className="section-header">
          <span className="eyebrow eyebrow--accent">Corporate support</span>
          <h2 id="corporate-support-heading">Those Who Make It Possible</h2>
          <p className="lead" style={{ margin: '0.75rem auto 0', maxWidth: '60ch' }}>
            We are deeply grateful to the organisations whose generosity directly funds patient
            care at VHS Hospital.
          </p>
        </div>

        {/* Donor card — image left, text right on desktop; stacked on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '2rem',
            alignItems: 'center',
            maxWidth: 960,
            margin: '0 auto',
            background: '#fff',
            border: '1px solid rgba(76,122,76,0.15)',
            borderLeft: '4px solid var(--color-primary)',
            borderRadius: 16,
            padding: '2rem',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          }}
        >
          {/* Left — photo */}
          <figure style={{ margin: 0 }}>
            <img
              src="/images/donors/five-star-visit-fullBlurred.jpeg"
              alt="Mr. Sivaramakrishnan, CSR Manager of Five-Star Business Finance Limited, visiting thalassemia patients at VHS Thalassaemia Centre, Chennai during a transfusion session"
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                objectFit: 'cover',
                borderRadius: 12,
                display: 'block',
              }}
            />
            <figcaption
              style={{
                marginTop: '0.75rem',
                fontSize: '0.82rem',
                fontStyle: 'italic',
                color: 'var(--color-text-subtle)',
                lineHeight: 1.5,
              }}
            >
              Mr. Sivaramakrishnan visiting patients during transfusion sessions at VHS
              Thalassaemia Centre, Chennai
            </figcaption>
            <p
              style={{
                marginTop: '0.35rem',
                fontSize: '0.72rem',
                fontStyle: 'italic',
                color: 'var(--color-ink-muted)',
              }}
            >
              Patient faces blurred to protect privacy.
            </p>
          </figure>

          {/* Right — text */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '0.85rem',
                color: 'var(--color-text)',
              }}
            >
              Five-Star Business Finance Limited
            </h3>

            <span
              style={{
                display: 'inline-block',
                background: 'var(--color-primary)',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                padding: '0.35rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.1rem',
              }}
            >
              ₹48 Lakhs — Medicines Fund
            </span>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Five-Star Business Finance Limited made a transformative contribution of ₹48 lakhs
              towards medicines for our patients. This donation directly funds chelation therapy
              and supporting medicines for all 199 patients on our care register — ensuring
              uninterrupted treatment for an entire year.
            </p>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)' }}>
              Represented by Mr. Sivaramakrishnan, CSR Manager
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  // FAQPage structured data → eligible for Google FAQ rich results
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

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
        <ScrollReveal><Partners partners={PARTNERS_DATA} /></ScrollReveal>
        <ScrollReveal><CorporateSupport /></ScrollReveal>
        <ScrollReveal><MediaCoverage /></ScrollReveal>
        <ScrollReveal><FAQAccordion items={FAQS} /></ScrollReveal>
        <CTABand />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
