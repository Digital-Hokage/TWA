import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import Icon from '../components/Icon'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Media Coverage',
  description:
    'Press coverage of the Thalassemia Welfare Association Chennai — spanning The Hindu, Times of India, New Indian Express, Adyar Times and more, from 2010 to 2026.',
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

const ARTICLES: Article[] = [
  /* ── 2026 ── */
  {
    publication: 'Times of India — Chennai',
    pubShort: 'Times of India',
    date: '15 May 2026',
    year: 2026,
    headline: 'Hosp marks World Thalassemia Day',
    summary:
      'Coverage of World Thalassemia Day events in Chennai — awareness drives, patient stories, and a spotlight on the progress made in comprehensive care across Tamil Nadu, including work at centres like VHS Taramani.',
    relevance: 'Provides current-year context on World Thalassemia Day activities and regional awareness.',
    url: '#',
    pubColor: { bg: '#FEF3C7', text: '#78350F' },
    featured: false,
  },

  /* ── 2025 ── */
  {
    publication: 'The Hindu — Chennai',
    pubShort: 'The Hindu',
    date: 'March 2025',
    year: 2025,
    headline: 'Survivor stories highlight the need for early thalassemia diagnosis and treatment',
    summary:
      'First-hand accounts from thalassemia survivors and their families underline how early diagnosis and systematic care transform lives. Clinicians discuss how timely intervention — including gene therapy prospects — can help patients lead full, healthy lives.',
    relevance: 'Patient-centred feature from The Hindu illustrating the impact of long-term care programmes like TWA.',
    url: 'https://www.thehindu.com/news/cities/chennai/survivor-stories-highlight-the-need-for-early-thalassemia-diagnosis-and-treatment/article70979048.ece',
    pubColor: { bg: '#DCFCE7', text: '#14532D' },
    featured: true,
  },
  {
    publication: 'Adyar Times — Chennai',
    pubShort: 'Adyar Times',
    date: '21 March 2025',
    year: 2025,
    headline: 'Rotary Club hits the right note for Thalassemia Care',
    summary:
      'The Rotary Club of Chennai Port City donated ₹2 lakh to the Thalassemia Welfare Association at VHS Taramani. The cheque was received at a musical concert fundraiser — part of a broader effort to support free patient care and community education.',
    relevance: 'Direct local media coverage of fundraising for the Chennai TWA centre.',
    url: 'https://adyartimes.in/rotary-club-hits-the-right-note-for-thalassemia-care/',
    pubColor: { bg: '#DBEAFE', text: '#1E3A8A' },
    featured: false,
  },
  {
    publication: 'LiveChennai',
    pubShort: 'LiveChennai',
    date: '18 March 2025',
    year: 2025,
    headline: 'Rotary Club Blends Music and Charity for a Noble Cause',
    summary:
      'LiveChennai reports on the Rotary Club of Chennai Port City\'s fundraising concert for the Thalassemia Welfare Association, with a ₹2 lakh donation presented to support free thalassemia care at VHS Taramani.',
    relevance: 'Parallel coverage of the same concert fundraiser for TWA.',
    url: 'https://www.livechennai.com/detailnews.asp?newsid=73866',
    pubColor: { bg: '#CCFBF1', text: '#0F766E' },
    featured: false,
  },

  /* ── 2024 ── */
  {
    publication: 'The Hindu — Chennai',
    pubShort: 'The Hindu',
    date: 'May 2024',
    year: 2024,
    headline: 'Prevention is key for a thalassemia-free India, say doctors',
    summary:
      'Haematologists and thalassemia specialists, including those working at centres in Chennai, emphasise that mandatory prenatal screening and genetic counselling are the most effective tools for reducing new thalassemia births in India. Dr. Revathi Raj\'s approach of combining treatment with prevention advocacy is highlighted.',
    relevance: 'Features prevention-first advocacy by Chennai thalassemia clinicians aligned with TWA\'s mission.',
    url: 'https://www.thehindu.com/news/cities/chennai/prevention-is-key-for-a-thalassemia-free-india-say-doctors/article68153289.ece',
    pubColor: { bg: '#DCFCE7', text: '#14532D' },
    featured: false,
  },
  {
    publication: 'Adyar Times — Chennai',
    pubShort: 'Adyar Times',
    date: '18 May 2024',
    year: 2024,
    headline: 'Everyone can be part of World Thalassemia Day by donating blood',
    summary:
      'On World Thalassemia Day, the Adyar Times spotlights how regular blood donation is the most direct way for the public to support thalassemia patients. The article calls on residents of the Adyar neighbourhood to register as blood donors for patients at nearby VHS Taramani.',
    relevance: 'Encourages public blood donation for TWA patients at VHS Taramani — drives local donor registration.',
    url: 'https://adyartimes.in/everyone-can-be-part-of-world-thalassemia-day-by-donating-blood/',
    pubColor: { bg: '#DBEAFE', text: '#1E3A8A' },
    featured: false,
  },
  {
    publication: 'New Indian Express',
    pubShort: 'New Indian Express',
    date: '9 May 2024',
    year: 2024,
    headline: 'Joy of giving: Thalassemia survivor meets donor from Germany',
    summary:
      'A thalassemia survivor in India meets their bone marrow donor from Germany in an emotional reunion — illustrating the power of international bone marrow registries. The story underlines the importance of DATRI and similar registries that TWA works with to facilitate haploidentical BMT.',
    relevance: 'Shows the role of bone marrow registries (such as DATRI, which TWA partners with) in curative BMT outcomes.',
    url: 'https://www.newindianexpress.com/states/karnataka/2024/May/09/joy-of-giving-thalassemia-survivor-meets-donor-from-germany',
    pubColor: { bg: '#FEE2E2', text: '#7F1313' },
    featured: false,
  },

  /* ── 2023 ── */
  {
    publication: 'The News Minute',
    pubShort: 'The News Minute',
    date: '1 June 2023',
    year: 2023,
    headline: 'Rays of hope for thalassemia: Cutting-edge techniques promise a brighter future for patients',
    summary:
      'An in-depth feature authored by Dr. Revathi Raj, covering haploidentical bone marrow transplantation, advances in gene therapy, and the evolving landscape of thalassemia care in India. The piece outlines why early intervention and prenatal diagnosis remain the most powerful tools for families today.',
    relevance: 'Authored by Dr. Revathi Raj — demonstrates the clinical expertise and thought leadership behind TWA\'s protocols.',
    url: '#',
    pubColor: { bg: '#EDE9FE', text: '#3B0764' },
    featured: true,
    byDrRevathi: true,
  },
  {
    publication: 'New Indian Express',
    pubShort: 'New Indian Express',
    date: '7 June 2023',
    year: 2023,
    headline: 'Treading to combat thalassemia',
    summary:
      'A feature on thalassemia awareness and advocacy work in Chennai, covering TWA\'s ongoing efforts to expand patient reach, promote prenatal screening, and support families managing the disease. Includes perspectives from clinicians and patient families.',
    relevance: 'Profiles TWA\'s community outreach and awareness work in Chennai.',
    url: 'https://www.newindianexpress.com/cities/chennai/2023/jun/07/treading-to-combat-thalassemia-2582449.html',
    pubColor: { bg: '#FEE2E2', text: '#7F1313' },
    featured: false,
  },
  {
    publication: 'Apollo Hospitals — Press Release',
    pubShort: 'Apollo Hospitals',
    date: '31 May 2023',
    year: 2023,
    headline: 'The highest number of thalassemia affected children successfully treated at Apollo Cancer Centre, Chennai under TNCMCHI scheme',
    summary:
      'Apollo Cancer Centre Chennai reports record numbers of thalassemia-affected children treated under the Tamil Nadu Chief Minister\'s Comprehensive Health Insurance scheme — the same government programme TWA has helped its patients access for fully free bone marrow transplantation.',
    relevance: 'Shows the scale of BMT treatment in Chennai through the government scheme TWA patients are enrolled in.',
    url: '#',
    pubColor: { bg: '#FEE2E2', text: '#7F1313' },
    featured: false,
  },
  {
    publication: 'DATRI Blood Stem Cell Donors Registry',
    pubShort: 'DATRI Registry',
    date: '2023',
    year: 2023,
    headline: 'Managing Thalassemia — Insights from Dr. Revathi Raj',
    summary:
      'Dr. Revathi Raj discusses the clinical management of thalassemia, the importance of bone marrow registries like DATRI for haploidentical transplantation, and how long-term support systems like TWA address both the medical and emotional needs of patients and families in India.',
    relevance: 'Authored by Dr. Revathi Raj — expert perspective on BMT registries and holistic patient care at TWA.',
    url: 'https://datri.org/managing-thalassemia-insights-from-dr-revathi-raj/',
    pubColor: { bg: '#D1FAE5', text: '#065F46' },
    featured: true,
    byDrRevathi: true,
  },
  {
    publication: 'Adyar Times — Chennai',
    pubShort: 'Adyar Times',
    date: 'May 2023',
    year: 2023,
    headline: 'World Thalassaemia Day observed at VHS Hospital',
    summary:
      'World Thalassemia Day activities at Voluntary Health Services (VHS) Hospital, Taramani — the home of the TWA Chennai centre. The report covers patient programmes, blood donation awareness, and the role of VHS as a hub for thalassemia care in South Chennai.',
    relevance: 'Spotlights World Thalassemia Day activities at the VHS Taramani centre where TWA is based.',
    url: 'https://adyartimes.in/world-thalassaemia-day-observed-at-vhs-hospital/',
    pubColor: { bg: '#DBEAFE', text: '#1E3A8A' },
    featured: false,
  },

  /* ── 2021 ── */
  {
    publication: 'Times of India — Chennai',
    pubShort: 'Times of India',
    date: '12 May 2021',
    year: 2021,
    headline: 'Thalassemia patients face shortage of blood donors amid pandemic',
    summary:
      'COVID-19 lockdowns brought blood drives to a halt, leaving thalassemia patients desperate for donors. Dr. Revathi Raj, President of TWA Chennai, confirmed an acute shortage at VHS Taramani — with patients\' haemoglobin levels falling as life-critical transfusions were delayed across the city.',
    relevance: 'Directly quotes Dr. Revathi Raj on the COVID-era blood crisis at the Chennai TWA centre.',
    url: 'https://timesofindia.indiatimes.com/city/chennai/thalassemia-patients-face-shortage-of-blood-donors-amid-pandemic/articleshow/82561683.cms',
    pubColor: { bg: '#FEF3C7', text: '#78350F' },
    featured: true,
  },

  /* ── 2020 ── */
  {
    publication: 'The Hindu',
    pubShort: 'The Hindu',
    date: 'May 2020',
    year: 2020,
    headline: 'How chronically ill patients are managing in the time of COVID-19',
    summary:
      'A feature on how patients with chronic conditions — including thalassemia — navigated disrupted hospital access, blood shortages, and medicine supply chain failures during India\'s COVID-19 lockdowns. Includes perspectives from patients and clinicians at centres in Chennai.',
    relevance: 'Documents the impact of the pandemic on thalassemia patients, the same community TWA supports at VHS Taramani.',
    url: 'https://www.thehindu.com/society/less-than-healthy-news-with-resources-in-several-hospitals-now-directed-towards-covid-19-control-regular-patients-find-themselves-dangerously-adrift/article31478943.ece',
    pubColor: { bg: '#DCFCE7', text: '#14532D' },
    featured: false,
  },

  /* ── 2019 ── */
  {
    publication: 'The Hindu — Chennai',
    pubShort: 'The Hindu',
    date: 'January 2019',
    year: 2019,
    headline: '\'Thrust to make State thalassaemia-free by 2020\'',
    summary:
      'Clinicians and health officials discuss the Tamil Nadu government\'s commitment to making the state free of new thalassemia births through universal prenatal screening and genetic counselling. Dr. Revathi Raj is among those calling for routine antenatal testing as the cornerstone of prevention.',
    relevance: 'Records government-level prevention advocacy that TWA and Dr. Revathi Raj have actively supported.',
    url: 'https://www.thehindu.com/news/cities/chennai/thrust-to-make-state-thalassaemia-free-by-2020/article27073759.ece',
    pubColor: { bg: '#DCFCE7', text: '#14532D' },
    featured: false,
  },

  /* ── 2014 ── */
  {
    publication: 'The Hindu',
    pubShort: 'The Hindu',
    date: '2014',
    year: 2014,
    headline: 'Government to upscale project for thalassaemia',
    summary:
      'The Tamil Nadu government announces plans to expand its thalassemia screening and treatment programme, following early successes of the state\'s comprehensive care pilot. The expansion covers more districts, bringing free transfusion and chelation support closer to rural patients.',
    relevance: 'Documents the government\'s commitment to scaling a model that TWA has pioneered at VHS Taramani.',
    url: 'https://www.thehindu.com/news/national/tamil-nadu/government-to-upscale-project-for-thalassemia/article5992104.ece',
    pubColor: { bg: '#DCFCE7', text: '#14532D' },
    featured: false,
  },

  /* ── 2013 ── */
  {
    publication: 'New Indian Express',
    pubShort: 'New Indian Express',
    date: '1 July 2013',
    year: 2013,
    headline: 'Undetected thalassemia preying on Dharmapuri kids',
    summary:
      'Tribal children in rural Dharmapuri district — one of Tamil Nadu\'s highest-prevalence areas — travel long distances to the TWA Chennai centre in Taramani for monthly blood transfusions. The article discusses government scheme support and the acute lack of local awareness in these communities.',
    relevance: 'Documents patients from rural Dharmapuri relying on the Chennai TWA centre, illustrating the programme\'s statewide reach.',
    url: '#',
    pubColor: { bg: '#FEE2E2', text: '#7F1313' },
    featured: false,
  },

  /* ── 2012 ── */
  {
    publication: 'The Hindu',
    pubShort: 'The Hindu',
    date: '2012',
    year: 2012,
    headline: 'Four children cured of thalassemia',
    summary:
      'The Hindu reports on successful thalassemia cures through bone marrow transplantation in Tamil Nadu, with clinical context from VHS Taramani — where TWA runs its Chennai centre under Dr. Revathi Raj\'s guidance.',
    relevance: 'Early national press milestone: BMT cures for thalassemia covered by The Hindu.',
    url: 'https://www.thehindu.com/sci-tech/health/rx/Four-children-cured-of-thalassemia/article15906434.ece',
    pubColor: { bg: '#DCFCE7', text: '#14532D' },
    featured: false,
  },

  /* ── 2010 ── */
  {
    publication: 'LiveChennai',
    pubShort: 'LiveChennai',
    date: '6 September 2010',
    year: 2010,
    headline: 'Four children cured of Thalassemia at the VHS, Taramani, Chennai',
    summary:
      'Four children successfully cured under the state Kalaignar health insurance scheme at VHS Taramani. Reports that 159 young patients from across Tamil Nadu are registered with the Thalassemia Welfare Association, receiving free blood transfusions. Dr. Revathi Raj recommends prenatal screening to prevent new cases.',
    relevance: 'Earliest archived press mention of TWA Chennai — documents the founding era of the centre.',
    url: '#',
    pubColor: { bg: '#CCFBF1', text: '#0F766E' },
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
  const urlCount = ARTICLES.filter((a) => a.url !== '#').length

  return (
    <>
      <Header />
      <main id="main">

        {/* ── Page Hero ── */}
        <section
          style={{
            background: '#FFFFFF',
            borderBottom: '1px solid var(--color-border)',
            padding: '4rem 0 3.5rem',
          }}
        >
          <div className="container-narrow">
            <span className="eyebrow">Press &amp; Media</span>
            <h1 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
              TWA Chennai in the Media
            </h1>
            <p className="lead" style={{ maxWidth: '62ch' }}>
              From early treatment milestones in 2010 to community fundraising in 2025 — press
              coverage from The Hindu, Times of India, New Indian Express, Adyar Times, and
              more charting two decades of thalassemia care in Tamil Nadu.
            </p>

            {/* quick stats */}
            <div
              style={{
                display: 'flex', flexWrap: 'wrap', gap: '2rem',
                marginTop: '2.5rem', paddingTop: '2.5rem',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              {[
                { value: `${ARTICLES.length}`, label: 'Articles archived' },
                { value: '2010–2026', label: 'Coverage span' },
                { value: `${new Set(ARTICLES.map(a => a.pubShort)).size}`, label: 'Publications' },
                { value: `${urlCount}`, label: 'Live links' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginTop: '0.2rem' }}>{s.label}</div>
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
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
                      {a.url !== '#' ? (
                        <a
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm"
                          style={{ flexShrink: 0 }}
                        >
                          Read article <Icon name="arrow-up-right" size={13} />
                        </a>
                      ) : (
                        <span className="btn btn-outline btn-sm" style={{ flexShrink: 0, opacity: 0.45, cursor: 'default' }}>
                          Link coming soon
                        </span>
                      )}
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
                  {ARTICLES.length} articles from {new Set(ARTICLES.map(a => a.pubShort)).size} publications — chronological record from 2010 to 2026.
                </p>
              </div>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 900, margin: '0 auto' }}>
              {[...ARTICLES].sort((a, b) => b.year - a.year).map((a, i) => (
                <ScrollReveal key={a.headline} delay={Math.min(i * 40, 320)}>
                  <article
                    className="card card-flat"
                    style={{
                      display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                      background: '#fff', padding: '1.25rem 1.5rem',
                    }}
                  >
                    {/* year sidebar */}
                    <div style={{ flexShrink: 0, width: 52, textAlign: 'center', paddingTop: '0.1rem' }}>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-primary)', lineHeight: 1 }}>
                        {a.year}
                      </div>
                      <div style={{ width: 1, height: 40, background: 'var(--color-border)', margin: '0.4rem auto 0' }} />
                    </div>

                    {/* content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
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

                      {a.url !== '#' ? (
                        <a
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                            marginTop: '0.65rem', fontSize: '0.825rem', fontWeight: 600,
                            color: 'var(--color-accent-dark)',
                          }}
                        >
                          Read article <Icon name="arrow-up-right" size={13} />
                        </a>
                      ) : (
                        <span style={{ display: 'inline-block', marginTop: '0.65rem', fontSize: '0.78rem', color: 'var(--color-text-subtle)', fontStyle: 'italic' }}>
                          Direct link to be added
                        </span>
                      )}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
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
                <a href="mailto:twachennai@gmail.com" className="btn btn-primary">
                  <Icon name="mail" size={16} /> twachennai@gmail.com
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
