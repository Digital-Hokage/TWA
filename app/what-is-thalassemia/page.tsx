import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import Icon from '../components/Icon'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'What is Thalassemia?',
  description:
    'Thalassemia is an inherited blood disorder in which the body produces less haemoglobin than it needs. Learn about types, treatment, genetic inheritance, carrier screening, and care in India.',
}

/* ─── Inline medical SVG icons — clean, clinical, not decorative ─── */
function BloodCellSVG() {
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
      {/* Outer disc */}
      <ellipse cx="60" cy="60" rx="52" ry="52" fill="#FECACA" stroke="#B91C1C" strokeWidth="1.5" />
      {/* Biconvex inner depression */}
      <ellipse cx="60" cy="60" rx="30" ry="28" fill="#FCA5A5" opacity="0.7" />
      <ellipse cx="60" cy="60" rx="14" ry="12" fill="#B91C1C" opacity="0.22" />
      {/* Highlight */}
      <ellipse cx="46" cy="44" rx="10" ry="7" fill="white" opacity="0.18" />
    </svg>
  )
}

function ThalCellSVG() {
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
      {/* Pale, irregular disc */}
      <ellipse cx="60" cy="62" rx="44" ry="40" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Fragmented inner */}
      <ellipse cx="60" cy="60" rx="20" ry="18" fill="#FECACA" opacity="0.5" />
      {/* Break marks */}
      <path d="M38 48 Q44 54 38 60" stroke="#EF4444" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M82 50 Q76 56 82 62" stroke="#EF4444" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M55 32 Q60 40 65 32" stroke="#EF4444" strokeWidth="1.2" fill="none" opacity="0.4" />
    </svg>
  )
}

function DNAIcon({ size = 48, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M16 4C20 14 32 14 32 24C32 34 20 34 16 44" />
      <path d="M32 4C28 14 16 14 16 24C16 34 28 34 32 44" />
      <line x1="16.5" y1="11"  x2="31.5" y2="11"  opacity="0.55" />
      <line x1="14"   y1="20"  x2="34"   y2="20"  opacity="0.55" />
      <line x1="14"   y1="28"  x2="34"   y2="28"  opacity="0.55" />
      <line x1="16.5" y1="37"  x2="31.5" y2="37"  opacity="0.55" />
    </svg>
  )
}

const TYPES = [
  {
    name: 'Thalassemia Minor',
    subtitle: 'Carrier / Trait',
    severity: 10,
    severityColor: '#22C55E',
    badge: { bg: '#DCFCE7', text: '#14532D', label: 'Carrier' },
    desc: 'One altered gene inherited. Carriers are usually healthy and often don\'t need treatment. However, they can pass the gene to their children. Screening before marriage is important.',
    keyFact: 'Estimated 45 million carriers in India',
  },
  {
    name: 'Thalassemia Intermedia',
    subtitle: 'Moderate',
    severity: 52,
    severityColor: '#F59E0B',
    badge: { bg: '#FEF3C7', text: '#92400E', label: 'Moderate' },
    desc: 'Both genes are altered but anaemia is less severe. Some patients need occasional transfusions. Many can lead largely normal lives with regular monitoring and medicines.',
    keyFact: 'May require transfusions during illness or pregnancy',
  },
  {
    name: 'Thalassemia Major',
    subtitle: 'Severe — Cooley\'s Anaemia',
    severity: 100,
    severityColor: '#EF4444',
    badge: { bg: '#FEE2E2', text: '#7F1313', label: 'Severe' },
    desc: 'Both parents have passed on the altered gene. Without treatment, severe anaemia develops within the first two years of life. Lifelong, regular transfusions every 2–4 weeks are needed, alongside daily medicines to manage iron overload.',
    keyFact: '10,000–15,000 new affected births in India annually',
  },
]

