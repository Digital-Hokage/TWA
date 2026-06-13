import Link from 'next/link'

export default function SubmissionsPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>Form Submissions</h1>
      <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '2rem' }}>
        All contact, volunteer, and donation submissions are delivered via email.
      </p>

      {/* How it works */}
      <div
        style={{
          background: '#F0FDF4', border: '1px solid #86EFAC',
          borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem',
        }}
      >
        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#14532D', marginBottom: '0.75rem' }}>
          How form submissions work
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#166534', lineHeight: 1.65, marginBottom: '0.75rem' }}>
          When a visitor fills in any form on the website and clicks Submit, their browser opens
          their default email app with a pre-filled message addressed to{' '}
          <strong>twachennai@gmail.com</strong>. The visitor then sends that email — no server
          required. All submissions arrive in the TWA Gmail inbox.
        </p>
        <p style={{ fontSize: '0.875rem', color: '#166534', lineHeight: 1.6 }}>
          <strong>Duplicate detection:</strong> In Gmail, use the search{' '}
          <code style={{ background: '#BBF7D0', padding: '0.1rem 0.3rem', borderRadius: 4 }}>
            from:&lt;email&gt; subject:Contact
          </code>{' '}
          to find repeated submissions from the same address. Gmail also threads conversations from
          the same sender automatically.
        </p>
      </div>

      {/* Access Gmail */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {[
          {
            label: 'Contact submissions',
            subject: 'Contact:',
            href: 'https://mail.google.com/mail/u/0/#search/to%3Atwachennai%40gmail.com+subject%3AContact',
          },
          {
            label: 'Volunteer applications',
            subject: 'Volunteer Application',
            href: 'https://mail.google.com/mail/u/0/#search/to%3Atwachennai%40gmail.com+subject%3AVolunteer',
          },
          {
            label: 'Donation pledges',
            subject: 'Donation Pledge',
            href: 'https://mail.google.com/mail/u/0/#search/to%3Atwachennai%40gmail.com+subject%3ADonation+Pledge',
          },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: '#fff', border: '1px solid #E2E8F0',
              borderRadius: 10, padding: '1.1rem',
              textDecoration: 'none',
            }}
          >
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.3rem' }}>{item.label}</div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '0.75rem' }}>
              Subject starts with: <em>{item.subject}</em>
            </div>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.8rem', fontWeight: 600,
                color: '#0F766E',
              }}
            >
              Open in Gmail ↗
            </span>
          </Link>
        ))}
      </div>

      {/* Tips */}
      <div
        style={{
          background: '#fff', border: '1px solid #E2E8F0',
          borderRadius: 12, padding: '1.5rem',
        }}
      >
        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
          Managing submissions in Gmail
        </h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none' }}>
          {[
            'Create a Gmail label "Website Submissions" and filter emails with subject lines starting with "Contact:", "Volunteer Application", or "Donation Pledge"',
            'Use Gmail\'s duplicate grouping (same sender + same subject) to spot repeated submissions',
            'For donation pledges, reply with payment link and 80G form within 2 working days',
            'For volunteer applications, reply with an induction schedule and next steps',
            'Archive handled submissions to keep the inbox clean',
          ].map((tip) => (
            <li key={tip} style={{ fontSize: '0.875rem', color: '#475569', display: 'flex', gap: '0.5rem', lineHeight: 1.6 }}>
              <span style={{ color: '#0F766E', flexShrink: 0, fontWeight: 700 }}>→</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
