'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { StatusBadge, exportCsv, formatDate, tableStyles as s, PageHeader } from '../ui'

type Row = {
  id: string; name: string; email: string; phone: string | null
  availability: string | null; message: string | null
  status: string; createdAt: string
}

const STATUSES = ['new', 'contacted', 'onboarded', 'declined']

export default function VolunteersTable({ rows }: { rows: Row[] }) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [busy, setBusy] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((r) => r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q))
  }, [rows, query])

  async function updateStatus(id: string, status: string) {
    setBusy(id)
    await fetch(`/api/admin/volunteers/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    setBusy(null)
    router.refresh()
  }

  async function remove(id: string, name: string) {
    if (!window.confirm(`Delete the volunteer application from ${name}? This cannot be undone.`)) return
    setBusy(id)
    await fetch(`/api/admin/volunteers/${id}`, { method: 'DELETE' })
    setBusy(null)
    router.refresh()
  }

  function downloadCsv() {
    exportCsv(
      `twa-volunteers-${new Date().toISOString().slice(0, 10)}.csv`,
      ['Name', 'Email', 'Phone', 'Availability', 'Message', 'Status', 'Date'],
      rows.map((r) => [r.name, r.email, r.phone, r.availability, r.message, r.status, formatDate(r.createdAt)]),
    )
  }

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <PageHeader title="Volunteers" subtitle={`${rows.length} application${rows.length === 1 ? '' : 's'} received`}>
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
              <th style={s.th}>Availability</th><th style={s.th}>Message</th>
              <th style={s.th}>Status</th><th style={s.th}>Date</th><th style={s.th} />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td style={{ ...s.td, color: '#94A3B8', padding: '1.5rem' }} colSpan={8}>
                {rows.length === 0 ? 'No volunteer applications yet.' : 'No matches for your search.'}
              </td></tr>
            )}
            {filtered.map((r) => (
              <tr key={r.id} style={{ opacity: busy === r.id ? 0.5 : 1 }}>
                <td style={{ ...s.td, fontWeight: 600, whiteSpace: 'nowrap' }}>{r.name}</td>
                <td style={s.td}><a href={`mailto:${r.email}`} style={{ color: '#0F766E' }}>{r.email}</a></td>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>{r.phone ?? '—'}</td>
                <td style={{ ...s.td, textTransform: 'capitalize' }}>{r.availability ?? '—'}</td>
                <td style={{ ...s.td, maxWidth: 260, whiteSpace: 'pre-wrap' }}>{r.message ?? '—'}</td>
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
                  <button style={s.btnDanger} disabled={busy === r.id} onClick={() => remove(r.id, r.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
