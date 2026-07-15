'use client'

import { useState } from 'react'
import Icon from './Icon'
import { trackEvent } from '../lib/gtag'
import { CONTACT } from '../lib/constants'

const BANK = {
  accountName: 'THALASSEMIA WELFARE ASSOCIATION',
  accountNumber: '174401000000643',
  ifsc: 'IOBA0001744',
  bank: 'Indian Overseas Bank',
}

function Row({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      trackEvent('bank_detail_copy', 'engagement', label)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable — user can still select the text manually */
    }
  }

  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '1rem', padding: '0.75rem 0',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase',
          letterSpacing: '0.06em', color: 'var(--color-text-subtle)', marginBottom: '0.15rem',
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: 'var(--font-mono, monospace)', fontSize: '0.98rem', fontWeight: 600,
          color: 'var(--color-text)', wordBreak: 'break-word',
        }}>
          {value}
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        className="btn btn-outline btn-sm"
        aria-label={`Copy ${label}`}
        style={{ flexShrink: 0 }}
      >
        {copied ? <><Icon name="check" size={14} /> Copied</> : 'Copy'}
      </button>
    </div>
  )
}

export default function BankTransfer() {
  return (
    <div
      className="card"
      style={{
        maxWidth: 640, margin: '0 auto',
        borderLeft: '4px solid var(--color-primary)',
      }}
    >
      <h3 style={{ marginBottom: '0.25rem' }}>Direct bank transfer (IMPS / NEFT / RTGS)</h3>
      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
        Prefer to transfer directly from your bank? Use the details below.
      </p>

      <div>
        <Row label="Account name" value={BANK.accountName} />
        <Row label="Account number" value={BANK.accountNumber} />
        <Row label="IFSC code" value={BANK.ifsc} />
        <Row label="Bank" value={BANK.bank} />
      </div>

      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-subtle)', marginTop: '1rem' }}>
        After transferring, please email your name, PAN and the transfer reference to{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> so we can send your
        80G tax-exemption receipt.
      </p>
    </div>
  )
}