const TREATMENT_STEPS = [
  {
    num: '01',
    icon: 'droplet' as const,
    title: 'Regular blood transfusions',
    desc: 'Safe, screened, leukocyte-filtered blood every 2–4 weeks keeps haemoglobin in a safe range. TWA pioneered the use of scalp vein sets to protect veins in long-term patients. Febrile reaction rates at our centre are kept below 1%.',
    note: 'Every 2–4 weeks, lifelong',
  },
  {
    num: '02',
    icon: 'pill' as const,
    title: 'Iron chelation therapy',
    desc: 'Each transfusion brings iron that the body cannot excrete. Without chelation medicines (deferasirox, deferiprone), iron accumulates in the heart and liver causing fatal damage. TWA provides these medicines free under the government scheme.',
    note: 'Daily, oral medicines',
  },
  {
    num: '03',
    icon: 'activity' as const,
    title: 'Quarterly monitoring',
    desc: 'Ferritin, liver function, kidney function and cardiac MRI assessments every three months. All patients receive Vitamin D supplementation. Hepatitis C screening and antiviral treatment provided where needed.',
    note: 'Every 3 months',
  },
  {
    num: '04',
    icon: 'users' as const,
    title: 'Comprehensive family support',
    desc: 'School continuity, psychosocial counselling, nutrition support through Annamayil, and art therapy sessions via Camp Rainbow. TWA has assisted 9 successful deliveries within the patient cohort.',
    note: 'Ongoing — physical, social, psychological',
  },
  {
    num: '05',
    icon: 'award' as const,
    title: 'Curative: Bone Marrow Transplantation',
    desc: 'BMT can cure thalassemia for patients with a matched donor. TWA has facilitated over 300 BMTs free of cost — including haploidentical BMT through our MoU with Apollo Hospitals, Chennai. Average age of transplant has fallen as younger patients are treated first.',
    note: 'Potentially curative — 300+ performed free',
  },
]

