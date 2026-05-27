'use client'

import { useState } from 'react'
import Icon from './Icon'

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true); setResult(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Could not send your message.')
      setResult({ type: 'success', text: 'Thank you. We have received your message and will respond within two working days.' })
      setData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setResult({ type: 'error', text: err instanceof Error ? err.message : 'Could not send your message. Please try again.' })
    } finally { setSubmitting(false) }
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <h2 style={{ marginBottom: '0.25rem' }}>Send us a message</h2>
      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
        For donations, volunteering or media queries.
      </p>
      {result && <div className={`form-message ${result.type}`} role="status">{result.text}</div>}
      <div className="grid grid-2" style={{ gap: '0.75rem' }}>
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" required minLength={2} className="input"
            value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" type="email" required className="input"
            value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="c-phone">Phone (optional)</label>
          <input id="c-phone" type="tel" className="input"
            value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="c-subject">Subject</label>
          <input id="c-subject" required maxLength={120} className="input"
            value={data.subject} onChange={(e) => setData({ ...data, subject: e.target.value })} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-msg">Message</label>
        <textarea id="c-msg" required minLength={10} maxLength={2000} className="textarea"
          value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} />
      </div>
      <button type="submit" disabled={submitting} className="btn btn-primary btn-block btn-lg">
        {submitting ? 'Sending…' : (<>Send message <Icon name="arrow-right" size={16} /></>)}
      </button>
    </form>
  )
}
