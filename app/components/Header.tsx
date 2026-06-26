'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV } from '../lib/constants'
import Icon from './Icon'
import Logo from './Logo'

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
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.90)',
        backdropFilter: 'saturate(200%) blur(16px)',
        WebkitBackdropFilter: 'saturate(200%) blur(16px)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)' : 'none',
        transition: 'box-shadow .25s ease, background .25s ease',
      }}
    >
      <div className="container flex-between" style={{ padding: '0.85rem 1.5rem' }}>
        {/* Logo */}
        <Link href="/" aria-label="Thalassemia Welfare Association Chennai — Home" style={{ textDecoration: 'none' }}>
          <Logo />
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
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius)',
                  fontWeight: active ? 600 : 500,
                  fontSize: '0.9rem',
                  color: active ? 'var(--color-primary)' : 'var(--color-text)',
                  textDecoration: 'none',
                  background: active ? 'var(--color-primary-soft)' : 'transparent',
                  transition: 'background .15s ease, color .15s ease',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/donate"
            className="btn btn-sm"
            style={{
              marginLeft: '0.5rem',
              background: 'linear-gradient(135deg, #C41E1E 0%, #7F1313 100%)',
              color: '#fff',
              boxShadow: '0 4px 14px rgba(185,28,28,0.28)',
              border: '1px solid transparent',
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
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
