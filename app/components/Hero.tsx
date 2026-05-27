import Link from 'next/link'
import Icon from './Icon'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        background:
          'linear-gradient(180deg, #FFF7F7 0%, #FFFFFF 100%)',
        borderBottom: '1px solid var(--color-border)',
        padding: '5rem 0 4rem',
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2rem' }}>
          <div style={{ maxWidth: 820 }}>
            <span className="badge badge-primary" style={{ marginBottom: '1.25rem' }}>
              <Icon name="droplet" size={14} /> Supporting thalassemia patients since 2009
            </span>
            <h1 id="hero-heading" style={{ marginBottom: '1.25rem' }}>
              Lifelong care for children<br />born with thalassemia.
            </h1>
            <p className="lead" style={{ maxWidth: '60ch', marginBottom: '2rem' }}>
              Thalassemia Welfare Association, Chennai is a registered non-profit providing
              safe blood, free medicines, diagnostic support and transit assistance to
              thalassemia patients across Tamil Nadu — for life.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link href="/donate" className="btn btn-primary btn-lg">
                Donate to a Patient <Icon name="arrow-right" size={16} />
              </Link>
              <Link href="/get-involved" className="btn btn-outline btn-lg">
                Become a Volunteer
              </Link>
            </div>

            <ul
              style={{
                marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
                listStyle: 'none', fontSize: '0.9rem', color: 'var(--color-text-muted)',
              }}
            >
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="check-circle" size={18} className="text-accent" /> Registered non-profit
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="check-circle" size={18} className="text-accent" /> 80G tax exemption
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="check-circle" size={18} className="text-accent" /> Transparent finances
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
