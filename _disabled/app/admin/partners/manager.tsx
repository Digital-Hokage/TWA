'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { tableStyles as s, PageHeader } from '../ui'

type Row = {
  id: string; name: string; type: string; description: string
  initials: string; logoPath: string | null; sortOrder: number; visible: boolean
}

type Draft = { name: string; type: string; description: string; initials: string; logoPath: string }
const EMPTY: Draft = { name: '', type: '', description: '', initials: '', logoPath: '' }

export default function PartnersManager({ rows }: { rows: Row[] }) {
  const router = useRouter()
  const [busy, setBusy] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<Draft>(EMPTY)
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  function openAdd() {
    setEditingId(null); setDraft(EMPTY); setFormOpen(true); setError('')
  }

  function openEdit(row: Row) {
    setEditingId(row.id)
    setDraft({ name: row.name, type: row.type, description: row.description, initials: row.initials, logoPath: row.logoPath ?? '' })
    setFormOpen(true); setError('')
  }

  async function uploadLogo(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError('')
    try {
      const fd = new FormData()
      fd.append('files', file)
      fd.append('dir', 'partners')
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const json = await res.json()
      if (!json?.ok || !json.uploaded?.[0]) throw new Error(json?.error ?? 'Upload failed.')
      setDraft((d) => ({ ...d, logoPath: json.uploaded[0].path }))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logo upload failed.')
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  async function submitForm(e: React.FormEvent) {
    e.preventDefault()
    setBusy('form'); setError('')
    try {
      const res = editingId
        ? await fetch(`/api/admin/partners/${editingId}`, {
            method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(draft),
          })
        : await fetch('/api/admin/partners', {
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
    await fetch(`/api/admin/partners/${row.id}`, {
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
      fetch(`/api/admin/partners/${row.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sortOrder: swap.sortOrder }),
      }),
      fetch(`/api/admin/partners/${swap.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sortOrder: row.sortOrder }),
      }),
    ])
    setBusy(null)
    router.refresh()
  }

  async function remove(row: Row) {
    if (!window.confirm(`Delete partner "${row.name}"? This cannot be undone.`)) return
    setBusy(row.id)
    await fetch(`/api/admin/partners/${row.id}`, { method: 'DELETE' })
    setBusy(null)
    router.refresh()
  }

  const sorted = [...rows].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <PageHeader
        title="Partners"
        subtitle={`${rows.length} partners · ${rows.filter((r) => r.visible).length} visible on the public site`}
      >
        <button style={s.btnPrimary} onClick={openAdd}>+ Add Partner</button>
      </PageHeader>

      {formOpen && (
        <form
          onSubmit={submitForm}
          style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: '1.25rem', marginBottom: '1.25rem' }}
        >
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            {editingId ? 'Edit partner' : 'Add partner'}
          </h2>
          {error && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#B91C1C', borderRadius: 8, padding: '0.6rem 0.9rem', fontSize: '0.85rem', marginBottom: '0.9rem' }}>
              {error}
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
              Name *
              <input required style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem' }} value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            </label>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
              Type * <span style={{ fontWeight: 400 }}>(e.g. Hospital Partner, Corporate Donor)</span>
              <input required style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem' }} value={draft.type}
                onChange={(e) => setDraft({ ...draft, type: e.target.value })} />
            </label>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
              Initials <span style={{ fontWeight: 400 }}>(shown when no logo, max 3)</span>
              <input style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem' }} value={draft.initials} maxLength={3}
                onChange={(e) => setDraft({ ...draft, initials: e.target.value.toUpperCase() })} />
            </label>
          </div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginBottom: '0.75rem' }}>
            Description *
            <textarea required style={{ ...s.input, maxWidth: 'none', marginTop: '0.25rem', minHeight: 70, resize: 'vertical' }} value={draft.description}
              onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>
              Logo
              <input
                ref={fileRef}
                type="file"
                accept=".png,.jpg,.jpeg,.webp,.svg"
                onChange={uploadLogo}
                disabled={uploading}
                style={{ display: 'block', marginTop: '0.25rem', fontSize: '0.8rem' }}
              />
            </label>
            {uploading && <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Uploading…</span>}
            {draft.logoPath && (
              <span style={{ fontSize: '0.78rem', color: '#0F766E', fontWeight: 600 }}>
                {draft.logoPath}
                <button type="button" onClick={() => setDraft((d) => ({ ...d, logoPath: '' }))}
                  style={{ marginLeft: 8, background: 'none', border: 'none', color: '#B91C1C', cursor: 'pointer', fontSize: '0.78rem' }}>
                  remove
                </button>
              </span>
            )}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="submit" style={s.btnPrimary} disabled={busy === 'form' || uploading}>
              {busy === 'form' ? 'Saving…' : editingId ? 'Save changes' : 'Add partner'}
            </button>
            <button type="button" style={s.btn} onClick={() => setFormOpen(false)}>Cancel</button>
          </div>
        </form>
      )}

      <div style={s.wrapper}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Order</th><th style={s.th}>Logo</th><th style={s.th}>Name</th>
              <th style={s.th}>Type</th><th style={s.th}>Description</th>
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
                <td style={s.td}>
                  {r.logoPath ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={r.logoPath} alt="" width={36} height={36} style={{ objectFit: 'contain', borderRadius: 6, background: '#F8FAFC', border: '1px solid #E2E8F0' }} />
                  ) : (
                    <span style={{
                      display: 'inline-flex', width: 36, height: 36, borderRadius: 6,
                      background: '#0F172A', color: '#fff', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.72rem',
                    }}>
                      {r.initials}
                    </span>
                  )}
                </td>
                <td style={{ ...s.td, fontWeight: 600 }}>{r.name}</td>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>{r.type}</td>
                <td style={{ ...s.td, maxWidth: 300 }}>{r.description}</td>
                <td style={s.td}>
                  <input
                    type="checkbox"
                    checked={r.visible}
                    disabled={busy === r.id}
                    onChange={() => toggleVisible(r)}
                    aria-label={`Toggle visibility for ${r.name}`}
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
