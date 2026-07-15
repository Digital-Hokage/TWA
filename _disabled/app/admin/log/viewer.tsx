'use client'

import { useRouter } from 'next/navigation'
import { tableStyles as s, PageHeader } from '../ui'

type Entry = { id: string; action: string; detail: string | null; createdAt: string }

const fmtDateTime = (iso: string) =>
  new Date(iso).toLocaleString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  })

export default function LogViewer({
  entries, total, page, pageSize, actions, activeAction,
}: {
  entries: Entry[]; total: number; page: number; pageSize: number
  actions: string[]; activeAction: string
}) {
  const router = useRouter()
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  function setFilter(action: string) {
    const params = new URLSearchParams()
    if (action) params.set('action', action)
    router.push(`/admin/log${params.toString() ? '?' + params.toString() : ''}`)
  }

  function goToPage(p: number) {
    const params = new URLSearchParams()
    if (activeAction) params.set('action', activeAction)
    if (p > 1) params.set('page', String(p))
    router.push(`/admin/log${params.toString() ? '?' + params.toString() : ''}`)
  }

  async function clearAll() {
    if (!window.confirm(`Clear all ${total} log entries? This cannot be undone.`)) return
    await fetch('/api/admin/log', { method: 'DELETE' })
    router.refresh()
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <PageHeader title="Activity Log" subtitle={`${total} entr${total === 1 ? 'y' : 'ies'} recorded`}>
        <select
          style={{ ...s.select, padding: '0.5rem 0.75rem' }}
          value={activeAction}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter by action type"
        >
          <option value="">All actions</option>
          {actions.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
        <button style={s.btnDanger} onClick={clearAll}>Clear all logs</button>
      </PageHeader>

      <div style={s.wrapper}>
        <table style={s.table}>
          <thead>
            <tr><th style={s.th}>Action</th><th style={s.th}>Detail</th><th style={s.th}>Timestamp</th></tr>
          </thead>
          <tbody>
            {entries.length === 0 && (
              <tr><td style={{ ...s.td, color: '#94A3B8', padding: '1.5rem' }} colSpan={3}>No log entries.</td></tr>
            )}
            {entries.map((e) => (
              <tr key={e.id}>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>
                  <code style={{ background: '#F1F5F9', padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.78rem' }}>
                    {e.action}
                  </code>
                </td>
                <td style={{ ...s.td, maxWidth: 420 }}>{e.detail ?? '—'}</td>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>{fmtDateTime(e.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '1rem', justifyContent: 'center' }}>
          <button style={{ ...s.btn, opacity: page <= 1 ? 0.4 : 1 }} disabled={page <= 1} onClick={() => goToPage(page - 1)}>
            ← Previous
          </button>
          <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Page {page} of {totalPages}</span>
          <button style={{ ...s.btn, opacity: page >= totalPages ? 0.4 : 1 }} disabled={page >= totalPages} onClick={() => goToPage(page + 1)}>
            Next →
          </button>
        </div>
      )}
    </div>
  )
}
