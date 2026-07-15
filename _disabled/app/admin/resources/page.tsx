'use client'

import { useRef, useState } from 'react'

type UploadedFile = { name: string; path: string; size: string }

const EXISTING_RESOURCES: UploadedFile[] = [
  // Add any pre-existing files here — e.g.:
  // { name: 'annual-report-2024.pdf', path: '/resources/annual-report-2024.pdf', size: '2.1 MB' },
]

export default function ResourcesPage() {
  const inputRef                  = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage]     = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [files, setFiles]         = useState<UploadedFile[]>(EXISTING_RESOURCES)

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files
    if (!selected || !selected.length) return
    setUploading(true)
    setMessage(null)

    const formData = new FormData()
    for (const file of Array.from(selected)) {
      formData.append('files', file)
    }

    try {
      const res  = await fetch('/api/admin/upload', { method: 'POST', body: formData })
      const json = await res.json()
      if (!json.ok) throw new Error(json.error ?? 'Upload failed.')
      setFiles((prev) => [...json.uploaded, ...prev])
      setMessage({ type: 'success', text: `${json.uploaded.length} file(s) uploaded successfully.` })
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Upload failed.' })
    } finally {
      setUploading(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>Resources</h1>
      <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '2rem' }}>
        Upload disclosed documents — annual reports, 80G certificates, registration certificates, press kits.
        Files are placed in <code>/public/resources/</code> and are publicly accessible via URL.
      </p>

      {/* Upload zone */}
      <div
        style={{
          background: '#fff', border: '2px dashed #CBD5E1',
          borderRadius: 12, padding: '2.5rem',
          textAlign: 'center', marginBottom: '1.5rem',
          cursor: 'pointer',
        }}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); e.currentTarget.style.borderColor = '#0F766E' }}
        onDragLeave={(e) => { e.currentTarget.style.borderColor = '#CBD5E1' }}
        onDrop={(e) => {
          e.preventDefault()
          e.currentTarget.style.borderColor = '#CBD5E1'
          if (inputRef.current) {
            const dt = new DataTransfer()
            for (const file of Array.from(e.dataTransfer.files)) dt.items.add(file)
            inputRef.current.files = dt.files
            handleUpload({ target: inputRef.current } as React.ChangeEvent<HTMLInputElement>)
          }
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📁</div>
        <p style={{ fontWeight: 600, color: '#1E293B', marginBottom: '0.25rem' }}>
          {uploading ? 'Uploading…' : 'Click to upload or drag files here'}
        </p>
        <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
          PDF, images, Excel — max 10 MB per file
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg,.webp,.xlsx,.xls,.doc,.docx"
          style={{ display: 'none' }}
          onChange={handleUpload}
          disabled={uploading}
        />
      </div>

      {/* Deployment note */}
      <div
        style={{
          background: '#FEF3C7', border: '1px solid #FCD34D',
          borderRadius: 8, padding: '0.85rem 1rem', marginBottom: '1.5rem',
          fontSize: '0.85rem', color: '#78350F',
        }}
      >
        <strong>Note:</strong> File uploads write to <code>/public/resources/</code> on the server filesystem.
        This works in local development and self-hosted deployments. On Vercel, the filesystem is read-only —
        use <strong>Vercel Blob</strong> or place files in the repo under <code>public/resources/</code> directly.
      </div>

      {message && (
        <div
          style={{
            borderRadius: 8, padding: '0.85rem 1rem', marginBottom: '1.25rem',
            fontSize: '0.875rem',
            background: message.type === 'success' ? '#F0FDF4' : '#FEF2F2',
            border: `1px solid ${message.type === 'success' ? '#86EFAC' : '#FCA5A5'}`,
            color: message.type === 'success' ? '#14532D' : '#7F1D1D',
          }}
        >
          {message.text}
        </div>
      )}

      {/* File list */}
      <div
        style={{
          background: '#fff', border: '1px solid #E2E8F0',
          borderRadius: 12, overflow: 'hidden',
        }}
      >
        <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #F1F5F9' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>
            Uploaded resources ({files.length})
          </h2>
        </div>
        {files.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#94A3B8', fontSize: '0.9rem' }}>
            No files uploaded yet.
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                <th style={{ textAlign: 'left', padding: '0.65rem 1rem', color: '#475569', fontWeight: 600 }}>File name</th>
                <th style={{ textAlign: 'left', padding: '0.65rem 1rem', color: '#475569', fontWeight: 600 }}>Size</th>
                <th style={{ textAlign: 'left', padding: '0.65rem 1rem', color: '#475569', fontWeight: 600 }}>Public URL</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.path} style={{ borderTop: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '0.7rem 1rem', color: '#1E293B' }}>{file.name}</td>
                  <td style={{ padding: '0.7rem 1rem', color: '#64748B' }}>{file.size}</td>
                  <td style={{ padding: '0.7rem 1rem' }}>
                    <a href={file.path} target="_blank" rel="noopener noreferrer"
                      style={{ color: '#0F766E', fontWeight: 600 }}>
                      {file.path} ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
