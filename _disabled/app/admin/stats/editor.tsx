'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { tableStyles as s, PageHeader, formatDate } from '../ui'

type Stat = { key: string; value: string; label: string; updatedAt: string }

export default function StatsEditor({ stats }: { stats: Stat[] }) {
  const router = useRouter()
  const [drafts, setDrafts] = useState<Record<string, string>>(
    Object.fromEntries(stats.map((st) => [st.key, st.value])),
  )
  const [busy, setBusy] = useState<string | null>(null)
  const [toast, setToast] = useState<{ key: string; ok: boolean } | null>(null)

  async function save(key: string) {
    setBusy(key)
    setToast(null)
    try {
      const res = await fetch('/api/admin/stats', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value: drafts[key] }),
      })
      const json = await res.json()
      setToast({ key, ok: Boolean(json?.ok) })
      if (json?.ok) router.refresh()
    } catch {
      setToast({ key, ok: false })
    } finally {
      setBusy(null)
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <PageHeader
        title="Site Stats"
        subtitle="Numbers shown across the public site. Changes go live within a minute — no code edits needed."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
        {stats.map((st) => {
          const dirty = drafts[st.key] !== st.value
          return (
            <div key={st.key} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                {st.label}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem', lineHeight: 1 }}>
                {st.value}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  style={{ ...s.input, maxWidth: 'none', flex: 1 }}
                  value={drafts[st.key] ?? ''}
                  onChange={(e) => setDrafts((d) => ({ ...d, [st.key]: e.target.value }))}
                  aria-label={`New value for ${st.label}`}
                />
                <button
                  style={{ ...s.btnPrimary, opacity: dirty ? 1 : 0.4 }}
                  disabled={!dirty || busy === st.key}
                  onClick={() => save(st.key)}
                >
                  {busy === st.key ? 'Saving…' : 'Save'}
                </button>
              </div>
              {toast?.key === st.key && (
                <div style={{
                  marginTop: '0.6rem', fontSize: '0.78rem', fontWeight: 600,
                  color: toast.ok ? '#14532D' : '#B91C1C',
                }}>
                  {toast.ok ? '✓ Saved — live within a minute' : '✗ Save failed, try again'}
                </div>
              )}
              <div style={{ marginTop: '0.5rem', fontSize: '0.72rem', color: '#94A3B8' }}>
                Last updated {formatDate(st.updatedAt)} · key: <code>{st.key}</code>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
