'use client'

import { useState } from 'react'
import Icon from './Icon'

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || 'Not provided'}`,
      '',
      `Subject: ${data.subject}`,
      '',
      'Message:',
      data.message,
      '',
      '---',
      'Sent via TWA Chennai website contact form.',
    ].join('\n')

    window.location.href =
      `mailto:twachennai@gmail.com?subject=${encodeURIComponent('Contact: ' + data.subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    setData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <h2 style={{ marginBottom: '0.25rem' }}>Send us a message</h2>
      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
        For donations, volunteering or media queries.
      </p>

      {submitted && (
        <div className="form-message success" role="status">
          Your email client should open with a pre-filled message — just click Send. If it
          didn&apos;t open, email us directly at{' '}
          <a href="mailto:twachennai@gmail.com">twachennai@gmail.com</a>.
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
      <button type="submit" className="btn btn-primary btn-block btn-lg">
        Send message <Icon name="arrow-right" size={16} />
      </button>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', marginTop: '0.6rem', textAlign: 'center' }}>
        Clicking Send opens your email app with a pre-filled message to twachennai@gmail.com.
      </p>
    </form>
  )
}
