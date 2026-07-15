'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { tableStyles as s, PageHeader } from '../ui'

type Row = {
  id: string; publication: string; date: string; year: number
  headline: string; excerpt: string | null; relevance: string | null
  url: string | null; byDrRevathi: boolean; featured: boolean
  sortOrder: number; createdAt: string
}

type Draft = { publication: string; date: string; headline: string; excerpt: string; url: string }
const EMPTY: Draft = { publication: '', date: '', headline: '', excerpt: '', url: '' }

export default function MediaManager({ rows }: { rows: Row[] }) {
  const router = useRouter()
  const [busy, setBusy] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<Draft>(EMPTY)
  const [error, setError] = useState('')

  function openAdd() {
    setEditingId(null)
    setDraft(EMPTY)
    setFormOpen(true)
    setError('')
  }

  function openEdit(row: Row) {
    setEditingId(row.id)
    setDraft({
      publication: row.publication,
      date: row.date,
      headline: row.headline,
      excerpt: row.excerpt ?? '',
      url: row.url ?? '',
    })
    setFormOpen(true)
    setError('')
  }

  async function submitForm(e: React.FormEvent) {
    e.preventDefault()
    setBusy('form')
    setError('')
    try {
      const res = editingId
        ? await fetch(`/api/admin/media/${editingId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(draft),
          })
        : await fetch('/api/admin/media', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(draft),
          })
      const json = await res.json()
      if (!json?.ok) {
        setError(json?.error ?? 'Save failed.')
        return
      }
      setFormOpen(false)
      router.refresh()
    } catch {
      setError('Save failed — check your connection.')
    } finally {
      setBusy(null)
    }
  }

  async function toggleFeatured(row: Row) {
    setBusy(row.id)
    await fetch(`/api/admin/media/${row.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ featured: !row.featured }),
    })
    setBusy(null)
    router.refresh()
  }

  async function move(row: Row, direction: -1 | 1) {
    const sorted = [...rows].sort((a, b) => a.sortOrder - b.sortOrder)
    const idx = sorted.findIndex((r) => r.id === row.id)
    const swap = sorted[idx + direction]
    if (!swap) return
    setBusy(row.id)
    await Promise.all([
      fetch(`/api/admin/media/${row.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sortOrder: swap.sortOrder }),
      }),
      fetch(`/api/admin/media/${swap.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sortOrder: row.sortOrder }),
      }),
    ])
    setBusy(null)
    router.refresh()
  }

  async function remove(row: Row) {
    if (!window.confirm(`Delete "${row.headline}"? This cannot be undone.`)) return
    setBusy(row.id)
    await fetch(`/api/admin/media/${row.id}`, { method: 'DELETE' })
    setBusy(null)
    router.refresh()
  }

  const sorted = [...rows].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <div style={{ maxWidth: 1150, margin: '0 auto' }}>
      <PageHeader
        title="Media Articles"
        subtitle={`${rows.length} articles · ${rows.filter((r) => r.url).length} with live links · changes appear on /media within a minute`}
      >
        <button style={s.btnPrimary} onClick={openAdd}>+ Add Article</button>
      </PageHeader>

      {formOpen && (
        <form
          onSubmit={submitForm}
          style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '1.25rem', marginBottom: '1.25rem' }}
        >
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            {editingId ? 'Edit article' : 'Add article'}
          </h2>
          {error && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#B91C1C', borderRadius: 8, padding: '0.6rem 0.9rem', fontSize: '0.85rem', marginBottom: '0.9rem' }}>
              {error}
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
              Publication *
              <input required style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem' }} value={draft.publication}
                onChange={(e) => setDraft({ ...draft, publication: e.target.value })} />
            </label>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
              Date * <span style={{ fontWeight: 400 }}>(e.g. 12 May 2025)</span>
              <input required style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem' }} value={draft.date}
                onChange={(e) => setDraft({ ...draft, date: e.target.value })} />
            </label>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
              URL <span style={{ fontWeight: 400 }}>(leave blank if not yet available)</span>
              <input style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem' }} value={draft.url} type="url" placeholder="https://…"
                onChange={(e) => setDraft({ ...draft, url: e.target.value })} />
            </label>
          </div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.75rem' }}>
            Headline *
            <input required style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem' }} value={draft.headline}
              onChange={(e) => setDraft({ ...draft, headline: e.target.value })} />
          </label>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '1rem' }}>
            Excerpt
            <textarea style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem', minHeight: 80, resize: 'vertical' }} value={draft.excerpt}
              onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })} />
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="submit" style={s.btnPrimary} disabled={busy === 'form'}>
              {busy === 'form' ? 'Saving…' : editingId ? 'Save changes' : 'Add article'}
            </button>
            <button type="button" style={s.btn} onClick={() => setFormOpen(false)}>Cancel</button>
          </div>
        </form>
      )}

      <div style={s.wrapper}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Order</th><th style={s.th}>Publication</th><th style={s.th}>Date</th>
              <th style={s.th}>Headline</th><th style={s.th}>URL</th><th style={s.th}>Featured</th><th style={s.th} />
            </tr>
          </thead>
          <tbody>
            {sorted.map((r, i) => (
              <tr key={r.id} style={{ opacity: busy === r.id ? 0.5 : 1 }}>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>
                  <button style={{ ...s.btn, padding: '0.15rem 0.5rem', marginRight: 4, opacity: i === 0 ? 0.3 : 1 }}
                    disabled={i === 0 || busy === r.id} onClick={() => move(r, -1)} aria-label="Move up">↑</button>
                  <button style={{ ...s.btn, padding: '0.15rem 0.5rem', opacity: i === sorted.length - 1 ? 0.3 : 1 }}
                    disabled={i === sorted.length - 1 || busy === r.id} onClick={() => move(r, 1)} aria-label="Move down">↓</button>
                </td>
                <td style={{ ...s.td, fontWeight: 600, whiteSpace: 'nowrap' }}>{r.publication}</td>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>{r.date}</td>
                <td style={{ ...s.td, maxWidth: 320 }}>{r.headline}</td>
                <td style={s.td}>
                  {r.url ? (
                    <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: '#0F766E', fontWeight: 600, fontSize: '0.8rem' }}>Live ↗</a>
                  ) : (
                    <span style={{
                      display: 'inline-block', padding: '0.15rem 0.5rem', borderRadius: 999,
                      background: '#FEF3C7', color: '#92400E', fontSize: '0.7rem', fontWeight: 700,
                    }}>
                      Link coming
                    </span>
                  )}
                </td>
                <td style={s.td}>
                  <input
                    type="checkbox"
                    checked={r.featured}
                    disabled={busy === r.id}
                    onChange={() => toggleFeatured(r)}
                    aria-label={`Toggle featured for ${r.headline}`}
                    style={{ width: 16, height: 16, cursor: 'pointer' }}
                  />
                </td>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>
                  <button style={{ ...s.btn, padding: '0.3rem 0.6rem', fontSize: '0.78rem', marginRight: 4 }} onClick={() => openEdit(r)}>Edit</button>
                  <button style={s.btnDanger} disabled={busy === r.id} onClick={() => remove(r)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
