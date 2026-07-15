import Link from 'next/link'

const STORY_NUMBERS = [
  { value: '2006', desc: 'Year the centre was founded at VHS Hospital, Taramani' },
  { value: '199',  desc: 'Patients currently on our care register (as of 2026)' },
  { value: '300+', desc: 'Bone marrow transplants performed, fully free of cost' },
  { value: '23',   desc: 'Lives lost over two decades — to sepsis, heart and liver iron overload' },
]

const CHAPTERS = [
  {
    num: '01',
    title: 'Learn from Yesterday',
    text: 'The initial challenge was to provide safe transfusions. We invested in leucodepletion filters and fourth-generation ELISA kits. Through persistent advocacy — including visits by celebrities and politicians — thalassaemia comprehensive care is now included in the government insurance scheme, covering diagnosis, transfusion, chelation, cardiac and endocrine support, and even curative BMT, completely free.',
  },
  {
    num: '02',
    title: 'Live for Today',
    text: 'We have now performed over 300 BMT procedures fully free of cost, including haploidentical BMT through an MoU with Apollo Hospitals, Chennai. Prenatal diagnosis is the way forward — we have assisted over 100 chorion villous sampling procedures through an MoU with Mediscan Systems.',
  },
  {
    num: '03',
    title: 'Hope for Tomorrow',
    text: 'Our goal is to include thalassaemia testing in all routine antenatal screening, followed by genetic counselling. The physical, social, and psychological well-being of every family is our focus. The future holds gene therapy, and we hope all our patients will be able to benefit from this and lead a healthy life.',
  },
]

export default function OurStory() {
  return (
    <section className="section" aria-labelledby="story-heading">
      <div className="container">
        <div className="story-grid">

          {/* ── Left: narrative ── */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <span className="eyebrow">Our story, in her words</span>
              <h2 id="story-heading" style={{ marginTop: '0.25rem', marginBottom: '1.25rem', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 700 }}>
                A story from the heart.
              </h2>
              {/* pull quote */}
              <blockquote
                className="pull-quote"
                style={{
                  borderLeft: '3px solid var(--color-primary)',
                  paddingLeft: '1.25rem',
                  marginBottom: '2.25rem',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                }}
              >
                "In 2006, a group of patient families, volunteers, and physicians came together
                to support patients with thalassaemia. The centre grew from four patients in
                2006 to 199 patients in 2026 — and this is our story from the heart."
              </blockquote>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {CHAPTERS.map((c) => (
                <div key={c.title} className="timeline-item" style={{ display: 'flex', gap: '1.25rem' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 28, height: 28,
                      borderRadius: '50%',
                      background: 'var(--color-primary-soft)',
                      color: 'var(--color-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 600, fontSize: '0.75rem',
                      marginTop: '0.1rem',
                      position: 'relative', zIndex: 1,
                    }}
                    aria-hidden="true"
                  >
                    {c.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>{c.title}</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-ink-muted)' }}>
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/our-story"
              className="quiet-link"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                marginTop: '2rem',
                color: 'var(--color-primary)', fontWeight: 500, fontSize: '0.9rem',
              }}
            >
              Read the full story in Dr. Revathi Raj&apos;s own words →
            </Link>
          </div>

          {/* ── Right: story-in-numbers card ── */}
          <div
            style={{
              background: '#fff',
              border: '1.5px solid rgba(76, 122, 76, 0.15)',
              borderRadius: 16,
              padding: '2rem',
              boxShadow: 'var(--shadow-card)',
              alignSelf: 'start',
            }}
          >
            <span className="eyebrow" style={{ fontSize: '0.7rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              TWA Chennai · In Numbers
            </span>

            <div>
              {STORY_NUMBERS.map((n, i) => (
                <div
                  key={n.value}
                  style={{
                    display: 'flex', alignItems: 'baseline', gap: '1.1rem',
                    padding: '0.9rem 0',
                    borderBottom: i < STORY_NUMBERS.length - 1 ? '1px solid rgba(76,122,76,0.1)' : undefined,
                  }}
                >
                  <span style={{
                    flexShrink: 0, minWidth: 78,
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.2rem', fontWeight: 700,
                    color: 'var(--color-primary)', lineHeight: 1,
                  }}>
                    {n.value}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)', lineHeight: 1.4 }}>
                    {n.desc}
                  </span>
                </div>
              ))}
            </div>

            <blockquote
              className="pull-quote"
              style={{
                marginTop: '1.5rem',
                borderLeft: '2px solid var(--color-primary-soft)',
                paddingLeft: '1rem',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                color: 'var(--color-ink-muted)',
                fontSize: '0.95rem', lineHeight: 1.65, margin: 0,
              }}>
                &ldquo;We share our baby steps, our challenges, where we have fallen, and all the
                success stories.&rdquo;
              </p>
              <footer style={{ marginTop: '0.6rem', fontWeight: 500, fontSize: '0.85rem', color: 'var(--color-ink)', fontFamily: 'var(--font-sans)', fontStyle: 'normal' }}>
                — Dr. Revathi Raj
              </footer>
            </blockquote>

            <Link
              href="/our-story"
              className="quiet-link"
              style={{
                display: 'inline-block', marginTop: '1.5rem',
                color: 'var(--color-primary)', fontWeight: 500, fontSize: '0.875rem',
              }}
            >
              Read the full story in her own words →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
