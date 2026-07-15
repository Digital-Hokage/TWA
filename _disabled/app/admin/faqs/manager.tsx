'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { tableStyles as s, PageHeader } from '../ui'

type Row = { id: string; question: string; answer: string; sortOrder: number; visible: boolean }

type Draft = { question: string; answer: string }
const EMPTY: Draft = { question: '', answer: '' }

const truncate = (text: string, n: number) => (text.length > n ? text.slice(0, n) + '…' : text)

export default function FAQManager({ rows }: { rows: Row[] }) {
  const router = useRouter()
  const [busy, setBusy] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<Draft>(EMPTY)
  const [error, setError] = useState('')

  function openAdd() {
    setEditingId(null); setDraft(EMPTY); setFormOpen(true); setError('')
  }

  function openEdit(row: Row) {
    setEditingId(row.id)
    setDraft({ question: row.question, answer: row.answer })
    setFormOpen(true); setError('')
  }

  async function submitForm(e: React.FormEvent) {
    e.preventDefault()
    setBusy('form'); setError('')
    try {
      const res = editingId
        ? await fetch(`/api/admin/faqs/${editingId}`, {
            method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(draft),
          })
        : await fetch('/api/admin/faqs', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(draft),
          })
      const json = await res.json()
      if (!json?.ok) { setError(json?.error ?? 'Save failed.'); return }
      setFormOpen(false)
      router.refresh()
    } catch {
      setError('Save failed — check your connection.')
    } finally {
      setBusy(null)
    }
  }

  async function toggleVisible(row: Row) {
    setBusy(row.id)
    await fetch(`/api/admin/faqs/${row.id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visible: !row.visible }),
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
      fetch(`/api/admin/faqs/${row.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sortOrder: swap.sortOrder }),
      }),
      fetch(`/api/admin/faqs/${swap.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sortOrder: row.sortOrder }),
      }),
    ])
    setBusy(null)
    router.refresh()
  }

  async function remove(row: Row) {
    if (!window.confirm(`Delete this FAQ? "${truncate(row.question, 60)}"`)) return
    setBusy(row.id)
    await fetch(`/api/admin/faqs/${row.id}`, { method: 'DELETE' })
    setBusy(null)
    router.refresh()
  }

  const sorted = [...rows].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <PageHeader
        title="FAQs"
        subtitle={`${rows.length} questions · ${rows.filter((r) => r.visible).length} visible on the homepage`}
      >
        <button style={s.btnPrimary} onClick={openAdd}>+ Add FAQ</button>
      </PageHeader>

      {formOpen && (
        <form
          onSubmit={submitForm}
          style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '1.25rem', marginBottom: '1.25rem' }}
        >
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            {editingId ? 'Edit FAQ' : 'Add FAQ'}
          </h2>
          {error && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#B91C1C', borderRadius: 8, padding: '0.6rem 0.9rem', fontSize: '0.85rem', marginBottom: '0.9rem' }}>
              {error}
            </div>
          )}
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.75rem' }}>
            Question *
            <input required style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem' }} value={draft.question}
              onChange={(e) => setDraft({ ...draft, question: e.target.value })} />
          </label>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '1rem' }}>
            Answer *
            <textarea required style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem', minHeight: 100, resize: 'vertical' }} value={draft.answer}
              onChange={(e) => setDraft({ ...draft, answer: e.target.value })} />
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="submit" style={s.btnPrimary} disabled={busy === 'form'}>
              {busy === 'form' ? 'Saving…' : editingId ? 'Save changes' : 'Add FAQ'}
            </button>
            <button type="button" style={s.btn} onClick={() => setFormOpen(false)}>Cancel</button>
          </div>
        </form>
      )}

      <div style={s.wrapper}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Order</th><th style={s.th}>Question</th><th style={s.th}>Answer</th>
              <th style={s.th}>Visible</th><th style={s.th} />
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
                <td style={{ ...s.td, maxWidth: 260, fontWeight: 600 }}>{truncate(r.question, 80)}</td>
                <td style={{ ...s.td, maxWidth: 340 }}>{truncate(r.answer, 120)}</td>
                <td style={s.td}>
                  <input
                    type="checkbox"
                    checked={r.visible}
                    disabled={busy === r.id}
                    onChange={() => toggleVisible(r)}
                    aria-label={`Toggle visibility for FAQ`}
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
