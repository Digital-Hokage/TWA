import Link from 'next/link'
import { prisma } from '../../lib/db'

export const dynamic = 'force-dynamic'

const BADGE: Record<string, { bg: string; text: string }> = {
  pending:   { bg: '#FEF3C7', text: '#92400E' },
  confirmed: { bg: '#DCFCE7', text: '#14532D' },
  failed:    { bg: '#FEE2E2', text: '#7F1D1D' },
  new:       { bg: '#DBEAFE', text: '#1E3A8A' },
  contacted: { bg: '#FEF3C7', text: '#92400E' },
  onboarded: { bg: '#DCFCE7', text: '#14532D' },
  declined:  { bg: '#F1F5F9', text: '#475569' },
  unread:    { bg: '#FEE2E2', text: '#7F1D1D' },
  read:      { bg: '#F1F5F9', text: '#475569' },
  replied:   { bg: '#DCFCE7', text: '#14532D' },
}

function Badge({ status }: { status: string }) {
  const c = BADGE[status] ?? { bg: '#F1F5F9', text: '#475569' }
  return (
    <span style={{
      display: 'inline-block', padding: '0.15rem 0.55rem', borderRadius: 999,
      background: c.bg, color: c.text, fontSize: '0.7rem', fontWeight: 700, textTransform: 'capitalize',
    }}>
      {status}
    </span>
  )
}

const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
const fmtINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

const QUICK_ACTIONS = [
  { label: 'Edit Site Stats',      href: '/admin/stats' },
  { label: 'Manage Media',         href: '/admin/media' },
  { label: 'Manage Partners',      href: '/admin/partners' },
  { label: 'Manage FAQs',          href: '/admin/faqs' },
  { label: 'View All Donations',   href: '/admin/donations' },
  { label: 'View All Volunteers',  href: '/admin/volunteers' },
  { label: 'View All Messages',    href: '/admin/messages' },
  { label: 'Activity Log',         href: '/admin/log' },
]

export default async function DashboardPage() {
  const [
    donationCount, volunteerCount, messageCount,
    donationsPending, messagesUnread,
    recentDonations, recentVolunteers, recentMessages,
  ] = await Promise.all([
    prisma.donation.count(),
    prisma.volunteer.count(),
    prisma.contact.count(),
    prisma.donation.count({ where: { status: 'pending' } }),
    prisma.contact.count({ where: { status: 'unread' } }),
    prisma.donation.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.volunteer.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.contact.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
  ])

  const statCards = [
    { label: 'Donations pledged', value: donationCount, href: '/admin/donations', accent: '#4C7A4C' },
    { label: 'Volunteer applications', value: volunteerCount, href: '/admin/volunteers', accent: '#1D4ED8' },
    { label: 'Contact messages', value: messageCount, href: '/admin/messages', accent: '#0F766E', badge: messagesUnread },
    { label: 'Unread items', value: donationsPending + messagesUnread, href: '/admin/messages', accent: '#B91C1C' },
  ]

  const card: React.CSSProperties = { background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden' }
  const cardHead: React.CSSProperties = { padding: '0.85rem 1rem', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
  const th: React.CSSProperties = { textAlign: 'left', padding: '0.5rem 1rem', color: '#64748B', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em' }
  const td: React.CSSProperties = { padding: '0.55rem 1rem', color: '#334155', fontSize: '0.83rem', borderTop: '1px solid #F1F5F9' }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>Dashboard</h1>
        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
          Live overview from the database — submissions, content, and activity.
        </p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
        {statCards.map((s) => (
          <Link key={s.label} href={s.href} style={{ ...card, display: 'block', padding: '1.15rem 1.25rem', textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.9rem', fontWeight: 800, color: s.accent, lineHeight: 1 }}>{s.value}</span>
              {s.badge !== undefined && s.badge > 0 && (
                <span style={{
                  padding: '0.12rem 0.5rem', borderRadius: 999, background: '#B91C1C',
                  color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                }}>
                  {s.badge} unread
                </span>
              )}
            </div>
            <div style={{ fontSize: '0.83rem', color: '#64748B', marginTop: '0.35rem' }}>{s.label}</div>
          </Link>
        ))}
      </div>

      {/* Recent activity */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
        <div style={card}>
          <div style={cardHead}>
            <h2 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Recent Donations</h2>
            <Link href="/admin/donations" style={{ fontSize: '0.78rem', color: '#0F766E', fontWeight: 600 }}>View all →</Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>Name</th><th style={th}>Amount</th><th style={th}>Status</th><th style={th}>Date</th></tr></thead>
            <tbody>
              {recentDonations.length === 0 && (
                <tr><td style={{ ...td, color: '#94A3B8' }} colSpan={4}>No donations yet.</td></tr>
              )}
              {recentDonations.map((d) => (
                <tr key={d.id}>
                  <td style={td}>{d.name}</td>
                  <td style={{ ...td, fontVariantNumeric: 'tabular-nums' }}>{fmtINR(d.amount)}</td>
                  <td style={td}><Badge status={d.status} /></td>
                  <td style={{ ...td, whiteSpace: 'nowrap' }}>{fmtDate(d.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={card}>
          <div style={cardHead}>
            <h2 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Recent Volunteers</h2>
            <Link href="/admin/volunteers" style={{ fontSize: '0.78rem', color: '#0F766E', fontWeight: 600 }}>View all →</Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>Name</th><th style={th}>Availability</th><th style={th}>Status</th><th style={th}>Date</th></tr></thead>
            <tbody>
              {recentVolunteers.length === 0 && (
                <tr><td style={{ ...td, color: '#94A3B8' }} colSpan={4}>No applications yet.</td></tr>
              )}
              {recentVolunteers.map((v) => (
                <tr key={v.id}>
                  <td style={td}>{v.name}</td>
                  <td style={{ ...td, textTransform: 'capitalize' }}>{v.availability ?? '—'}</td>
                  <td style={td}><Badge status={v.status} /></td>
                  <td style={{ ...td, whiteSpace: 'nowrap' }}>{fmtDate(v.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={card}>
          <div style={cardHead}>
            <h2 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Recent Messages</h2>
            <Link href="/admin/messages" style={{ fontSize: '0.78rem', color: '#0F766E', fontWeight: 600 }}>View all →</Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>Name</th><th style={th}>Subject</th><th style={th}>Status</th><th style={th}>Date</th></tr></thead>
            <tbody>
              {recentMessages.length === 0 && (
                <tr><td style={{ ...td, color: '#94A3B8' }} colSpan={4}>No messages yet.</td></tr>
              )}
              {recentMessages.map((m) => (
                <tr key={m.id}>
                  <td style={td}>{m.name}</td>
                  <td style={{ ...td, maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.subject ?? '—'}</td>
                  <td style={td}><Badge status={m.status} /></td>
                  <td style={{ ...td, whiteSpace: 'nowrap' }}>{fmtDate(m.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ ...card, padding: '1.25rem' }}>
        <h2 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.9rem' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.6rem' }}>
          {QUICK_ACTIONS.map((a) => (
            <Link
              key={a.href + a.label}
              href={a.href}
              style={{
                display: 'block', padding: '0.6rem 0.85rem',
                background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8,
                fontSize: '0.85rem', fontWeight: 500, color: '#1E293B', textDecoration: 'none',
              }}
            >
              {a.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
