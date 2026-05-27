'use client'

import { useState } from 'react'
import Icon from './Icon'

type Item = { q: string; a: string }

export default function FAQAccordion({ items, title = 'Frequently asked questions' }: { items: Item[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container-narrow">
        <div className="section-header">
          <span className="eyebrow eyebrow--muted">FAQ</span>
          <h2 id="faq-heading">{title}</h2>
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <li key={it.q} className="card card-flat" style={{ padding: 0, overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '1rem 1.25rem',
                    background: 'transparent', border: 0, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '1rem', fontWeight: 600, color: 'var(--color-text)',
                  }}
                >
                  <span>{it.q}</span>
                  <Icon name="chevron-down" size={18}
                    className={isOpen ? 'rotate-180' : ''}
                  />
                </button>
                {isOpen && (
                  <div style={{ padding: '0 1.25rem 1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                    {it.a}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
