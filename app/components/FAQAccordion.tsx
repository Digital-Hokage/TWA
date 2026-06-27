'use client'

import { useState } from 'react'
import Icon from './Icon'

type Item = { q: string; a: string }

export default function FAQAccordion({ items, title = 'Frequently asked questions' }: { items: Item[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section bg-subtle" aria-labelledby="faq-heading">
      <div className="container-narrow">
        <div className="section-header">
          <span className="eyebrow eyebrow--muted">FAQ</span>
          <h2 id="faq-heading">{title}</h2>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <li
                key={it.q}
                style={{
                  background: '#fff',
                  border: `1px solid ${isOpen ? 'rgba(76,122,76,0.25)' : 'var(--color-border)'}`,
                  borderLeft: `3px solid ${isOpen ? 'var(--color-primary)' : 'transparent'}`,
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'border-color .2s ease, box-shadow .2s ease',
                  boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.125rem 1.375rem',
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    fontWeight: 600,
                    fontSize: '0.975rem',
                    color: isOpen ? 'var(--color-primary)' : 'var(--color-text)',
                    transition: 'color .15s ease',
                    lineHeight: 1.4,
                  }}
                >
                  <span>{it.q}</span>
                  <span
                    style={{
                      flexShrink: 0,
                      display: 'inline-flex',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-text-subtle)',
                    }}
                  >
                    <Icon name="chevron-down" size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0.875rem 1.375rem 1.375rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.75,
                      fontSize: '0.96rem',
                      borderTop: '1px solid var(--color-border)',
                    }}
                  >
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
