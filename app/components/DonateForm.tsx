'use client'

import { useMemo, useState } from 'react'
import { DONATION_PRESETS } from '../lib/constants'
import Icon from './Icon'
import { trackEvent } from '../lib/gtag'
import { submitForm } from '../lib/web3forms'

type Frequency = 'one-time' | 'monthly'

const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

// On static hosting there is no server to create or verify Razorpay orders, so the
// old /api/donations/create-order + /api/donations/verify flow cannot run here.
// Instead, set NEXT_PUBLIC_RAZORPAY_PAYMENT_URL to a hosted Razorpay Payment Page /
// Payment Button link (create one in the Razorpay Dashboard → Payment Pages). That
// opens Razorpay's own secure, hosted checkout — no backend required on our side.
// Leave it blank to show the pledge-only flow.
const RAZORPAY_PAYMENT_URL = process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_URL ?? ''
const PAY_NOW_ENABLED = /^https?:\/\//.test(RAZORPAY_PAYMENT_URL)

export default function DonateForm() {
  const [frequency, setFrequency] = useState<Frequency>('monthly')
  const [amount, setAmount] = useState<number>(8500)
  const [donor, setDonor] = useState({ name: '', email: '', phone: '', pan: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const impact = useMemo(() => {
    if (amount >= 102000) return 'Funds one patient for a full year.'
    if (amount >= 25500)  return 'Funds three patients for one month.'
    if (amount >= 8500)   return 'Funds one patient for one month.'
    if (amount >= 2500)   return 'Provides one month of medicines for one patient.'
    if (amount > 0)       return 'Every contribution adds up — thank you.'
    return ''
  }, [amount])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setError(false)
    trackEvent('donation_initiated', 'engagement', undefined, amount)

    const freqLabel = frequency === 'monthly' ? 'Monthly recurring' : 'One-time'
    try {
      // Delivered to the NGO inbox via Web3Forms (no backend needed on static hosting).
      const res = await submitForm({
        subject: 'New Donation Pledge — TWA Chennai',
        name: donor.name,
        email: donor.email,
        phone: donor.phone,
        amount: `₹${amount.toLocaleString('en-IN')}`,
        frequency: freqLabel,
        pan: donor.pan,
        message: donor.message,
      })
      if (!res.success) throw new Error(res.message || 'Submission failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} aria-labelledby="donate-form-heading" className="card" style={{ maxWidth: 640, margin: '0 auto' }}>
      <h2 id="donate-form-heading" style={{ marginBottom: '0.25rem' }}>Make a donation</h2>
      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        {PAY_NOW_ENABLED
          ? 'Pay securely online through Razorpay, or submit a pledge and our team will follow up with payment instructions and an 80G receipt.'
          : 'Submit your pledge and our team will follow up with payment instructions and an 80G receipt.'}
      </p>

      {submitted && (
        <div className="form-message success" role="status">
          Thank you — your pledge has been received. Our team will email you a secure payment link
          and your 80G receipt details. Questions? Email{' '}
          <a href="mailto:twachennai@gmail.com">twachennai@gmail.com</a>.
        </div>
      )}

      {error && (
        <div className="form-message error" role="status">
          Sorry, something went wrong submitting your pledge. Please email us at{' '}
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
                borderLeft: `3px solid ${amount === p.amount ? 'var(--color-primary)' : 'transparent'}`,
                background: amount === p.amount
                  ? 'linear-gradient(135deg, rgba(76,122,76,0.07) 0%, rgba(76,122,76,0.03) 100%)'
                  : '#fff',
                boxShadow: amount === p.amount ? 'var(--shadow-sm)' : 'none',
                transition: 'border-color .15s ease, background .15s ease, box-shadow .15s ease',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '1rem', color: amount === p.amount ? 'var(--color-primary)' : 'var(--color-text)' }}>{formatINR(p.amount)}</div>
              <div style={{ fontSize: '0.82rem', color: amount === p.amount ? 'rgba(76,122,76,0.65)' : 'var(--color-text-subtle)' }}>{p.label}</div>
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

      {/* Option A — Pay Now via Razorpay's hosted Payment Page (only when configured) */}
      {PAY_NOW_ENABLED && (
        <>
          <a
            href={RAZORPAY_PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('donation_pay_now', 'engagement', undefined, amount)}
            className="btn btn-accent btn-block btn-lg"
          >
            Pay online securely via Razorpay
          </a>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', marginTop: '0.5rem', textAlign: 'center' }}>
            Opens Razorpay&apos;s secure hosted payment page in a new tab. You can enter your amount there.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1.1rem 0' }}>
            <hr style={{ flex: 1, border: 0, borderTop: '1px solid var(--color-border)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', fontWeight: 600 }}>or prefer to pledge</span>
            <hr style={{ flex: 1, border: 0, borderTop: '1px solid var(--color-border)' }} />
          </div>
        </>
      )}

      {/* Option B — Pledge (delivered by email via Web3Forms) */}
      <button type="submit" disabled={amount < 100 || sending} className="btn btn-primary btn-block btn-lg">
        {sending
          ? 'Submitting…'
          : <>Pledge {formatINR(amount)}{frequency === 'monthly' ? ' / month' : ''} <Icon name="arrow-right" size={16} /></>}
      </button>

      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginTop: '0.8rem', textAlign: 'center' }}>
        Submitting your pledge sends your details securely to our team, who will follow up with a
        secure payment link and 80G receipt. By donating you agree to our{' '}
        <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  )
}
