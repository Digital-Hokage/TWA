import Link from 'next/link'

type Article = { publication: string; date: string; year: number; headline: string; url: string }

const ARTICLES: Article[] = [
  { publication: 'Times of India', date: '15 May 2026', year: 2026, headline: 'Hosp marks World Thalassemia Day', url: '#' },
  { publication: 'The Hindu', date: 'March 2025', year: 2025, headline: 'Survivor stories highlight the need for early thalassemia diagnosis', url: 'https://www.thehindu.com/news/cities/chennai/survivor-stories-highlight-the-need-for-early-thalassemia-diagnosis-and-treatment/article70979048.ece' },
  { publication: 'Adyar Times', date: '21 March 2025', year: 2025, headline: 'Rotary Club hits the right note for Thalassemia Care', url: 'https://adyartimes.in/rotary-club-hits-the-right-note-for-thalassemia-care/' },
  { publication: 'LiveChennai', date: '18 March 2025', year: 2025, headline: 'Rotary Club Blends Music and Charity for a Noble Cause', url: 'https://www.livechennai.com/detailnews.asp?newsid=73866' },
  { publication: 'The Hindu', date: 'May 2024', year: 2024, headline: 'Prevention is key for a thalassemia-free India, say doctors', url: 'https://www.thehindu.com/news/cities/chennai/prevention-is-key-for-a-thalassemia-free-india-say-doctors/article68153289.ece' },
  { publication: 'Adyar Times', date: '18 May 2024', year: 2024, headline: 'Everyone can be part of World Thalassemia Day by donating blood', url: 'https://adyartimes.in/everyone-can-be-part-of-world-thalassemia-day-by-donating-blood/' },
  { publication: 'New Indian Express', date: '9 May 2024', year: 2024, headline: 'Joy of giving: Thalassemia survivor meets donor from Germany', url: 'https://www.newindianexpress.com/states/karnataka/2024/May/09/joy-of-giving-thalassemia-survivor-meets-donor-from-germany' },
  { publication: 'The News Minute', date: '1 June 2023', year: 2023, headline: 'Rays of hope for thalassemia (by Dr. Revathi Raj)', url: '#' },
  { publication: 'New Indian Express', date: '7 June 2023', year: 2023, headline: 'Treading to combat thalassemia', url: 'https://www.newindianexpress.com/cities/chennai/2023/jun/07/treading-to-combat-thalassemia-2582449.html' },
  { publication: 'Apollo Hospitals', date: '31 May 2023', year: 2023, headline: 'Highest number of thalassemia children treated at Apollo Cancer Centre', url: '#' },
  { publication: 'DATRI Registry', date: '2023', year: 2023, headline: 'Managing Thalassemia — Insights from Dr. Revathi Raj', url: 'https://datri.org/managing-thalassemia-insights-from-dr-revathi-raj/' },
  { publication: 'Adyar Times', date: 'May 2023', year: 2023, headline: 'World Thalassaemia Day observed at VHS Hospital', url: 'https://adyartimes.in/world-thalassaemia-day-observed-at-vhs-hospital/' },
  { publication: 'Times of India', date: '12 May 2021', year: 2021, headline: 'Thalassemia patients face shortage of blood donors amid pandemic', url: 'https://timesofindia.indiatimes.com/city/chennai/thalassemia-patients-face-shortage-of-blood-donors-amid-pandemic/articleshow/82561683.cms' },
  { publication: 'The Hindu', date: 'May 2020', year: 2020, headline: 'How chronically ill patients are managing in the time of COVID-19', url: 'https://www.thehindu.com/society/less-than-healthy-news-with-resources-in-several-hospitals-now-directed-towards-covid-19-control-regular-patients-find-themselves-dangerously-adrift/article31478943.ece' },
  { publication: 'The Hindu', date: 'January 2019', year: 2019, headline: '\'Thrust to make State thalassaemia-free by 2020\'', url: 'https://www.thehindu.com/news/cities/chennai/thrust-to-make-state-thalassaemia-free-by-2020/article27073759.ece' },
  { publication: 'The Hindu', date: '2014', year: 2014, headline: 'Government to upscale project for thalassaemia', url: 'https://www.thehindu.com/news/national/tamil-nadu/government-to-upscale-project-for-thalassemia/article5992104.ece' },
  { publication: 'New Indian Express', date: '1 July 2013', year: 2013, headline: 'Undetected thalassemia preying on Dharmapuri kids', url: '#' },
  { publication: 'The Hindu', date: '2012', year: 2012, headline: 'Four children cured of thalassemia', url: 'https://www.thehindu.com/sci-tech/health/rx/Four-children-cured-of-thalassemia/article15906434.ece' },
  { publication: 'LiveChennai', date: '6 September 2010', year: 2010, headline: 'Four children cured of Thalassemia at the VHS, Taramani, Chennai', url: '#' },
]

const liveCount = ARTICLES.filter((a) => a.url !== '#').length

export default function AdminMediaPage() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>Media Articles</h1>
          <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
            {ARTICLES.length} articles · {liveCount} with live URLs · {ARTICLES.length - liveCount} links pending
          </p>
        </div>
        <Link
          href="/media"
          target="_blank"
          style={{
            padding: '0.6rem 1rem', background: '#0F172A', color: '#fff',
            borderRadius: 8, fontSize: '0.875rem', fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          View Media page ↗
        </Link>
      </div>

      <div
        style={{
          background: '#FEF3C7', border: '1px solid #FCD34D',
          borderRadius: 8, padding: '0.85rem 1rem', marginBottom: '1.5rem',
          fontSize: '0.875rem', color: '#78350F',
        }}
      >
        <strong>To add or edit articles:</strong> open{' '}
        <code style={{ background: '#FDE68A', padding: '0.1rem 0.3rem', borderRadius: 3 }}>
          app/media/page.tsx
        </code>{' '}
        and update the <code>ARTICLES</code> array. Articles are sorted by year automatically.
      </div>

      <div
        style={{
          background: '#fff', border: '1px solid #E2E8F0',
          borderRadius: 12, overflow: 'hidden',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#475569', fontWeight: 600, width: 50 }}>#</th>
              <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#475569', fontWeight: 600 }}>Publication</th>
              <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#475569', fontWeight: 600 }}>Date</th>
              <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#475569', fontWeight: 600 }}>Headline</th>
              <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#475569', fontWeight: 600 }}>Link</th>
            </tr>
          </thead>
          <tbody>
            {[...ARTICLES].sort((a, b) => b.year - a.year).map((article, i) => (
              <tr
                key={article.headline}
                style={{ borderBottom: '1px solid #F1F5F9', background: i % 2 === 0 ? '#fff' : '#FAFAFA' }}
              >
                <td style={{ padding: '0.75rem 1rem', color: '#94A3B8', fontWeight: 600 }}>
                  {i + 1}
                </td>
                <td style={{ padding: '0.75rem 1rem', color: '#1E293B', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  {article.publication}
                </td>
                <td style={{ padding: '0.75rem 1rem', color: '#64748B', whiteSpace: 'nowrap' }}>
                  {article.date}
                </td>
                <td style={{ padding: '0.75rem 1rem', color: '#334155', lineHeight: 1.4, maxWidth: 360 }}>
                  {article.headline}
                </td>
                <td style={{ padding: '0.75rem 1rem', whiteSpace: 'nowrap' }}>
                  {article.url !== '#' ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#0F766E', fontWeight: 600, fontSize: '0.82rem' }}
                    >
                      Live ↗
                    </a>
                  ) : (
                    <span style={{ color: '#F59E0B', fontWeight: 600, fontSize: '0.82rem' }}>Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
