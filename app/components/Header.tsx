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
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(76, 122, 76, 0.12)',
        boxShadow: scrolled ? '0 2px 24px rgba(15,26,16,0.06)' : 'none',
        transition: 'box-shadow .25s ease',
      }}
    >
      <div className="container flex-between" style={{ minHeight: 64, padding: '0 1.5rem' }}>
        {/* Logo */}
        <Link href="/" aria-label="Thalassemia Welfare Association Chennai — Home" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }}>
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className="nav-link"
                style={{
                  padding: '0.5rem 0.7rem',
                  fontWeight: active ? 500 : 400,
                  fontSize: '0.875rem',
                  color: active ? 'var(--color-primary)' : 'var(--color-ink-muted)',
                  textDecoration: 'none',
                  transition: 'color .15s ease',
                  letterSpacing: '-0.005em',
                }}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/donate"
            className="btn btn-primary"
            style={{
              marginLeft: '0.75rem', fontWeight: 500, fontSize: '0.875rem',
              padding: '0.5rem 1.25rem', minHeight: 0,
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
            padding: '0.5rem', color: 'var(--color-ink)',
            display: 'none',
          }}
        >
          <Icon name={open ? 'x' : 'menu'} size={22} />
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
        <nav aria-label="Mobile" style={{ padding: '0.25rem 1.25rem 1.25rem' }}>
          {NAV.map((item, i) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                style={{
                  display: 'block',
                  padding: '1rem 0.25rem',
                  borderBottom: i < NAV.length - 1 ? '1px solid rgba(76,122,76,0.1)' : undefined,
                  fontWeight: active ? 500 : 400,
                  fontSize: '0.95rem',
                  color: active ? 'var(--color-primary)' : 'var(--color-ink-muted)',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            )
          })}
          <Link href="/donate" className="btn btn-primary btn-block" style={{ marginTop: '1rem' }}>
            Donate
          </Link>
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 920px) {
          :global(.desktop-nav) { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
        :global(.nav-link:hover) {
          color: var(--color-primary) !important;
          text-decoration: none !important;
        }
      `}</style>
    </header>
  )
}
