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
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const roleLabel  = ROLES.find((r) => r.value === data.role)?.label  ?? data.role
    const availLabel = AVAILABILITY.find((a) => a.value === data.availability)?.label ?? data.availability

    const body = [
      'VOLUNTEER APPLICATION',
      '=====================',
      `Full Name:    ${data.name}`,
      `Email:        ${data.email}`,
      `Phone:        ${data.phone}`,
      `City:         ${data.city || 'Not provided'}`,
      '',
      `Role:         ${roleLabel}`,
      `Availability: ${availLabel}`,
      '',
      'Additional information:',
      data.message || 'None provided',
      '',
      '---',
      'Submitted via TWA Chennai website volunteer form.',
      'Please respond within two working days.',
    ].join('\n')

    window.location.href =
      `mailto:twachennai@gmail.com?subject=${encodeURIComponent('Volunteer Application — ' + data.name)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    setData({ name: '', email: '', phone: '', city: '', role: '', availability: '', message: '' })
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{ maxWidth: 720, margin: '0 auto' }}>
      <h2 style={{ marginBottom: '0.25rem' }}>Volunteer with us</h2>
      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        Tell us a little about yourself. We&apos;ll match you with a role that fits your time and skills.
      </p>

      {submitted && (
        <div className="form-message success" role="status">
          Your email client should open with a pre-filled application — just click Send. If it
          didn&apos;t open, email us at{' '}
          <a href="mailto:twachennai@gmail.com">twachennai@gmail.com</a>.
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

      <button type="submit" className="btn btn-accent btn-block btn-lg">
        Submit application <Icon name="arrow-right" size={16} />
      </button>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', marginTop: '0.6rem', textAlign: 'center' }}>
        Clicking Submit opens your email app with a pre-filled application to twachennai@gmail.com.
      </p>
    </form>
  )
}
