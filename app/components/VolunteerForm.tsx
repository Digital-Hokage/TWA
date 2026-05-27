'use client'

import { useState } from 'react'
import Icon from './Icon'

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
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)
    try {
      const res = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Submission failed.')
      setResult({ type: 'success', text: 'Thank you. A member of our team will reach out within two working days.' })
      setData({ name: '', email: '', phone: '', city: '', role: '', availability: '', message: '' })
    } catch (err) {
      setResult({ type: 'error', text: err instanceof Error ? err.message : 'Submission failed. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{ maxWidth: 720, margin: '0 auto' }}>
      <h2 style={{ marginBottom: '0.25rem' }}>Volunteer with us</h2>
      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        Tell us a little about yourself. We&apos;ll match you with a role that fits your time and skills.
      </p>

      {result && <div className={`form-message ${result.type}`} role="status">{result.text}</div>}

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

      <button type="submit" disabled={submitting} className="btn btn-accent btn-block btn-lg">
        {submitting ? 'Submitting…' : (<>Submit application <Icon name="arrow-right" size={16} /></>)}
      </button>
    </form>
  )
}
