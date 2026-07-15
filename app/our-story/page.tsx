import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import Icon, { type IconName } from '../components/Icon'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Two decades of thalassemia care at VHS Hospital, Chennai — told in the words of Dr. Revathi Raj, Honorary President, TWA.',
}

type Placeholder = {
  src: string
  alt: string
  icon: IconName
  tone: 'primary' | 'accent'
  caption: string
  chapter?: 1 | 2 | 3
}

/**
 * Renders a themed typographic card in place of the photo named in `src` until it
 * arrives (see /public/images/story/README.md for the expected filenames).
 * Swap for <Image src={src} alt={alt} fill /> once photography is in hand.
 * Each chapter has its own visual treatment so the cards read as intentional design.
 */
function ImagePlaceholder({ src, alt, icon, caption, chapter = 1 }: Placeholder) {
  const variants: Record<1 | 2 | 3, React.CSSProperties> = {
    1: { background: 'var(--color-primary-soft)', borderLeft: '3px solid var(--color-primary)' },
    2: { background: '#F0F7F0', borderBottom: '3px solid var(--color-primary)' },
    3: { background: '#fff', boxShadow: 'var(--shadow-card)', borderTop: '3px solid var(--color-primary)' },
  }
  return (
    <figure style={{ margin: 0 }} data-photo-pending={src}>
      <div
        role="img"
        aria-label={alt}
        style={{
          minHeight: 240,
          width: '100%',
          borderRadius: 14,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '1.5rem',
          ...variants[chapter],
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 44, height: 44,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 10,
            background: 'rgba(255,255,255,0.75)',
            color: 'var(--color-primary)',
          }}
        >
          <Icon name={icon} size={22} />
        </span>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.15rem',
            lineHeight: 1.5,
            color: 'var(--color-ink)',
            margin: 0,
            maxWidth: '32ch',
          }}
        >
          {caption}
        </p>
      </div>
    </figure>
  )
}

