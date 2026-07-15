import Icon from './Icon'

type Article = {
  publication: string
  date: string
  dateTime: string
  headline: string
  summary: string
  url: string
  pubColor: { bg: string; text: string }
}

const ARTICLES: Article[] = [
  {
    publication: 'LiveChennai',
    date: '6 Sep 2010',
    dateTime: '2010-09-06',
    headline: 'Four children cured of Thalassemia at the VHS, Taramani, Chennai',
    summary:
      'Four children successfully treated at VHS Taramani under the Kalaignar health insurance scheme. Reports that 159 youngsters from across Tamil Nadu are registered with TWA, receiving free transfusions.',
    url: '',
    pubColor: { bg: '#DBEAFE', text: '#1E3A8A' },
  },
  {
    publication: 'New Indian Express',
    date: '1 Jul 2013',
    dateTime: '2013-07-01',
    headline: 'Undetected thalassemia preying on Dharmapuri kids',
    summary:
      'Tribal children in rural Dharmapuri travel to the TWA Chennai centre in Taramani for monthly blood transfusions, highlighting the statewide reach of the programme.',
    url: '',
    pubColor: { bg: '#DCFCE7', text: '#14532D' },
  },
  {
    publication: 'Times of India — Chennai',
    date: '12 May 2021',
    dateTime: '2021-05-12',
    headline: 'Thalassemia patients face shortage of blood donors amid pandemic',
    summary:
      'Dr. Revathi Raj (TWA Honorary President) confirmed an acute blood shortage at VHS Chennai during COVID-19 lockdowns. Patients’ haemoglobin levels fell as transfusions were delayed across the city.',
    url: '',
    pubColor: { bg: '#FEF3C7', text: '#78350F' },
  },
  {
    publication: 'Adyar Times — Chennai',
    date: '21 Mar 2025',
    dateTime: '2025-03-21',
    headline: 'Rotary Club hits the right note for Thalassemia Care',
    summary:
      'The Rotary Club of Chennai Port City donated ₹2 lakh to TWA at VHS Taramani via a musical concert fundraiser, supporting ongoing thalassemia patient care and education programmes.',
    url: '',
    pubColor: { bg: '#EDE9FE', text: '#3B0764' },
  },
]

export default function MediaCoverage() {
  return (
    <section className="section" aria-labelledby="media-heading">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow--muted">In the news</span>
          <h2 id="media-heading">TWA Chennai in the Media</h2>
          <p className="lead" style={{ margin: '0.75rem auto 0' }}>
            Our work has been covered by leading publications across Tamil Nadu and India — from
            treatment milestones to advocacy and community fundraising.
          </p>
        </div>

        <div className="media-grid">
          {ARTICLES.map((a) => (
            <article
              key={a.headline}
              className="card card-hover"
              style={{
                display: 'flex', flexDirection: 'column',
                borderRadius: 12, padding: '1.5rem',
                borderLeft: '3px solid var(--color-primary-soft)',
              }}
            >
              {/* header row: publication name + date */}
              <div
                style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: '0.75rem',
                  flexWrap: 'wrap',
                  marginBottom: '1rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    letterSpacing: '0.025em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {a.publication}
                </span>
                <time
                  dateTime={a.dateTime}
                  style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', flexShrink: 0 }}
                >
                  {a.date}
                </time>
              </div>

              {/* headline */}
              <h3
                style={{
                  fontSize: '1rem', lineHeight: 1.4,
                  marginBottom: '0.65rem', color: 'var(--color-text)',
                  fontWeight: 700,
                }}
              >
                {a.headline}
              </h3>

              {/* summary */}
              <p
                style={{
                  fontSize: '0.9rem', color: 'var(--color-text-muted)',
                  lineHeight: 1.65, flex: 1,
                }}
              >
                {a.summary}
              </p>

              {/* link — only shown when URL is available */}
              {a.url ? (
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                    marginTop: '1.1rem',
                    fontSize: '0.875rem', fontWeight: 600,
                    color: 'var(--color-accent-dark)',
                  }}
                >
                  Read article <Icon name="arrow-up-right" size={14} />
                </a>
              ) : (
                <span
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                    marginTop: '1.1rem',
                    fontSize: '0.75rem', fontWeight: 500, fontStyle: 'italic',
                    color: 'var(--color-text-subtle)',
                  }}
                >
                  Link being sourced
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
