'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { StatusBadge, exportCsv, formatDate, tableStyles as s, PageHeader } from '../ui'

type Row = {
  id: string; name: string; email: string; phone: string | null
  subject: string | null; message: string; status: string; createdAt: string
}

const STATUSES = ['unread', 'read', 'replied']

export default function MessagesTable({ rows }: { rows: Row[] }) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [busy, setBusy] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((r) => r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q))
  }, [rows, query])

  async function updateStatus(id: string, status: string) {
    setBusy(id)
    await fetch(`/api/admin/messages/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    setBusy(null)
    router.refresh()
  }

  async function remove(id: string, name: string) {
    if (!window.confirm(`Delete the message from ${name}? This cannot be undone.`)) return
    setBusy(id)
    await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' })
    setBusy(null)
    router.refresh()
  }

  function downloadCsv() {
    exportCsv(
      `twa-messages-${new Date().toISOString().slice(0, 10)}.csv`,
      ['Name', 'Email', 'Phone', 'Subject', 'Message', 'Status', 'Date'],
      rows.map((r) => [r.name, r.email, r.phone, r.subject, r.message, r.status, formatDate(r.createdAt)]),
    )
  }

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <PageHeader title="Messages" subtitle={`${rows.length} message${rows.length === 1 ? '' : 's'} received`}>
        <button style={s.btnPrimary} onClick={downloadCsv}>Export CSV</button>
      </PageHeader>

      <input
        style={{ ...s.input, marginBottom: '1rem' }}
        placeholder="Search by name or email…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div style={s.wrapper}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Name</th><th style={s.th}>Email</th><th style={s.th}>Phone</th>
              <th style={s.th}>Subject</th><th style={s.th}>Message</th>
              <th style={s.th}>Status</th><th style={s.th}>Date</th><th style={s.th} />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td style={{ ...s.td, color: '#94A3B8', padding: '1.5rem' }} colSpan={8}>
                {rows.length === 0 ? 'No messages yet.' : 'No matches for your search.'}
              </td></tr>
            )}
            {filtered.map((r) => {
              const isExpanded = expanded === r.id
              const truncated = r.message.length > 90 && !isExpanded
              return (
                <tr key={r.id} style={{ opacity: busy === r.id ? 0.5 : 1 }}>
                  <td style={{ ...s.td, fontWeight: 600, whiteSpace: 'nowrap' }}>{r.name}</td>
                  <td style={s.td}><a href={`mailto:${r.email}`} style={{ color: '#0F766E' }}>{r.email}</a></td>
                  <td style={{ ...s.td, whiteSpace: 'nowrap' }}>{r.phone ?? '—'}</td>
                  <td style={{ ...s.td, maxWidth: 160 }}>{r.subject ?? '—'}</td>
                  <td style={{ ...s.td, maxWidth: 280 }}>
                    <span style={{ whiteSpace: 'pre-wrap' }}>
                      {truncated ? r.message.slice(0, 90) + '…' : r.message}
                    </span>
                    {r.message.length > 90 && (
                      <button
                        onClick={() => setExpanded(isExpanded ? null : r.id)}
                        style={{
                          display: 'block', marginTop: '0.3rem', background: 'none', border: 'none',
                          color: '#0F766E', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: 0,
                        }}
                      >
                        {isExpanded ? 'Show less' : 'Show more'}
                      </button>
                    )}
                  </td>
                  <td style={s.td}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <StatusBadge status={r.status} />
                      <select
                        style={s.select}
                        value={r.status}
                        disabled={busy === r.id}
                        onChange={(e) => updateStatus(r.id, e.target.value)}
                        aria-label={`Change status for ${r.name}`}
                      >
                        {STATUSES.map((st) => <option key={st} value={st}>{st}</option>)}
                      </select>
                    </div>
                  </td>
                  <td style={{ ...s.td, whiteSpace: 'nowrap' }}>{formatDate(r.createdAt)}</td>
                  <td style={s.td}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <a
                        href={`mailto:${r.email}?subject=${encodeURIComponent('Re: ' + (r.subject ?? 'Your message to TWA Chennai'))}`}
                        style={{ ...s.btn, padding: '0.3rem 0.6rem', fontSize: '0.78rem', textDecoration: 'none', textAlign: 'center' }}
                        onClick={() => { if (r.status === 'unread') updateStatus(r.id, 'replied') }}
                      >
                        Reply
                      </a>
                      <button style={s.btnDanger} disabled={busy === r.id} onClick={() => remove(r.id, r.name)}>Delete</button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