const PARTNERS: { name: string; desc: string; logo?: string; alt: string; initials: string }[] = [
  {
    name: 'Apollo Hospitals, Chennai',
    desc: 'MoU partner for haploidentical Bone Marrow Transplantation — over 300 procedures performed free of cost.',
    logo: '/images/partners/apollo-hospitals.png',
    alt: 'Apollo Hospitals Chennai logo',
    initials: 'AH',
  },
  {
    name: 'Mediscan Systems',
    desc: 'MoU partner for prenatal diagnosis — over 100 chorion villous sampling procedures facilitated over 20 years.',
    logo: '/images/partners/mediscan-systems.png',
    alt: 'Mediscan Systems logo',
    initials: 'MS',
  },
  {
    name: 'Annamayil',
    desc: 'Provides high-quality nutritious food for patients travelling to the centre for transfusion sessions.',
    // No logo file available yet — renders a text-based initials mark instead
    alt: 'Annamayil logo',
    initials: 'AN',
  },
  {
    name: 'Camp Rainbow',
    desc: 'Conducts art therapy and creative wellness sessions for young thalassemia patients at our centre.',
    logo: '/images/partners/camp-rainbow.webp',
    alt: 'Camp Rainbow logo',
    initials: 'CR',
  },
  {
    name: 'Five Star Business Finance Limited',
    desc: 'Corporate donor supporting patient care and programme costs at TWA Chennai.',
    logo: '/images/partners/five-star-business-finance.png',
    alt: 'Five Star Business Finance Limited logo',
    initials: 'FS',
  },
  {
    name: 'Rotork',
    desc: 'Corporate donor supporting patient care and programme costs at TWA Chennai.',
    logo: '/images/partners/rotork.png',
    alt: 'Rotork logo',
    initials: 'RO',
  },
]

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Section 1 — Opening quote & author */}
        <section
          style={{
            background: '#FFFFFF',
            borderBottom: '1px solid var(--color-border)',
            padding: '4.5rem 0 4rem',
            textAlign: 'center',
          }}
        >
          <div className="container-narrow">
            <span
              style={{
                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--color-primary)',
                display: 'block', marginBottom: '1.5rem',
              }}
            >
              Our Story
            </span>
            <blockquote
              style={{
                margin: '0 auto',
                maxWidth: '26ch',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.7rem, 4.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                color: 'var(--color-ink)',
              }}
            >
              &ldquo;Learn from Yesterday. Live for Today. Hope for Tomorrow.&rdquo;
            </blockquote>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>
                — Dr. Revathi Raj
              </p>
              <p style={{ marginTop: '0.3rem', color: 'var(--color-text-subtle)', fontSize: '0.85rem' }}>
                Honorary President, Thalassemia Welfare Association, VHS, Chennai
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Introduction */}
        <section className="section">
          <div className="container-narrow">
            <p className="lead" style={{ maxWidth: 'none' }}>
              Home is a place where hearts are woven together, and no family member gets left behind
              or forgotten. The Voluntary Health Services hospital in Chennai is home to patients with
              Thalassemia Major and has served the local community with genuine warmth and care for
              over two decades. This is our story from the heart, and we share our baby steps, our
              challenges, where we have fallen, and all the success stories with a vision for our
              future.
            </p>
            <p className="lead" style={{ maxWidth: 'none', marginTop: '1.5rem' }}>
              In 2006, a group of patient families, volunteers, and physicians came together to support
              patients with thalassaemia in the blood bank, which provided free units of lifesaving
              blood transfusions. The centre gradually grew over time from four patients on regular
              transfusion in 2006 to 199 patients in 2026. TWA is now registered as a non-profit
              society to help raise awareness on thalassaemia and provide comprehensive care.
            </p>
          </div>
        </section>

        {/* Section 3 — Learn from Yesterday */}
        <section className="section bg-subtle">
          <div className="container-narrow">
            <h2 className="heading-rule" style={{ fontSize: '2rem', fontWeight: 700 }}>Learn from Yesterday</h2>

            <div style={{ marginTop: '2rem' }}>
              <ImagePlaceholder
                src="/images/story/safe-transfusion.jpg"
                alt="Medical staff performing a safe blood transfusion at VHS Thalassaemia Centre, Chennai"
                icon="droplet"
                tone="primary"
                chapter={1}
                caption="Safe transfusion, optimal chelation — the foundation of every patient's care."
              />
            </div>

            <p style={{ marginTop: '2rem' }}>
              The initial challenge was to provide a safe transfusion, and we invested in
              leucodepletion filters for all patients and fourth generation ELISA kits for screening.
              The febrile transfusion reaction rates were low at less than 1%, and alloimmunisation
              rates and need for splenectomy were reduced to 4.5%. Hepatitis B rates were low with
              universal vaccination, and all patients received a booster dose every 5 years. Hepatitis
              C rates were high at 33%, and any patient with a sudden jump in ferritin had a test done
              for hepatitis C. The newer oral antiviral agents helped clear the virus within 3 months,
              and all patients got 6 months of therapy with no reactivation, even during bone marrow
              transplantation. Bone disease was rampant in the young adult population and we started
              vitamin D replacement every six months and arranged a campaign to donate bicycles for all
              patients to encourage physical activity. We lost patients due to post-splenectomy sepsis,
              and all our patients now have a card to start early antibiotics in case of fever or
              infections. We pioneered innovative methods like using a simple scalp vein set for
              transfusions to avoid damage to veins in patients on long-term transfusions.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              The most important step was to engage with the government for assistance. After several
              appeals and visits by celebrities and politicians, thalassaemia comprehensive care is now
              included in the insurance scheme. Our patients today get comprehensive cover from
              diagnosis, transfusion, chelation, cardiac and endocrine support, and even the curative
              bone marrow transplantation, completely free of cost!
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              The centre has three dedicated volunteers and three paid staff. The COVID pandemic
              challenged the infrastructure, and several patients struggled to continue transfusion and
              chelation. Despite this, we ensured that medications reached every individual&apos;s house
              and they could complete their transfusions. Our centre was kept open all through the
              pandemic by our dedicated staff.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <ImagePlaceholder
                src="/images/story/awareness-camp-schools.jpg"
                alt="TWA volunteers conducting a thalassemia awareness camp at a school in Chennai"
                icon="book-open"
                tone="accent"
                chapter={1}
                caption="Thalassaemia awareness camps in schools — reaching the next generation."
              />
            </div>
          </div>
        </section>

        {/* Section 4 — Live for Today */}
        <section className="section">
          <div className="container-narrow">
            <h2 className="heading-rule" style={{ fontSize: '2rem', fontWeight: 700 }}>Live for Today</h2>

            <p style={{ marginTop: '2rem' }}>
              We have now performed over 300 BMT procedures for thalassaemia patients fully free of
              cost, including haploidentical BMT through an MoU with Apollo Hospitals, Chennai. The
              average age of the patients undergoing transfusions is now over 15 years, as all the
              younger patients have had a successful BMT. We need to engage with young adults and
              address their concerns regarding higher education, marriage, and sexual health. We are
              proud to have assisted in the delivery of 9 babies in our thalassaemia cohort.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Prenatal diagnosis is the way forward, and over the last 20 years, we have assisted over
              100 chorion villous sampling procedures with an MoU with Mediscan Systems and helped
              prevent new births. The high prevalence district of Sitteri in Dharmapuri has been
              covered extensively in our campaigns to raise awareness and prevent new births. Several
              NGOs now work with the centre, including Annamayil, which provides high-quality food for
              those coming for transfusion, and Camp Rainbow, who come for Art therapy sessions.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Our volunteers ensure that awareness on testing for thalassaemia is represented in all
              regional obstetric meetings and conferences.
            </p>

            <div className="grid grid-2" style={{ marginTop: '2rem' }}>
              <ImagePlaceholder
                src="/images/story/diwali-after-bmt.jpg"
                alt="Thalassemia patients celebrating Diwali after successful bone marrow transplantation at VHS Chennai"
                icon="heart"
                tone="accent"
                chapter={2}
                caption="Celebrating Diwali after a successful BMT."
              />
              <ImagePlaceholder
                src="/images/story/prenatal-diagnosis-bmt.jpg"
                alt="Prenatal diagnosis procedure and BMT success at VHS Thalassaemia Centre"
                icon="dna"
                tone="primary"
                chapter={2}
                caption="Prenatal diagnosis and successful BMT — two milestones that change a family's future."
              />
            </div>
          </div>
        </section>

        {/* Section 5 — Hope for Tomorrow */}
        <section className="section bg-subtle">
          <div className="container-narrow">
            <h2 className="heading-rule" style={{ fontSize: '2rem', fontWeight: 700 }}>Hope for Tomorrow</h2>

            <p style={{ marginTop: '2rem' }}>
              The way forward is to network and partner with government and non-governmental agencies to
              help these families. Our goal is to include thalassaemia testing in all routine antenatal
              screening followed by genetic counselling. In particular, we provide extended family
              counselling to prevent births in existing families. The 23 deaths over the two decades were
              due to sepsis, heart, and liver iron overload. We therefore need to ensure optimal cardiac
              and liver health to prevent morbidity and mortality. Schemes such as TBSY help with access
              to early BMT and better quality of life.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              The physical, social, and psychological well-being of each and every family is all possible
              under one roof. Our work has been acknowledged by the government of Tamil Nadu with a medal
              of honour. We hope to join hands with all partners and cause a ripple effect and heal
              patients with thalassaemia in our community. We remain grateful to the volunteers who have
              been donating blood which is the gift of life for our patients. The future is here with gene
              therapy, and we hope our patients will be able to benefit from this and lead a healthy life.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <ImagePlaceholder
                src="/images/story/thalassemia-free-survival-apollo.jpg"
                alt="Thalassemia-free survival achieved at Apollo Chennai through BMT partnership with TWA"
                icon="award"
                tone="primary"
                chapter={3}
                caption="Thalassaemia free survival in Apollo Chennai — the goal that drives everything we do."
              />
            </div>
          </div>
        </section>

        {/* Section 6 — Video */}
        <section className="section">
          <div className="container-narrow">
            <h3>Watch: Our Thalassaemia Awareness Film</h3>
            <div
              style={{
                marginTop: '1.5rem',
                aspectRatio: '16 / 9',
                width: '100%',
                background: '#1F2937',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem',
                gap: '0.75rem',
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="rgba(255,255,255,0.35)" stroke="none" />
              </svg>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>
                Our awareness film is coming soon.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', margin: 0 }}>
                Produced by TWA Chennai — check back shortly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 — Partners & collaborators */}
        <section style={{ background: 'var(--color-primary-dark)', padding: '4rem 1.5rem' }}>
          <div className="container" style={{ padding: 0 }}>
            <div className="section-header">
              <h2 style={{ color: '#fff' }}>Partners Who Make This Possible</h2>
              <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>Over two decades, these organisations have stood with us.</p>
            </div>
            <div className="grid grid-2">
              {PARTNERS.map((p) => (
                <article
                  key={p.name}
                  className="partner-card-dark"
                  style={{
                    display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 12,
                    padding: '1.5rem',
                    transition: 'background .2s ease',
                  }}
                >
                  {p.logo ? (
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        flexShrink: 0,
                        background: '#fff',
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.5rem',
                      }}
                    >
                      <Image
                        src={p.logo}
                        alt={p.alt}
                        width={54}
                        height={54}
                        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      style={{
                        width: 64,
                        height: 64,
                        flexShrink: 0,
                        background: 'rgba(255,255,255,0.15)',
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        color: '#fff',
                      }}
                    >
                      {p.initials}
                    </div>
                  )}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: '#fff', marginBottom: '0.4rem' }}>{p.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8 — Closing CTA */}
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
