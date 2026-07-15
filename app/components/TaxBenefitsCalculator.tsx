'use client'

import { useMemo, useState } from 'react'
import { TAX_BRACKETS } from '../lib/constants'

const PRESETS = [2500, 8500, 25000, 100000]
const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

export default function TaxBenefitsCalculator() {
  const [amount, setAmount] = useState<number>(8500)
  const [rate, setRate] = useState<number>(0.30)

  const { deduction, effectiveCost } = useMemo(() => {
    // Section 80G: 50% deduction for donations to registered trusts without qualifying limit.
    const deduction = amount * 0.5 * rate
    return { deduction, effectiveCost: amount - deduction }
  }, [amount, rate])

  return (
    <section className="section" aria-labelledby="tax-heading">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Tax benefits</span>
          <h2 id="tax-heading">Donate ₹10,000. Save up to ₹1,500 in tax.</h2>
          <p className="lead" style={{ margin: '0.75rem auto 0' }}>
            Donations to TWA Chennai qualify for a 50% deduction under Section 80G of the
            Income Tax Act, 1961. An instant 80G receipt is emailed after every donation.
          </p>
        </div>

        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div className="card">
            <div className="field">
              <label htmlFor="amt">Donation amount</label>
              <div className="flex" style={{ flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.5rem' }}>
                {PRESETS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setAmount(p)}
                    className="btn btn-sm"
                    style={
                      amount === p
                        ? { background: 'var(--color-primary)', color: '#fff' }
                        : { background: 'var(--color-primary-soft)', color: 'var(--color-primary)' }
                    }
                  >
                    {formatINR(p)}
                  </button>
                ))}
              </div>
              <input
                id="amt"
                type="number"
                min={100}
                step={100}
                value={amount}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
                className="input"
                inputMode="numeric"
              />
              <span className="hint">Enter any amount. Tax-deductible up to applicable limits.</span>
            </div>

            <div className="field">
              <label htmlFor="rate">Your income tax slab</label>
              <select
                id="rate"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="select"
              >
                {TAX_BRACKETS.map((b) => (
                  <option key={b.rate} value={b.rate}>{b.label} slab</option>
                ))}
              </select>
              <span className="hint">Use your applicable marginal tax rate.</span>
            </div>
          </div>

          <div className="card" style={{ background: '#fff', borderColor: 'rgba(76,122,76,0.2)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Your tax saving</h3>
            <dl style={{ display: 'grid', gridTemplateColumns: '1fr auto', rowGap: '0.65rem', columnGap: '1rem', alignItems: 'baseline' }}>
              <dt style={{ color: 'var(--color-ink-muted)' }}>Donation</dt>
              <dd style={{ fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>{formatINR(amount)}</dd>

              <dt style={{ color: 'var(--color-ink-muted)' }}>Deductible (50%)</dt>
              <dd style={{ fontVariantNumeric: 'tabular-nums' }}>{formatINR(amount * 0.5)}</dd>

              <dt style={{ color: 'var(--color-ink-muted)' }}>Tax saved</dt>
              <dd style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--color-primary)', fontWeight: 600 }}>
                {formatINR(deduction)}
              </dd>

              <dt style={{ fontWeight: 600, color: 'var(--color-ink)' }}>Effective cost to you</dt>
              <dd style={{
                fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.75rem',
                color: 'var(--color-primary)', fontVariantNumeric: 'tabular-nums',
              }}>
                {formatINR(effectiveCost)}
              </dd>
            </dl>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginTop: '1rem' }}>
              Illustrative calculation. Your actual tax benefit depends on your assessed income.
              Consult your tax advisor for advice specific to your situation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
