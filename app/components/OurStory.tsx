import Link from 'next/link'

const STORY_NUMBERS = [
  { value: '2006', desc: 'Year the centre was founded at VHS Hospital' },
  { value: '199',  desc: 'Patients currently on our care register' },
  { value: '300+', desc: 'Bone marrow transplants performed, fully free' },
  { value: '23',   desc: 'Lives we lost — to sepsis, heart and liver iron overload' },
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
              <span className="eyebrow eyebrow--accent">Our story, in her words</span>
              <h2 id="story-heading" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                A story from the heart.
              </h2>
              {/* pull quote */}
              <blockquote
                style={{
                  borderLeft: '3px solid var(--color-primary)',
                  paddingLeft: '1.375rem',
                  marginBottom: '2.25rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  background: 'linear-gradient(90deg, rgba(76,122,76,0.04) 0%, transparent 100%)',
                  borderRadius: '0 8px 8px 0',
                  padding: '0.875rem 1.375rem',
                }}
              >
                "In 2006, a group of patient families, volunteers, and physicians came together
                to support patients with thalassaemia. The centre grew from four patients in
                2006 to 199 patients in 2026 — and this is our story from the heart."
              </blockquote>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {CHAPTERS.map((c) => (
                <div key={c.title} style={{ display: 'flex', gap: '1.25rem' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 40, height: 40,
                      borderRadius: '50%',
                      background: 'var(--color-primary)',
                      boxShadow: 'none',
                      color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: '0.72rem',
                      letterSpacing: '0.03em',
                      marginTop: '0.15rem',
                    }}
                    aria-hidden="true"
                  >
                    {c.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{c.title}</h3>
                    <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: 'var(--color-text-muted)' }}>
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/our-story"
              className="btn btn-outline"
              style={{ marginTop: '2rem', display: 'inline-flex', whiteSpace: 'normal', textAlign: 'center' }}
            >
              Read the full story in Dr. Revathi Raj&apos;s own words →
            </Link>
          </div>

          {/* ── Right: story-in-numbers card ── */}
          <div
            style={{
              background: '#fff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
            }}
          >
            <span className="eyebrow" style={{ fontSize: '0.7rem' }}>
              Our Story, In Numbers
            </span>

            <div style={{ marginTop: '0.5rem' }}>
              {STORY_NUMBERS.map((n, i) => (
                <div
                  key={n.value}
                  style={{
                    display: 'flex', alignItems: 'baseline', gap: '1.1rem',
                    padding: '0.9rem 0',
                    borderBottom: i < STORY_NUMBERS.length - 1 ? '1px solid var(--color-border)' : undefined,
                  }}
                >
                  <span style={{
                    flexShrink: 0, minWidth: 62,
                    fontSize: '1.5rem', fontWeight: 800,
                    color: 'var(--color-primary)', letterSpacing: '-0.02em',
                  }}>
                    {n.value}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    {n.desc}
                  </span>
                </div>
              ))}
            </div>

            <blockquote style={{ marginTop: '1.5rem' }}>
              <p style={{
                fontStyle: 'italic', color: 'var(--color-text-muted)',
                fontSize: '0.95rem', lineHeight: 1.65, margin: 0,
              }}>
                &ldquo;We share our baby steps, our challenges, where we have fallen, and all the
                success stories.&rdquo;
              </p>
              <footer style={{ marginTop: '0.6rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text)' }}>
                — Dr. Revathi Raj
              </footer>
            </blockquote>

            <Link
              href="/our-story"
              style={{
                display: 'inline-block', marginTop: '1.5rem',
                color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem',
                textDecoration: 'underline',
              }}
            >
              Read the full story →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
