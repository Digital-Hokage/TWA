import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import Icon from '../components/Icon'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Media Coverage',
  description:
    'Press coverage of the Thalassemia Welfare Association Chennai — from early treatment milestones in 2010 to current advocacy and fundraising in 2025–26.',
}

type Article = {
  publication: string
  pubShort: string
  date: string
  year: number
  headline: string
  summary: string
  relevance: string
  url: string
  pubColor: { bg: string; text: string }
  featured?: boolean
  byDrRevathi?: boolean
}

/* ── All press articles — update `url` fields when links are confirmed ── */
const ARTICLES: Article[] = [
  {
    publication: 'LiveChennai',
    pubShort: 'LiveChennai',
    date: '6 September 2010',
    year: 2010,
    headline: 'Four children cured of Thalassemia at the VHS, Taramani, Chennai',
    summary:
      'Four children successfully treated at VHS Taramani under the state Kalaignar health insurance scheme. Reports that 159 youngsters from across Tamil Nadu are registered with the Thalassemia Welfare Association, receiving free blood transfusions. Haematologist Dr. Revathi Raj recommends prenatal screening to prevent new cases.',
    relevance: 'Early treatment milestone at the Chennai TWA centre, with Dr. Revathi Raj commenting on prevention.',
    url: '#', // TODO: update with full article URL
    pubColor: { bg: '#DBEAFE', text: '#1E3A8A' },
    featured: false,
  },
  {
    publication: 'New Indian Express',
    pubShort: 'New Indian Express',
    date: '1 July 2013',
    year: 2013,
    headline: 'Undetected thalassemia preying on Dharmapuri kids',
    summary:
      'Tribal children in rural Dharmapuri district travel to the TWA Chennai centre in Taramani for monthly blood transfusions. The article discusses government health scheme support and the acute lack of local awareness in high-prevalence rural communities across Tamil Nadu.',
    relevance: 'Documents patients from Dharmapuri relying on the Chennai TWA centre, highlighting the statewide reach of the programme.',
    url: '#', // TODO: update with full article URL
    pubColor: { bg: '#DCFCE7', text: '#14532D' },
    featured: false,
  },
  {
    publication: 'Times of India — Chennai',
    pubShort: 'Times of India',
    date: '12 May 2021',
    year: 2021,
    headline: 'Thalassemia patients face shortage of blood donors amid pandemic',
    summary:
      'COVID-19 lockdowns brought blood drives to a halt, leaving thalassemia patients desperate for donors. Dr. Revathi Raj, President of TWA, confirmed an acute shortage at VHS Taramani — with patients\' haemoglobin levels falling as life-critical transfusions were delayed across the city.',
    relevance: 'Directly quotes Dr. Revathi Raj on the COVID-era blood crisis at the Chennai TWA centre.',
    url: '#', // TODO: update with full article URL
    pubColor: { bg: '#FEF3C7', text: '#78350F' },
    featured: true,
  },
  {
    publication: 'Apollo Hospitals — Press Release',
    pubShort: 'Apollo Hospitals',
    date: '31 May 2023',
    year: 2023,
    headline:
      'The highest number of thalassemia affected children successfully treated at Apollo Cancer Centre, Chennai under TNCMCHI scheme',
    summary:
      'Apollo Cancer Centre Chennai reports record numbers of thalassemia-affected children treated under the Tamil Nadu Chief Minister\'s Comprehensive Health Insurance (TNCMCHI) scheme — the same scheme TWA has helped patients access for free bone marrow transplantation and comprehensive care.',
    relevance: 'Context on the scale of BMT treatment in Chennai through the government scheme TWA helped bring patients into.',
    url: '#', // TODO: update with press release URL
    pubColor: { bg: '#FEE2E2', text: '#7F1313' },
    featured: false,
  },
  {
    publication: 'The News Minute',
    pubShort: 'The News Minute',
    date: '1 June 2023',
    year: 2023,
    headline:
      'Rays of hope for thalassemia: Cutting-edge techniques promise a brighter future for patients',
    summary:
      'A feature authored by Dr. Revathi Raj covering haploidentical bone marrow transplantation, advances in gene therapy, and the evolving landscape of thalassemia care in India. The piece outlines why early intervention and prenatal diagnosis remain the most powerful tools available to families today.',
    relevance: 'Authored by Dr. Revathi Raj — demonstrates the clinical expertise behind TWA\'s treatment protocols.',
    url: '#', // TODO: update with full article URL
    pubColor: { bg: '#EDE9FE', text: '#3B0764' },
    featured: true,
    byDrRevathi: true,
  },
  {
    publication: 'Adyar Times — Chennai',
    pubShort: 'Adyar Times',
    date: '21 March 2025',
    year: 2025,
    headline: 'Rotary Club hits the right note for Thalassemia Care',
    summary:
      'The Rotary Club of Chennai Port City donated ₹2 lakh to the Thalassemia Welfare Association at VHS Taramani. The cheque was received by Dr. V. Mythili of VHS on behalf of the association at a musical concert fundraiser supporting thalassemia patient care and education.',
    relevance: 'Local media coverage of direct fundraising for the Chennai TWA centre.',
    url: '#', // TODO: update with full article URL
    pubColor: { bg: '#E0F2FE', text: '#0C4A6E' },
    featured: false,
  },
  {
    publication: 'Times of India — Chennai',
    pubShort: 'Times of India',
    date: '15 May 2026',
    year: 2026,
    headline: 'Hosp marks World Thalassemia Day',
    summary:
      'Coverage of Apollo Foundation\'s World Thalassemia Day events in Chennai, giving broader context on regional thalassemia care initiatives, screening drives, and the growing awareness of the condition across Tamil Nadu.',
    relevance: 'Provides context on World Thalassemia Day activities and regional care awareness in Chennai.',
    url: '#', // TODO: update with full article URL
    pubColor: { bg: '#FEF3C7', text: '#78350F' },
    featured: false,
  },
]

