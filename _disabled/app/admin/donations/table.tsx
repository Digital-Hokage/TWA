'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { StatusBadge, exportCsv, formatDate, tableStyles as s, PageHeader } from '../ui'

type Row = {
  id: string; name: string; email: string; phone: string | null
  amount: number; pan: string | null; message: string | null
  status: string; razorpayId: string | null; createdAt: string
}

const STATUSES = ['pending', 'confirmed', 'failed']
const fmtINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

export default function DonationsTable({ rows }: { rows: Row[] }) {
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
    await fetch(`/api/admin/donations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    setBusy(null)
    router.refresh()
  }

  async function remove(id: string, name: string) {
    if (!window.confirm(`Delete the donation pledge from ${name}? This cannot be undone.`)) return
    setBusy(id)
    await fetch(`/api/admin/donations/${id}`, { method: 'DELETE' })
    setBusy(null)
    router.refresh()
  }

  function downloadCsv() {
    exportCsv(
      `twa-donations-${new Date().toISOString().slice(0, 10)}.csv`,
      ['Name', 'Email', 'Phone', 'Amount', 'PAN', 'Message', 'Status', 'Razorpay ID', 'Date'],
      rows.map((r) => [r.name, r.email, r.phone, r.amount, r.pan, r.message, r.status, r.razorpayId, formatDate(r.createdAt)]),
    )
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <PageHeader title="Donations" subtitle={`${rows.length} pledge${rows.length === 1 ? '' : 's'} recorded`}>
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
              <th style={s.th}>Amount</th><th style={s.th}>PAN</th><th style={s.th}>Message</th>
              <th style={s.th}>Status</th><th style={s.th}>Razorpay ID</th><th style={s.th}>Date</th><th style={s.th} />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td style={{ ...s.td, color: '#94A3B8', padding: '1.5rem' }} colSpan={10}>
                {rows.length === 0 ? 'No donation pledges yet.' : 'No matches for your search.'}
              </td></tr>
            )}
            {filtered.map((r) => (
              <tr key={r.id} style={{ opacity: busy === r.id ? 0.5 : 1 }}>
                <td style={{ ...s.td, fontWeight: 600, whiteSpace: 'nowrap' }}>{r.name}</td>
                <td style={s.td}><a href={`mailto:${r.email}`} style={{ color: '#0F766E' }}>{r.email}</a></td>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>{r.phone ?? '—'}</td>
                <td style={{ ...s.td, fontWeight: 700, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{fmtINR(r.amount)}</td>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>{r.pan ?? '—'}</td>
                <td style={{ ...s.td, maxWidth: 220 }}>{r.message ?? '—'}</td>
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
                <td style={{ ...s.td, fontSize: '0.75rem', whiteSpace: 'nowrap' }}>{r.razorpayId ?? '—'}</td>
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
