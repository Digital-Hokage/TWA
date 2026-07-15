'use client'

/** Shared client-side helpers for the admin tables. */

export const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  // donations
  pending:   { bg: '#FEF3C7', text: '#92400E' },
  confirmed: { bg: '#DCFCE7', text: '#14532D' },
  failed:    { bg: '#FEE2E2', text: '#7F1D1D' },
  // volunteers
  new:       { bg: '#DBEAFE', text: '#1E3A8A' },
  contacted: { bg: '#FEF3C7', text: '#92400E' },
  onboarded: { bg: '#DCFCE7', text: '#14532D' },
  declined:  { bg: '#F1F5F9', text: '#475569' },
  // messages
  unread:    { bg: '#FEE2E2', text: '#7F1D1D' },
  read:      { bg: '#F1F5F9', text: '#475569' },
  replied:   { bg: '#DCFCE7', text: '#14532D' },
}

export function StatusBadge({ status }: { status: string }) {
  const c = BADGE_COLORS[status] ?? { bg: '#F1F5F9', text: '#475569' }
  return (
    <span style={{
      display: 'inline-block', padding: '0.18rem 0.6rem', borderRadius: 999,
      background: c.bg, color: c.text, fontSize: '0.72rem', fontWeight: 700,
      textTransform: 'capitalize', whiteSpace: 'nowrap',
    }}>
      {status}
    </span>
  )
}

export function exportCsv(filename: string, headers: string[], rows: (string | number | null | undefined)[][]) {
  const escape = (v: string | number | null | undefined) => {
    const s = v === null || v === undefined ? '' : String(v)
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
  }
  const csv = [headers.map(escape).join(','), ...rows.map((r) => r.map(escape).join(','))].join('\n')
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function formatDate(iso: string | Date): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export const tableStyles = {
  wrapper: { background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflowX: 'auto' } as React.CSSProperties,
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' } as React.CSSProperties,
  th: { textAlign: 'left', padding: '0.7rem 0.9rem', color: '#475569', fontWeight: 600, background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', whiteSpace: 'nowrap' } as React.CSSProperties,
  td: { padding: '0.7rem 0.9rem', color: '#334155', borderBottom: '1px solid #F1F5F9', verticalAlign: 'top' } as React.CSSProperties,
  input: { padding: '0.5rem 0.75rem', border: '1px solid #CBD5E1', borderRadius: 8, fontSize: '0.875rem', width: '100%', maxWidth: 320 } as React.CSSProperties,
  select: { padding: '0.3rem 0.5rem', border: '1px solid #CBD5E1', borderRadius: 6, fontSize: '0.8rem', background: '#fff', cursor: 'pointer' } as React.CSSProperties,
  btn: { padding: '0.5rem 0.9rem', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', border: '1px solid #CBD5E1', background: '#fff', color: '#1E293B' } as React.CSSProperties,
  btnDanger: { padding: '0.3rem 0.6rem', borderRadius: 6, fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', border: '1px solid #FCA5A5', background: '#FEF2F2', color: '#B91C1C' } as React.CSSProperties,
  btnPrimary: { padding: '0.5rem 0.9rem', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', border: 'none', background: '#0F172A', color: '#fff' } as React.CSSProperties,
}

export function PageHeader({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>{title}</h1>
        {subtitle && <p style={{ color: '#64748B', fontSize: '0.9rem' }}>{subtitle}</p>}
      </div>
      {children && <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>{children}</div>}
    </div>
  )
}