const FEATURED = ARTICLES.filter((a) => a.featured)
const REST     = ARTICLES.filter((a) => !a.featured)

function PubBadge({ a }: { a: Article }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
        padding: '0.22rem 0.65rem',
        borderRadius: 'var(--radius-full)',
        background: a.pubColor.bg, color: a.pubColor.text,
        fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.025em',
        whiteSpace: 'nowrap',
      }}
    >
      <Icon name="newspaper" size={10} />
      {a.pubShort}
    </span>
  )
}

export default function MediaPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* ── Page Hero ── */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1a2744 100%)',
            padding: '5rem 0 4rem',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="container-narrow">
            <span className="eyebrow" style={{ color: '#FCA5A5' }}>Press &amp; Media</span>
            <h1 style={{ color: '#fff', marginTop: '0.5rem', marginBottom: '1rem' }}>
              TWA Chennai in the Media
            </h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '62ch' }}>
              From early treatment milestones in 2010 to community fundraising in 2025 — a
              record of press coverage that charts two decades of thalassemia care in Tamil Nadu.
            </p>

            {/* quick stats */}
            <div
              style={{
                display: 'flex', flexWrap: 'wrap', gap: '2rem',
                marginTop: '2.5rem', paddingTop: '2.5rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {[
                { value: `${ARTICLES.length}`, label: 'Articles archived' },
                { value: '2010–2026', label: 'Coverage span' },
                { value: `${new Set(ARTICLES.map(a => a.pubShort)).size}`, label: 'Publications' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Articles ── */}
        <section className="section" aria-labelledby="featured-heading">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <span className="eyebrow eyebrow--accent">Featured coverage</span>
                <h2 id="featured-heading">Significant press mentions</h2>
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
              {FEATURED.map((a, i) => (
                <ScrollReveal key={a.headline} delay={i * 120}>
                  <article
                    className="card"
                    style={{
                      display: 'flex', flexDirection: 'column', height: '100%',
                      border: '1px solid var(--color-primary-soft)',
                      boxShadow: '0 0 0 1px var(--color-primary-soft), var(--shadow-md)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <PubBadge a={a} />
                      <time style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>{a.date}</time>
                    </div>

                    {a.byDrRevathi && (
                      <div
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                          marginBottom: '0.75rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'var(--color-accent-soft)',
                          color: 'var(--color-accent-dark)',
                          fontSize: '0.72rem', fontWeight: 700,
                          width: 'fit-content',
                        }}
                      >
                        <Icon name="award" size={11} /> Authored by Dr. Revathi Raj
                      </div>
                    )}

                    <h2 style={{ fontSize: '1.1rem', lineHeight: 1.4, marginBottom: '0.75rem', color: 'var(--color-text)', fontWeight: 700 }}>
                      {a.headline}
                    </h2>

                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.7, flex: 1 }}>
                      {a.summary}
                    </p>

                    <div
                      style={{
                        marginTop: '1.25rem', paddingTop: '1rem',
                        borderTop: '1px solid var(--color-border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap',
                      }}
                    >
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', fontStyle: 'italic', flex: 1 }}>
                        {a.relevance}
                      </p>
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                        style={{ flexShrink: 0 }}
                      >
                        Read article <Icon name="arrow-up-right" size={13} />
                      </a>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── All Articles Timeline ── */}
        <section className="section bg-subtle" aria-labelledby="all-heading">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <span className="eyebrow eyebrow--muted">Full archive</span>
                <h2 id="all-heading">All press coverage</h2>
                <p className="lead" style={{ margin: '0.75rem auto 0' }}>
                  Chronological record of media mentions — from 2010 to 2026.
                </p>
              </div>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 900, margin: '0 auto' }}>
              {[...ARTICLES].sort((a, b) => b.year - a.year).map((a, i) => (
                <ScrollReveal key={a.headline} delay={i * 60}>
                  <article
                    className="card card-flat"
                    style={{
                      display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                      background: '#fff', padding: '1.25rem 1.5rem',
                    }}
                  >
                    {/* year sidebar */}
                    <div
                      style={{
                        flexShrink: 0, width: 56, textAlign: 'center',
                        paddingTop: '0.1rem',
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 800, fontSize: '1rem',
                          color: 'var(--color-primary)', lineHeight: 1,
                        }}
                      >
                        {a.year}
                      </div>
                      <div
                        style={{
                          width: 1, height: '100%', background: 'var(--color-border)',
                          margin: '0.5rem auto 0',
                        }}
                      />
                    </div>

                    {/* content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                        <PubBadge a={a} />
                        <time style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>{a.date}</time>
                        {a.featured && (
                          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            Featured
                          </span>
                        )}
                        {a.byDrRevathi && (
                          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-accent-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            By Dr. Revathi Raj
                          </span>
                        )}
                      </div>

                      <h3 style={{ fontSize: '0.975rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '0.4rem', color: 'var(--color-text)' }}>
                        {a.headline}
                      </h3>

                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        {a.summary}
                      </p>

                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                          marginTop: '0.75rem', fontSize: '0.825rem', fontWeight: 600,
                          color: 'var(--color-accent-dark)',
                        }}
                      >
                        Read article <Icon name="arrow-up-right" size={13} />
                      </a>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <p
                style={{
                  textAlign: 'center', marginTop: '2.5rem',
                  fontSize: '0.82rem', color: 'var(--color-text-subtle)',
                  padding: '0.75rem', background: 'var(--color-bg-muted)',
                  borderRadius: 'var(--radius)', border: '1px solid var(--color-border)',
                  maxWidth: 560, margin: '2.5rem auto 0',
                }}
              >
                Article links marked with <strong>#</strong> will be updated with direct URLs shortly.
                Contact <a href="mailto:info@twachennai.org" style={{ color: 'var(--color-accent-dark)' }}>info@twachennai.org</a> for press enquiries.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Press contact ── */}
        <section className="section-tight" aria-label="Press contact">
          <div className="container">
            <ScrollReveal>
              <div
                style={{
                  display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
                  alignItems: 'center', justifyContent: 'space-between',
                  padding: '2rem', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg-subtle)',
                }}
              >
                <div>
                  <h3 style={{ marginBottom: '0.3rem' }}>Press &amp; media enquiries</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                    For interviews, photography access, or additional information, reach us directly.
                  </p>
                </div>
                <a href="mailto:info@twachennai.org" className="btn btn-primary">
                  <Icon name="mail" size={16} /> info@twachennai.org
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  )
}
