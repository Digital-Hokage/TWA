import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Two decades of thalassemia care at VHS Hospital, Chennai — told in the words of Dr. Revathi Raj, Honorary President, TWA.',
}

type Placeholder = {
  src: string
  alt: string
  label: string
  caption: string
}

function ImagePlaceholder({ src, alt, label, caption }: Placeholder) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        data-src={src}
        role="img"
        aria-label={alt}
        style={{
          aspectRatio: '16 / 9',
          width: '100%',
          background: 'var(--color-bg-subtle)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '1.5rem',
          color: 'var(--color-text-subtle)',
          fontWeight: 600,
          fontSize: '0.95rem',
        }}
      >
        {label}
      </div>
      <figcaption
        style={{
          marginTop: '0.75rem',
          fontSize: '0.9rem',
          color: 'var(--color-text-subtle)',
          fontStyle: 'italic',
        }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

const PARTNERS: { name: string; desc: string; logo: string; alt: string }[] = [
  {
    name: 'Apollo Hospitals, Chennai',
    desc: 'MoU partner for haploidentical Bone Marrow Transplantation — over 300 procedures performed free of cost.',
    logo: '/images/partners/apollo-hospitals.png',
    alt: 'Apollo Hospitals Chennai logo',
  },
  {
    name: 'Mediscan Systems',
    desc: 'MoU partner for prenatal diagnosis — over 100 chorion villous sampling procedures facilitated over 20 years.',
    logo: '/images/partners/mediscan-systems.png',
    alt: 'Mediscan Systems logo',
  },
  {
    name: 'Annamayil',
    desc: 'Provides high-quality nutritious food for patients travelling to the centre for transfusion sessions.',
    logo: '/images/partners/annamayil.png',
    alt: 'Annamayil logo',
  },
  {
    name: 'Camp Rainbow',
    desc: 'Conducts art therapy and creative wellness sessions for young thalassemia patients at our centre.',
    logo: '/images/partners/camp-rainbow.png',
    alt: 'Camp Rainbow logo',
  },
  {
    name: 'Masonic Medical Centre, Coimbatore',
    desc: 'Sister thalassaemia centre led by Dr Kavitha Ganesan — caring for patients across the Coimbatore region.',
    logo: '/images/partners/masonic-medical-coimbatore.png',
    alt: 'Masonic Medical Centre Coimbatore logo',
  },
  {
    name: 'Rotary Centre, Nellore',
    desc: 'Sister thalassaemia centre led by Dr Ramya Uppuluri — extending care to 150 additional children.',
    logo: '/images/partners/rotary-centre-nellore.png',
    alt: 'Rotary Centre Nellore logo',
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
                fontSize: 'clamp(1.7rem, 4.5vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: 'var(--color-text)',
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
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>Learn from Yesterday</h2>

            <div style={{ marginTop: '2rem' }}>
              <ImagePlaceholder
                src="/images/story/safe-transfusion.jpg"
                alt="Medical staff performing a safe blood transfusion at VHS Thalassaemia Centre, Chennai"
                label="[ Photo: VHS Thalassaemia Centre — Safe transfusion, optimal chelation ]"
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
                label="[ Photo: Thalassaemia awareness camp in schools ]"
                caption="Thalassaemia awareness camps in schools — reaching the next generation."
              />
            </div>
          </div>
        </section>

        {/* Section 4 — Live for Today */}
        <section className="section">
          <div className="container-narrow">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>Live for Today</h2>

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
              The work needs to be replicated in other cities, and to assist easy patient access, two
              sister centres have been established in the Masonic Medical Centre in Coimbatore led by Dr
              Kavitha Ganesan, and the Rotary Centre in Nellore led by Dr Ramya Uppuluri. These new
              centres cover another 150 children with the same care pathways. Our volunteers ensure that
              awareness on testing for thalassaemia is represented in all regional obstetric meetings
              and conferences.
            </p>

            <div className="grid grid-2" style={{ marginTop: '2rem' }}>
              <ImagePlaceholder
                src="/images/story/diwali-after-bmt.jpg"
                alt="Thalassemia patients celebrating Diwali after successful bone marrow transplantation at VHS Chennai"
                label="[ Photo: Celebrating Diwali after a successful BMT ]"
                caption="Celebrating Diwali after a successful BMT."
              />
              <ImagePlaceholder
                src="/images/story/prenatal-diagnosis-bmt.jpg"
                alt="Prenatal diagnosis procedure and BMT success at VHS Thalassaemia Centre"
                label="[ Photo: Prenatal diagnosis and successful BMT ]"
                caption="Prenatal diagnosis and successful BMT — two milestones that change a family's future."
              />
            </div>
          </div>
        </section>

        {/* Section 5 — Hope for Tomorrow */}
        <section className="section bg-subtle">
          <div className="container-narrow">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>Hope for Tomorrow</h2>

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
                label="[ Photo: Thalassaemia free survival — Apollo Chennai ]"
                caption="Thalassaemia free survival in Apollo Chennai — the goal that drives everything we do."
              />
            </div>
          </div>
        </section>

        {/* Section 6 — Video placeholder */}
        <section className="section">
          <div className="container-narrow">
            <h3>Watch: Our Thalassaemia Awareness Film</h3>
            {/* TODO: Replace this div with a YouTube iframe embed when Reva sends the video link */}
            <div
              style={{
                marginTop: '1.5rem',
                aspectRatio: '16 / 9',
                width: '100%',
                background: '#1F2937',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '1.5rem',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              [ Video will be embedded here — YouTube link coming soon ]
            </div>
            <p
              style={{
                marginTop: '0.75rem',
                fontSize: '0.9rem',
                color: 'var(--color-text-subtle)',
                fontStyle: 'italic',
              }}
            >
              Our thalassaemia awareness video produced by TWA Chennai.
            </p>
          </div>
        </section>

        {/* Section 7 — Partners & collaborators */}
        <section className="section bg-subtle">
          <div className="container">
            <div className="section-header">
              <h2>Partners Who Make This Possible</h2>
              <p style={{ marginTop: '0.5rem' }}>Over two decades, these organisations have stood with us.</p>
            </div>
            <div className="grid grid-2">
              {PARTNERS.map((p) => (
                <article key={p.name} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div
                    data-src={p.logo}
                    role="img"
                    aria-label={p.alt}
                    style={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      background: 'var(--color-bg-subtle)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      fontSize: '0.7rem',
                      color: 'var(--color-text-subtle)',
                      padding: '0.4rem',
                    }}
                  >
                    Logo
                  </div>
                  <div>
                    <h3 className="card-title">{p.name}</h3>
                    <p className="card-body">{p.desc}</p>
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
