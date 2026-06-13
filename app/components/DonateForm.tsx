'use client'

import { useMemo, useState } from 'react'
import { DONATION_PRESETS } from '../lib/constants'
import Icon from './Icon'

type Frequency = 'one-time' | 'monthly'

const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

export default function DonateForm() {
  const [frequency, setFrequency] = useState<Frequency>('monthly')
  const [amount, setAmount] = useState<number>(8500)
  const [donor, setDonor] = useState({ name: '', email: '', phone: '', pan: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const impact = useMemo(() => {
    if (amount >= 102000) return 'Funds one patient for a full year.'
    if (amount >= 25500)  return 'Funds three patients for one month.'
    if (amount >= 8500)   return 'Funds one patient for one month.'
    if (amount >= 2500)   return 'Provides one month of medicines for one patient.'
    if (amount > 0)       return 'Every contribution adds up — thank you.'
    return ''
  }, [amount])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const freqLabel = frequency === 'monthly' ? 'Monthly recurring' : 'One-time'
    const body = [
      'DONATION PLEDGE',
      '===============',
      `Donor Name: ${donor.name}`,
      `Email:      ${donor.email}`,
      `Phone:      ${donor.phone || 'Not provided'}`,
      `PAN:        ${donor.pan || 'Not provided'}`,
      '',
      `Donation Type: ${freqLabel}`,
      `Amount:        ₹${amount.toLocaleString('en-IN')}`,
      '',
      'Message:',
      donor.message || 'None provided',
      '',
      '---',
      'Submitted via TWA Chennai website donation form.',
      'Please send payment instructions and 80G receipt details.',
    ].join('\n')

    const subject = `Donation Pledge — ${donor.name} — ₹${amount.toLocaleString('en-IN')} ${freqLabel}`
    window.location.href =
      `mailto:twachennai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    setDonor({ name: '', email: '', phone: '', pan: '', message: '' })
  }

  return (
    <form onSubmit={onSubmit} aria-labelledby="donate-form-heading" className="card" style={{ maxWidth: 640, margin: '0 auto' }}>
      <h2 id="donate-form-heading" style={{ marginBottom: '0.25rem' }}>Make a donation</h2>
      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        Submit your pledge and our team will follow up with payment instructions and an 80G receipt.
      </p>

      {submitted && (
        <div className="form-message success" role="status">
          Your email client should open with a pre-filled pledge — just click Send. If it
          didn&apos;t open, email us at{' '}
          <a href="mailto:twachennai@gmail.com">twachennai@gmail.com</a> with your donation amount.
        </div>
      )}

      {/* Frequency */}
      <div role="group" aria-label="Donation frequency"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.25rem' }}>
        {(['monthly', 'one-time'] as Frequency[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            aria-pressed={frequency === f}
            className={frequency === f ? 'btn btn-primary' : 'btn btn-outline'}
            style={{ width: '100%' }}
          >
            {f === 'monthly' ? 'Monthly' : 'One-time'}
          </button>
        ))}
      </div>

      {/* Presets */}
      <fieldset style={{ border: 0, padding: 0, marginBottom: '1.25rem' }}>
        <legend className="sr-only">Suggested amount</legend>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          {DONATION_PRESETS.map((p) => (
            <button
              key={p.amount}
              type="button"
              onClick={() => setAmount(p.amount)}
              aria-pressed={amount === p.amount}
              className={amount === p.amount ? 'card' : 'card card-flat'}
              style={{
                textAlign: 'left', padding: '0.9rem 1rem', cursor: 'pointer',
                borderColor: amount === p.amount ? 'var(--color-primary)' : 'var(--color-border)',
                background: amount === p.amount ? 'var(--color-primary-soft)' : '#fff',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>{formatINR(p.amount)}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-subtle)' }}>{p.label}</div>
            </button>
          ))}
        </div>
      </fieldset>

      {/* Custom amount */}
      <div className="field">
        <label htmlFor="amount">Or enter an amount (INR)</label>
        <input
          id="amount" name="amount" type="number" min={100} step={100}
          value={amount} onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
          inputMode="numeric" className="input" required
        />
        {impact && <span className="hint">{impact}</span>}
      </div>

      {/* Donor details */}
      <div className="grid grid-2" style={{ gap: '0.75rem' }}>
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required minLength={2} maxLength={80}
            value={donor.name} onChange={(e) => setDonor({ ...donor, name: e.target.value })}
            autoComplete="name" className="input" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required
            value={donor.email} onChange={(e) => setDonor({ ...donor, email: e.target.value })}
            autoComplete="email" className="input" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" inputMode="tel"
            value={donor.phone} onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
            autoComplete="tel" className="input" />
        </div>
        <div className="field">
          <label htmlFor="pan">PAN <span className="text-subtle" style={{ fontWeight: 400 }}>(for 80G receipt)</span></label>
          <input id="pan" name="pan" type="text" maxLength={10}
            value={donor.pan} onChange={(e) => setDonor({ ...donor, pan: e.target.value.toUpperCase() })}
            pattern="^[A-Z]{5}[0-9]{4}[A-Z]$" placeholder="ABCDE1234F" className="input" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" maxLength={500}
          value={donor.message} onChange={(e) => setDonor({ ...donor, message: e.target.value })}
          className="textarea" placeholder="Dedicate this gift, ask a question, or leave a note." />
      </div>

      <button type="submit" disabled={amount < 100} className="btn btn-primary btn-block btn-lg">
        Pledge {formatINR(amount)}{frequency === 'monthly' ? ' / month' : ''} <Icon name="arrow-right" size={16} />
      </button>

      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginTop: '0.8rem', textAlign: 'center' }}>
        Clicking Pledge opens your email app. Our team will follow up with a secure payment link and 80G receipt.
        By donating you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  )
}