export default function ThalassemiaPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* ── Hero ── */}
        <section
          aria-labelledby="thal-hero-heading"
          style={{
            background: '#FFFFFF',
            borderBottom: '1px solid var(--color-border)',
            padding: '4rem 0 3.5rem',
          }}
        >
          <div className="container-narrow">
            <span className="eyebrow">Patient &amp; Family Resources</span>
            <h1
              id="thal-hero-heading"
              style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
            >
              Understanding Thalassemia
            </h1>
            <p className="lead" style={{ maxWidth: '62ch' }}>
              A clear, evidence-based overview of what thalassemia is, how it is inherited,
              how it is treated, and why carrier screening before starting a family is the single
              most powerful step a community can take.
            </p>
            <p
              style={{
                fontSize: '0.8rem', color: 'var(--color-text-subtle)',
                marginTop: '0.85rem', maxWidth: '55ch', lineHeight: 1.55,
              }}
            >
              This page is for general education only. It is not a substitute for advice from a
              qualified medical professional. Always consult your treating physician.
            </p>

            {/* quick-jump navigation */}
            <nav aria-label="Page sections" className="thal-quick-nav">
              {[
                ['#what',      'What is it?'],
                ['#inherited', 'How it\'s inherited'],
                ['#types',     'Types'],
                ['#treatment', 'Treatment'],
                ['#screening', 'Carrier screening'],
              ].map(([href, label]) => (
                <a key={href} href={href}>{label}</a>
              ))}
            </nav>
          </div>
        </section>

        {/* ── Section I: What is Thalassemia ── */}
        <section id="what" className="section" aria-labelledby="what-heading" style={{ scrollMarginTop: '80px' }}>
          <div className="container">
            <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,1fr)', gap: '3.5rem', alignItems: 'center' }}>

              {/* text */}
              <div>
                <ScrollReveal direction="left">
                  <span className="eyebrow eyebrow--accent">Section I</span>
                  <h2 id="what-heading" style={{ marginTop: '0.4rem', marginBottom: '1.25rem' }}>
                    What is thalassemia?
                  </h2>
                  <p style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
                    Thalassemia is an <strong>inherited blood disorder</strong> in which the body
                    produces less haemoglobin than it needs. Haemoglobin is the protein inside
                    red blood cells that carries oxygen from the lungs to every organ in the body.
                  </p>
                  <p style={{ marginBottom: '1rem', lineHeight: 1.75 }}>
                    When haemoglobin production is reduced, red blood cells are smaller, paler,
                    and destroyed much faster than the body can replace them. The result is
                    <strong> chronic anaemia</strong> — a persistent shortage of healthy
                    red blood cells.
                  </p>
                  <p style={{ lineHeight: 1.75 }}>
                    In its severe form (thalassemia major), this anaemia can cause fatigue,
                    organ damage, growth delay, and — without treatment — death in childhood.
                    With proper care, patients live full lives.
                  </p>
                </ScrollReveal>
              </div>

              {/* visual */}
              <ScrollReveal direction="right">
                <div
                  style={{
                    background: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'var(--color-text-subtle)',
                      textAlign: 'center', marginBottom: '1.5rem',
                    }}
                  >
                    Red Blood Cells — Normal vs Thalassemia
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', textAlign: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                        <BloodCellSVG />
                      </div>
                      <p style={{ fontWeight: 700, color: 'var(--color-text)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                        Normal
                      </p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', lineHeight: 1.45 }}>
                        Full of haemoglobin<br />Lives ~120 days
                      </p>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                        <ThalCellSVG />
                      </div>
                      <p style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                        Thalassemia
                      </p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', lineHeight: 1.45 }}>
                        Low haemoglobin<br />Destroyed in ~20 days
                      </p>
                    </div>
                  </div>

                  {/* result indicator */}
                  <div
                    style={{
                      marginTop: '1.25rem', padding: '0.85rem',
                      background: '#FEE2E2', borderRadius: 'var(--radius)',
                      textAlign: 'center',
                    }}
                  >
                    <p style={{ fontSize: '0.8rem', color: '#7F1313', fontWeight: 600, margin: 0 }}>
                      Chronic anaemia · Organ iron overload · Fatigue · Growth delay
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ── Section II: Inheritance ── */}
        <section
          id="inherited"
          className="section bg-subtle"
          aria-labelledby="inherited-heading"
          style={{ scrollMarginTop: '80px' }}
        >
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <span className="eyebrow eyebrow--muted">Section II</span>
                <h2 id="inherited-heading" style={{ marginTop: '0.4rem' }}>
                  It&apos;s inherited — not infectious.
                </h2>
                <p className="lead" style={{ margin: '0.75rem auto 0' }}>
                  Thalassemia is caused by a variation in the haemoglobin gene passed down
                  from parents. You cannot &lsquo;catch&rsquo; thalassemia.
                </p>
              </div>
            </ScrollReveal>

            <div
              className="stack-mobile"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
                gap: '3rem', alignItems: 'start',
                maxWidth: 900, margin: '0 auto',
              }}
            >
              {/* DNA visual */}
              <ScrollReveal direction="left">
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <DNAIcon size={80} color="var(--color-accent)" />
                  </div>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                    The HBB gene
                  </p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    A variation in the beta-globin gene (HBB) on chromosome 11 reduces
                    haemoglobin production. In alpha-thalassemia, it is the HBA1/HBA2
                    genes on chromosome 16.
                  </p>
                  <div
                    style={{
                      marginTop: '1rem', padding: '0.6rem 0.9rem',
                      background: 'var(--color-accent-soft)',
                      borderRadius: 'var(--radius)',
                    }}
                  >
                    <p style={{ fontSize: '0.78rem', color: 'var(--color-accent-dark)', fontWeight: 600, margin: 0 }}>
                      Beta-thalassemia major requires inheriting one altered gene from each parent.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Punnett square explanation */}
              <ScrollReveal direction="right">
                <h3 style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
                  When both parents are carriers, each child has:
                </h3>
                <div className="punnett-grid">
                  {[
                    {
                      pct: '25%', label: 'Unaffected',
                      note: 'Does not carry or have thalassemia',
                      bg: '#F0FDF4', border: '#86EFAC', textC: '#14532D',
                    },
                    {
                      pct: '50%', label: 'Carrier',
                      note: 'Carries the trait — usually healthy, but can pass it on',
                      bg: '#FFFBEB', border: '#FCD34D', textC: '#78350F',
                    },
                    {
                      pct: '25%', label: 'Thalassemia Major',
                      note: 'Has the condition — needs lifelong treatment',
                      bg: '#FFF1F2', border: '#FCA5A5', textC: '#7F1313',
                    },
                  ].map((o) => (
                    <div
                      key={o.label}
                      style={{
                        background: o.bg, border: `1.5px solid ${o.border}`,
                        borderRadius: 'var(--radius-lg)', padding: '1.25rem',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: o.textC, lineHeight: 1 }}>
                        {o.pct}
                      </div>
                      <div style={{ fontWeight: 700, color: o.textC, marginTop: '0.4rem', fontSize: '0.9rem' }}>
                        {o.label}
                      </div>
                      <div style={{ fontSize: '0.775rem', color: 'var(--color-text-muted)', marginTop: '0.3rem', lineHeight: 1.45 }}>
                        {o.note}
                      </div>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    marginTop: '1.25rem', padding: '0.85rem 1rem',
                    background: '#fff', borderRadius: 'var(--radius)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: 'var(--color-text)' }}>Remember:</strong> These are
                  probabilities per child — not a quota. Two carrier parents could have
                  four unaffected children, or four affected children. The 25% risk applies
                  to every pregnancy independently.
                </p>
              </ScrollReveal>
            </div>

            {/* India context */}
            <ScrollReveal delay={100}>
              <div
                style={{
                  maxWidth: 800, margin: '3rem auto 0',
                  padding: '1.5rem', borderRadius: 'var(--radius-lg)',
                  background: '#fff', border: '1px solid var(--color-border)',
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {[
                  { value: '3–4%',    label: 'Carrier rate in India\'s general population' },
                  { value: '45M+',    label: 'Estimated carriers in India' },
                  { value: '10–15K',  label: 'New thalassemia major births in India per year' },
                  { value: '1 in 25', label: 'People in some Tamil Nadu communities carry the gene' },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.3rem', lineHeight: 1.4 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Section III: Types ── */}
        <section
          id="types"
          className="section"
          aria-labelledby="types-heading"
          style={{ scrollMarginTop: '80px' }}
        >
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <span className="eyebrow eyebrow--accent">Section III</span>
                <h2 id="types-heading" style={{ marginTop: '0.4rem' }}>
                  How severe can it be?
                </h2>
                <p className="lead" style={{ margin: '0.75rem auto 0' }}>
                  Doctors classify thalassemia by which haemoglobin chain is affected (alpha
                  or beta) and by clinical severity. Beta-thalassemia is more prevalent in India.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-3">
              {TYPES.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 100}>
                  <article className="card card-hover" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.22rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          background: t.badge.bg,
                          color: t.badge.text,
                          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em',
                        }}
                      >
                        {t.badge.label}
                      </span>
                    </div>

                    <h3 className="card-title">{t.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginBottom: '0.75rem' }}>{t.subtitle}</p>

                    {/* Severity bar */}
                    <div className="severity-bar">
                      <div
                        className="severity-bar-fill"
                        style={{ width: `${t.severity}%`, background: t.severityColor }}
                      />
                    </div>
                    <p style={{ fontSize: '0.7rem', color: 'var(--color-text-subtle)', marginBottom: '1rem' }}>
                      Clinical severity
                    </p>

                    <p className="card-body" style={{ flex: 1 }}>{t.desc}</p>

                    <div
                      style={{
                        marginTop: '1rem', padding: '0.65rem 0.85rem',
                        background: t.badge.bg, borderRadius: 'var(--radius)',
                        fontSize: '0.78rem', color: t.badge.text, fontWeight: 600,
                      }}
                    >
                      {t.keyFact}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section IV: Treatment ── */}
        <section
          id="treatment"
          className="section bg-subtle"
          aria-labelledby="treatment-heading"
          style={{ scrollMarginTop: '80px' }}
        >
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <span className="eyebrow eyebrow--muted">Section IV</span>
                <h2 id="treatment-heading" style={{ marginTop: '0.4rem' }}>
                  What treatment involves.
                </h2>
                <p className="lead" style={{ margin: '0.75rem auto 0' }}>
                  Thalassemia major is a lifelong condition. Treatment is not a single procedure
                  — it is an ongoing package of care that touches every part of a patient&apos;s life.
                </p>
              </div>
            </ScrollReveal>

            <div
              style={{
                display: 'flex', flexDirection: 'column', gap: '0.85rem',
                maxWidth: 820, margin: '0 auto',
              }}
            >
              {TREATMENT_STEPS.map((s, i) => (
                <ScrollReveal key={s.num} delay={i * 80}>
                  <div className="treatment-step">
                    {/* step number */}
                    <div
                      style={{
                        flexShrink: 0, width: 44, height: 44,
                        borderRadius: '50%',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 900, fontSize: '0.72rem', letterSpacing: '0.04em',
                      }}
                    >
                      {s.num}
                    </div>
                    {/* icon tile */}
                    <span
                      className="icon-tile"
                      style={{ flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      <Icon name={s.icon} size={20} />
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>
                          {s.title}
                        </h3>
                        <span
                          style={{
                            fontSize: '0.72rem', fontWeight: 600,
                            color: 'var(--color-accent-dark)',
                            background: 'var(--color-accent-soft)',
                            padding: '0.15rem 0.55rem',
                            borderRadius: 'var(--radius-full)',
                          }}
                        >
                          {s.note}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginTop: '0.4rem' }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={100}>
              <p
                style={{
                  textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem',
                  color: 'var(--color-text-subtle)', maxWidth: 640, margin: '2rem auto 0',
                }}
              >
                All five components of care are covered free of cost for our patients under the
                government insurance scheme — the result of years of advocacy by TWA.{' '}
                <Link href="/programs" style={{ color: 'var(--color-accent-dark)', fontWeight: 600 }}>
                  See our programmes →
                </Link>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Section V: Carrier Screening ── */}
        <section
          id="screening"
          className="section bg-subtle"
          aria-labelledby="screening-heading"
          style={{ scrollMarginTop: '80px' }}
        >
          <div className="container">
            <div
              className="stack-mobile"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)',
                gap: '3rem', alignItems: 'center',
              }}
            >
              {/* left: text */}
              <ScrollReveal direction="left">
                <span className="eyebrow">Section V</span>
                <h2
                  id="screening-heading"
                  style={{ marginTop: '0.4rem', marginBottom: '1rem' }}
                >
                  Carrier screening is the single most important step.
                </h2>
                <p style={{ lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Thalassemia major occurs only when both parents are carriers.
                  A simple, inexpensive blood test — <strong>HbA2 quantification
                  with a complete blood count</strong> — tells a young adult whether they carry the gene.
                  When two carriers know in advance, they can make informed choices and access
                  prenatal counselling before having children.
                </p>
                <p style={{ lineHeight: 1.7 }}>
                  Over the last 20 years, TWA has facilitated <strong>over
                  100 prenatal diagnoses</strong> through an MoU with Mediscan Systems,
                  helping prevent affected births in families who already have one child
                  with thalassemia major. Carrier screening drives have been conducted
                  in colleges, workplaces, and high-prevalence districts like Sitteri in Dharmapuri.
                </p>

                <div
                  style={{
                    display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap',
                  }}
                >
                  <Link href="/get-involved" className="btn btn-primary btn-lg">
                    Get screened <Icon name="arrow-right" size={16} />
                  </Link>
                  <Link href="/contact" className="btn btn-outline btn-lg">
                    Talk to our counsellors
                  </Link>
                </div>
              </ScrollReveal>

              {/* right: key facts */}
              <ScrollReveal direction="right" delay={150}>
                <div className="card card-flat" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="icon-tile"><Icon name="microscope" size={22} /></span>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--color-text)' }}>One simple blood test</div>
                      <div style={{ color: 'var(--color-text-subtle)', fontSize: '0.85rem' }}>HbA2 quantification + CBC</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="icon-tile accent"><Icon name="shield" size={22} /></span>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--color-text)' }}>Screening prevents new cases</div>
                      <div style={{ color: 'var(--color-text-subtle)', fontSize: '0.85rem' }}>100+ prenatal diagnoses facilitated by TWA</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="icon-tile neutral"><Icon name="users" size={22} /></span>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--color-text)' }}>Both partners must be tested</div>
                      <div style={{ color: 'var(--color-text-subtle)', fontSize: '0.85rem' }}>Risk only exists if both carry the gene</div>
                    </div>
                  </div>

                  <hr style={{ border: 0, borderTop: '1px solid var(--color-border)' }} />

                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-subtle)', lineHeight: 1.6, margin: 0 }}>
                    If you are already pregnant and both partners are carriers, prenatal diagnosis
                    through chorion villous sampling (CVS) between 10–13 weeks can determine
                    if the foetus is affected. Contact us for a referral.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="section">
          <div className="container-narrow text-center">
            <ScrollReveal>
              <h2>Looking for help, or want to help?</h2>
              <p className="lead" style={{ margin: '0.75rem auto 1.75rem' }}>
                If you are a patient or a family member, our helpline is open six days a week.
                If you want to support our work, every contribution counts.
              </p>
              <div className="flex" style={{ justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-outline btn-lg">
                  Talk to our counsellors
                </Link>
                <Link href="/donate" className="btn btn-primary btn-lg">
                  Donate to a patient <Icon name="arrow-right" size={16} />
                </Link>
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
