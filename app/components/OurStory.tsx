import Link from 'next/link'
import ImagePlaceholder from './ImagePlaceholder'

const CHAPTERS = [
  {
    num: '01',
    title: 'Learn from Yesterday',
    text: 'The initial challenge was to provide safe transfusions. We invested in leucodepletion filters and fourth-generation ELISA kits. Through persistent advocacy — including visits by celebrities and politicians — thalassaemia comprehensive care is now included in the government insurance scheme, covering diagnosis, transfusion, chelation, cardiac and endocrine support, and even curative BMT, completely free.',
  },
  {
    num: '02',
    title: 'Live for Today',
    text: 'We have now performed over 300 BMT procedures fully free of cost, including haploidentical BMT through an MoU with Apollo Hospitals, Chennai. Prenatal diagnosis is the way forward — we have assisted over 100 chorion villous sampling procedures through an MoU with Mediscan Systems. Two sister centres in Coimbatore and Nellore now serve an additional 150 children.',
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
                  borderLeft: '4px solid var(--color-primary)',
                  paddingLeft: '1.25rem',
                  marginBottom: '2.25rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
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
                      color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: '0.75rem',
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
              style={{ marginTop: '2rem', display: 'inline-flex' }}
            >
              Read the full story in Dr. Revathi Raj&apos;s own words →
            </Link>
          </div>

          {/* ── Right: image + honour card ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <ImagePlaceholder
              aspectRatio="3/4"
              label="Dr. Revathi Raj, Founder & President of TWA Chennai — portrait or candid photo at the VHS Taramani centre"
            />

            {/* Medal of Honour callout */}
            <div
              style={{
                background: 'var(--color-accent-soft)',
                border: '1px solid #99F6E4',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.8rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.07em',
                  color: 'var(--color-accent-dark)', marginBottom: '0.4rem',
                }}
              >
                Government Recognition
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                TWA received the <strong style={{ color: 'var(--color-accent-dark)' }}>Medal of Honour</strong> from
                the Government of Tamil Nadu in recognition of two decades of service to
                thalassemia patients across the state.
              </p>
            </div>

            {/* Photo of award ceremony placeholder */}
            <ImagePlaceholder
              aspectRatio="16/9"
              label="Award ceremony photo — TWA receiving the Government of Tamil Nadu Medal of Honour"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
