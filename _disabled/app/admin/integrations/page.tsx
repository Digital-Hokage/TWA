import Link from 'next/link'
import { prisma } from '../../lib/db'
import { ORG } from '../../lib/constants'

export const dynamic = 'force-dynamic'

const fmtINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

function maskKey(key: string): string {
  if (key.length <= 12) return key.slice(0, 8) + '****'
  return key.slice(0, 9) + '****' + key.slice(-4)
}

function Section({ title, status, statusColor, children }: {
  title: string; status: string; statusColor: string; children: React.ReactNode
}) {
  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '1.5rem', marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A' }}>{title}</h2>
        <span style={{
          padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700,
          background: statusColor + '22', color: statusColor,
        }}>
          {status}
        </span>
      </div>
      {children}
    </div>
  )
}

const li: React.CSSProperties = { fontSize: '0.875rem', color: '#475569', lineHeight: 1.7 }

export default async function IntegrationsPage() {
  const razorpayKey = process.env.RAZORPAY_KEY_ID ?? ''
  const razorpayConfigured = razorpayKey.startsWith('rzp_') && !razorpayKey.includes('xxxx')
  const razorpayLive = razorpayKey.startsWith('rzp_live_')
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''
  const gaConfigured = gaId.startsWith('G-')

  const [confirmed, totals] = await Promise.all([
    prisma.donation.findMany({ where: { status: 'confirmed' }, orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.donation.aggregate({ where: { status: 'confirmed' }, _sum: { amount: true }, _count: true }),
  ])

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>Integrations</h1>
        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Third-party service status and setup instructions.</p>
      </div>

      {/* Razorpay */}
      <Section
        title="Razorpay"
        status={razorpayConfigured ? (razorpayLive ? 'Live mode' : 'Test mode') : 'Not configured'}
        statusColor={razorpayConfigured ? (razorpayLive ? '#15803D' : '#B45309') : '#B91C1C'}
      >
        {razorpayConfigured ? (
          <>
            <p style={li}>Key ID: <code style={{ background: '#F1F5F9', padding: '0.1rem 0.4rem', borderRadius: 4 }}>{maskKey(razorpayKey)}</code></p>
            {!razorpayLive && (
              <p style={{ ...li, marginTop: '0.5rem' }}>
                <strong>To switch to live keys:</strong> once the NGO account is approved on Razorpay,
                generate live keys under Settings → API Keys, then replace <code>RAZORPAY_KEY_ID</code>,{' '}
                <code>RAZORPAY_KEY_SECRET</code> and <code>NEXT_PUBLIC_RAZORPAY_KEY_ID</code> in the
                environment (locally in <code>.env.local</code>, and on Netlify under Site settings → Environment variables).
              </p>
            )}
          </>
        ) : (
          <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
            <li style={li}>Create an account at <a href="https://razorpay.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0F766E' }}>razorpay.com</a> — apply under the NGO/Section-8 category with TWA&apos;s PAN and registration documents.</li>
            <li style={li}>Get test keys from Settings → API Keys.</li>
            <li style={li}>Set <code>RAZORPAY_KEY_ID</code>, <code>RAZORPAY_KEY_SECRET</code> and <code>NEXT_PUBLIC_RAZORPAY_KEY_ID</code> in <code>.env.local</code> and on Netlify.</li>
            <li style={li}>The &ldquo;Pay Now&rdquo; option on the Donate page activates automatically once the public key is present.</li>
          </ul>
        )}

        <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
            Confirmed donations: {totals._count} · Total {fmtINR(totals._sum.amount ?? 0)}
          </p>
          {confirmed.length === 0 ? (
            <p style={{ fontSize: '0.83rem', color: '#94A3B8' }}>No confirmed payments yet.</p>
          ) : (
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {confirmed.map((d) => (
                <li key={d.id} style={{ fontSize: '0.83rem', color: '#475569' }}>
                  {fmtINR(d.amount)} — {d.name} · {fmtDate(d.createdAt)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      {/* Google Analytics */}
      <Section
        title="Google Analytics 4"
        status={gaConfigured ? 'Configured' : 'Not configured'}
        statusColor={gaConfigured ? '#15803D' : '#B91C1C'}
      >
        {gaConfigured ? (
          <>
            <p style={li}>Measurement ID: <code style={{ background: '#F1F5F9', padding: '0.1rem 0.4rem', borderRadius: 4 }}>{gaId}</code></p>
            <p style={{ ...li, marginTop: '0.5rem' }}>
              View traffic at <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0F766E' }}>analytics.google.com</a>.
              Tracked events: donation_initiated, donation_completed, volunteer_signup, contact_form, blood_donor_cta.
            </p>
            <p style={{ ...li, marginTop: '0.5rem', color: '#92400E' }}>Note: real-time data appears in GA within 24–48 hours of first deploy.</p>
          </>
        ) : (
          <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
            <li style={li}>Go to <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0F766E' }}>analytics.google.com</a> and create a GA4 property for the site.</li>
            <li style={li}>Admin → Data Streams → Add stream → Web → enter the site URL.</li>
            <li style={li}>Copy the Measurement ID (starts with <code>G-</code>).</li>
            <li style={li}>Set <code>NEXT_PUBLIC_GA_MEASUREMENT_ID</code> in <code>.env.local</code> and on Netlify, then redeploy.</li>
          </ul>
        )}
      </Section>

      {/* Email */}
      <Section title="Transactional Email" status="Not configured" statusColor="#64748B">
        <p style={li}>
          Server-side email (Nodemailer / Resend) — coming in the next phase. Today, forms save to the
          database and open the visitor&apos;s email app as a fallback. When ready, add a Resend or SendGrid
          API key and wire automatic 80G receipts + admin notifications into the three form API routes.
        </p>
      </Section>

      {/* Domain */}
      <Section title="Custom Domain" status={ORG.url.includes('netlify.app') ? 'Staging' : 'Custom domain'} statusColor={ORG.url.includes('netlify.app') ? '#B45309' : '#15803D'}>
        <p style={li}>Current live URL: <a href={ORG.url} target="_blank" rel="noopener noreferrer" style={{ color: '#0F766E' }}>{ORG.url}</a></p>
        {ORG.url.includes('netlify.app') && (
          <p style={{ ...li, marginTop: '0.5rem' }}>
            <strong>Reminder:</strong> update <code>ORG.url</code> in <code>app/lib/constants.ts</code> when{' '}
            <code>twachennai.org</code> goes live — the sitemap, Open Graph tags and structured data all derive from it.
          </p>
        )}
      </Section>

      <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
        Related: <Link href="/admin/log" style={{ color: '#0F766E' }}>Activity Log</Link> ·{' '}
        <Link href="/admin/donations" style={{ color: '#0F766E' }}>All Donations</Link>
      </p>
    </div>
  )
}
