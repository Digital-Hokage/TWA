import Link from 'next/link'

const STATS = [
  { label: 'Media articles',      value: '19', href: '/admin/media',       color: '#B91C1C' },
  { label: 'Live URLs',           value: '14', href: '/admin/media',       color: '#0F766E' },
  { label: 'Form submissions',    value: 'Via email', href: '/admin/submissions', color: '#1D4ED8' },
  { label: 'Pages live',          value: '8',  href: '/',                  color: '#92400E' },
]

const LINKS = [
  { label: 'View website',        href: '/',                  external: true  },
  { label: 'Manage media articles', href: '/admin/media',     external: false },
  { label: 'View form submissions', href: '/admin/submissions', external: false },
  { label: 'Upload resources',    href: '/admin/resources',   external: false },
  { label: 'Collection report',   href: '/admin/collect',     external: false },
  { label: 'Check media page',    href: '/media',             external: true  },
]

export default function DashboardPage() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>Dashboard</h1>
        <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
          TWA Chennai admin overview. Manage content, monitor submissions, and access site resources.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {STATS.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            style={{
              display: 'block',
              background: '#fff',
              border: '1px solid #E2E8F0',
              borderRadius: 12,
              padding: '1.25rem',
              textDecoration: 'none',
              transition: 'box-shadow .15s',
            }}
          >
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.35rem' }}>{s.label}</div>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div
        style={{
          background: '#fff', border: '1px solid #E2E8F0',
          borderRadius: 12, padding: '1.5rem', marginBottom: '2rem',
        }}
      >
        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.6rem' }}>
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              style={{
                display: 'block',
                padding: '0.65rem 0.9rem',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: 8,
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#1E293B',
                textDecoration: 'none',
              }}
            >
              {l.label} {l.external ? '↗' : '→'}
            </Link>
          ))}
        </div>
      </div>

      {/* Info panels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        <InfoCard
          title="SEO Status"
          color="#0F766E"
          items={[
            'sitemap.ts is configured — check /sitemap.xml',
            'All pages have unique <title> and description meta',
            'Connect Google Search Console for live indexing data',
            'Google Analytics: add GA4 measurement ID to .env',
          ]}
        />
        <InfoCard
          title="Content to complete"
          color="#B91C1C"
          items={[
            'Replace logo placeholder with twa-logo.svg in /public',
            'Fill in contact details in lib/constants.ts',
            'Add registration numbers (80G, 12A, Society Reg)',
            'Add partner logos to /public/logos/',
            'Add real photos (see Collection Report)',
          ]}
        />
        <InfoCard
          title="Forms"
          color="#1D4ED8"
          items={[
            'Contact form → mailto:twachennai@gmail.com',
            'Volunteer form → mailto:twachennai@gmail.com',
            'Donate form → mailto:twachennai@gmail.com',
            'No backend required — submissions arrive as emails',
            'Duplicate detection: check Gmail for repeated senders',
          ]}
        />
      </div>
    </div>
  )
}

function InfoCard({ title, color, items }: { title: string; color: string; items: string[] }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E2E8F0',
        borderRadius: 12,
        padding: '1.25rem',
      }}
    >
      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color, marginBottom: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        {title}
      </h3>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {items.map((item) => (
          <li key={item} style={{ fontSize: '0.85rem', color: '#475569', display: 'flex', gap: '0.5rem', lineHeight: 1.5 }}>
            <span style={{ color, flexShrink: 0 }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
