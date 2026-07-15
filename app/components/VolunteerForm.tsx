'use client'

import { useState } from 'react'
import Icon from './Icon'
import { trackEvent } from '../lib/gtag'
import { submitForm } from '../lib/web3forms'
import { CONTACT } from '../lib/constants'

const ROLES = [
  { value: 'blood-drive',       label: 'Blood drive coordinator' },
  { value: 'patient-companion', label: 'Patient companion' },
  { value: 'office-digital',    label: 'Office & digital support' },
  { value: 'fundraising',       label: 'Fundraising & events' },
  { value: 'medical',           label: 'Medical / counselling (licensed)' },
  { value: 'other',             label: 'Something else — tell us' },
] as const

const AVAILABILITY = [
  { value: 'weekdays', label: 'Weekdays' },
  { value: 'weekends', label: 'Weekends' },
  { value: 'evenings', label: 'Evenings' },
  { value: 'flexible', label: 'Flexible' },
] as const

export default function VolunteerForm() {
  const [data, setData] = useState({
    name: '', email: '', phone: '', city: '',
    role: '', availability: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (sending) return
    const roleLabel  = ROLES.find((r) => r.value === data.role)?.label  ?? data.role
    const availLabel = AVAILABILITY.find((a) => a.value === data.availability)?.label ?? data.availability

    setSending(true)
    setError(false)
    trackEvent('volunteer_signup', 'engagement')

    try {
      // Delivered to the NGO inbox via Web3Forms (no backend needed on static hosting).
      const res = await submitForm({
        subject: 'New Volunteer Application — TWA Chennai',
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        role: roleLabel,
        availability: availLabel,
        message: data.message,
      })
      if (!res.success) throw new Error(res.message || 'Submission failed')
      setSubmitted(true)
      setData({ name: '', email: '', phone: '', city: '', role: '', availability: '', message: '' })
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{ maxWidth: 720, margin: '0 auto' }}>
      <h2 style={{ marginBottom: '0.25rem' }}>Volunteer with us</h2>
      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        Tell us a little about yourself. We&apos;ll match you with a role that fits your time and skills.
      </p>

      {submitted && (
        <div className="form-message success" role="status">
          Thank you for applying to volunteer — we&apos;ve received your application and will
          respond within two working days. Questions? Email{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </div>
      )}

      {error && (
        <div className="form-message error" role="status">
          Sorry, something went wrong submitting your application. Please email it to us at{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </div>
      )}

      <div className="grid grid-2" style={{ gap: '0.75rem' }}>
        <div className="field">
          <label htmlFor="v-name">Full name</label>
          <input id="v-name" required minLength={2} maxLength={80}
            value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
            autoComplete="name" className="input" />
        </div>
        <div className="field">
          <label htmlFor="v-email">Email</label>
          <input id="v-email" type="email" required
            value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
            autoComplete="email" className="input" />
        </div>
        <div className="field">
          <label htmlFor="v-phone">Phone</label>
          <input id="v-phone" type="tel" required inputMode="tel"
            value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })}
            autoComplete="tel" className="input" />
        </div>
        <div className="field">
          <label htmlFor="v-city">City</label>
          <input id="v-city" type="text" maxLength={60}
            value={data.city} onChange={(e) => setData({ ...data, city: e.target.value })}
            autoComplete="address-level2" className="input" />
        </div>
        <div className="field">
          <label htmlFor="v-role">Role you&apos;re interested in</label>
          <select id="v-role" required className="select"
            value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })}>
            <option value="">Choose a role…</option>
            {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="v-avail">Availability</label>
          <select id="v-avail" required className="select"
            value={data.availability} onChange={(e) => setData({ ...data, availability: e.target.value })}>
            <option value="">Select…</option>
            {AVAILABILITY.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="v-msg">Anything else we should know?</label>
        <textarea id="v-msg" maxLength={1000} className="textarea"
          value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })}
          placeholder="Skills, languages, prior volunteering, questions for us." />
      </div>

      <button type="submit" className="btn btn-accent btn-block btn-lg" disabled={sending}>
        {sending ? 'Submitting…' : <>Submit application <Icon name="arrow-right" size={16} /></>}
      </button>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', marginTop: '0.6rem', textAlign: 'center' }}>
        Your application is sent securely to {CONTACT.email}. We never share your details.
      </p>
    </form>
  )
}
