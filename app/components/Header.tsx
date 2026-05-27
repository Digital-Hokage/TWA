'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV, ORG } from '../lib/constants'
import Icon from './Icon'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'saturate(180%) blur(10px)',
        WebkitBackdropFilter: 'saturate(180%) blur(10px)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'box-shadow .2s ease',
      }}
    >
      <div className="container flex-between" style={{ padding: '0.85rem 1.5rem' }}>
        {/* Logo */}
        <Link href="/" aria-label={`${ORG.name} – Home`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <span
            aria-hidden="true"
            style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'var(--color-primary)',
              color: '#fff',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.02em',
            }}
          >
            TWA
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontWeight: 700, color: 'var(--color-text)', fontSize: '0.98rem' }}>Thalassemia Welfare Association</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-text-subtle)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Chennai · Est. {ORG.foundedYear}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                style={{
                  padding: '0.55rem 0.9rem',
                  borderRadius: 'var(--radius)',
                  fontWeight: 500,
                  fontSize: '0.92rem',
                  color: active ? 'var(--color-primary)' : 'var(--color-text)',
                  textDecoration: 'none',
                  background: active ? 'var(--color-primary-soft)' : 'transparent',
                }}
              >
                {item.label}
              </Link>
            )
          })}
          <Link href="/donate" className="btn btn-primary btn-sm" style={{ marginLeft: '0.5rem' }}>
            Donate
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="mobile-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          style={{
            background: 'transparent', border: 0, cursor: 'pointer',
            padding: '0.5rem', color: 'var(--color-text)',
            display: 'none',
          }}
        >
          <Icon name={open ? 'x' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className="mobile-nav"
        hidden={!open}
        style={{
          display: open ? 'block' : 'none',
          borderTop: '1px solid var(--color-border)',
          background: '#fff',
        }}
      >
        <nav aria-label="Mobile" style={{ padding: '0.5rem 1rem 1rem' }}>
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                style={{
                  display: 'block',
                  padding: '0.85rem 0.75rem',
                  borderRadius: 'var(--radius)',
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: active ? 'var(--color-primary)' : 'var(--color-text)',
                  textDecoration: 'none',
                  background: active ? 'var(--color-primary-soft)' : 'transparent',
                }}
              >
                {item.label}
              </Link>
            )
          })}
          <Link href="/donate" className="btn btn-primary btn-block" style={{ marginTop: '0.5rem' }}>
            Donate
          </Link>
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 920px) {
          :global(.desktop-nav) { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  )
}
