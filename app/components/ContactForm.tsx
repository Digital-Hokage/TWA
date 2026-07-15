'use client'

import { useState } from 'react'
import Icon from './Icon'
import { trackEvent } from '../lib/gtag'
import { submitForm } from '../lib/web3forms'
import { CONTACT } from '../lib/constants'

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setError(false)
    trackEvent('contact_form', 'engagement')

    try {
      // Delivered to the NGO inbox via Web3Forms (no backend needed on static hosting).
      const res = await submitForm({
        subject: 'Contact Message — TWA Chennai',
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject_line: data.subject,
        message: data.message,
      })
      if (!res.success) throw new Error(res.message || 'Submission failed')
      setSubmitted(true)
      setData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <h2 style={{ marginBottom: '0.25rem' }}>Send us a message</h2>
      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
        For donations, volunteering or media queries.
      </p>

      {submitted && (
        <div className="form-message success" role="status">
          Thank you — your message has been sent. We&apos;ll get back to you soon. You can also
          reach us any time at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </div>
      )}

      {error && (
        <div className="form-message error" role="status">
          Sorry, something went wrong sending your message. Please email us directly at{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </div>
      )}

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
      <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={sending}>
        {sending ? 'Sending…' : <>Send message <Icon name="arrow-right" size={16} /></>}
      </button>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', marginTop: '0.6rem', textAlign: 'center' }}>
        Your message is sent securely to {CONTACT.email}. We never share your details.
      </p>
    </form>
  )
}
