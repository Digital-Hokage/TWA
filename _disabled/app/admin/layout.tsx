'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

type Counts = { donationsPending: number; volunteersNew: number; messagesUnread: number }

type NavItem = { href: string; label: string; badge?: keyof Counts }
type NavSection = { title: string; items: NavItem[] }

const SECTIONS: NavSection[] = [
  {
    title: 'Overview',
    items: [{ href: '/admin/dashboard', label: 'Dashboard' }],
  },
  {
    title: 'Submissions',
    items: [
      { href: '/admin/donations',  label: 'Donations',  badge: 'donationsPending' },
      { href: '/admin/volunteers', label: 'Volunteers', badge: 'volunteersNew' },
      { href: '/admin/messages',   label: 'Messages',   badge: 'messagesUnread' },
    ],
  },
  {
    title: 'Content',
    items: [
      { href: '/admin/stats',     label: 'Site Stats' },
      { href: '/admin/media',     label: 'Media' },
      { href: '/admin/partners',  label: 'Partners' },
      { href: '/admin/faqs',      label: 'FAQs' },
      { href: '/admin/resources', label: 'Resources' },
    ],
  },
  {
    title: 'Integrations',
    items: [{ href: '/admin/integrations', label: 'Razorpay + Analytics' }],
  },
  {
    title: 'System',
    items: [
      { href: '/admin/log',     label: 'Activity Log' },
      { href: '/admin/collect', label: 'Collection Report' },
    ],
  },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router   = useRouter()
  const [counts, setCounts] = useState<Counts | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const isLogin = pathname === '/admin'

  useEffect(() => {
    if (isLogin) return
    let cancelled = false
    fetch('/api/admin/counts')
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => { if (!cancelled && json?.ok) setCounts(json) })
      .catch(() => {})
    return () => { cancelled = true }
  }, [pathname, isLogin])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  // The login page renders its own full-page layout
  if (isLogin) return <>{children}</>

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  const nav = (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
      {SECTIONS.map((section) => (
        <div key={section.title}>
          <div style={{
            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'rgba(226,232,240,0.4)',
            padding: '0 0.75rem', marginBottom: '0.4rem',
          }}>
            {section.title}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
            {section.items.map((item) => {
              const active = pathname.startsWith(item.href)
              const badgeCount = item.badge && counts ? counts[item.badge] : 0
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.5rem 0.75rem',
                    borderRadius: 8,
                    fontSize: '0.875rem',
                    fontWeight: active ? 600 : 500,
                    color: active ? '#fff' : 'rgba(226,232,240,0.65)',
                    background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                  {badgeCount > 0 && (
                    <span style={{
                      minWidth: 20, height: 20, padding: '0 6px',
                      borderRadius: 999,
                      background: '#B91C1C', color: '#fff',
                      fontSize: '0.7rem', fontWeight: 700,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {badgeCount}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
      <button
        onClick={logout}
        style={{
          margin: '0 0.75rem',
          padding: '0.55rem 0.75rem',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 8,
          color: 'rgba(226,232,240,0.75)',
          fontSize: '0.85rem', fontWeight: 600,
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        Sign out
      </button>
    </nav>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', display: 'flex' }}>
      {/* Desktop sidebar */}
      <aside
        className="admin-sidebar"
        style={{
          width: 232, flexShrink: 0,
          background: '#0F172A',
          padding: '1.25rem 0.75rem',
          position: 'sticky', top: 0, height: '100vh',
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0 0.75rem' }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: 'linear-gradient(135deg, #B91C1C, #7F1313)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '0.72rem', color: '#fff', flexShrink: 0,
          }}>
            TWA
          </div>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>TWA Admin</span>
        </div>
        {nav}
      </aside>

      {/* Mobile top bar + collapsible menu */}
      <div className="admin-mobile-bar" style={{ display: 'none', width: '100%' }}>
        <div style={{
          background: '#0F172A', padding: '0.75rem 1rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, zIndex: 50,
        }}>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>TWA Admin</span>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            style={{
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 6, color: '#fff', padding: '0.35rem 0.75rem',
              fontSize: '0.82rem', cursor: 'pointer',
            }}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: '#0F172A', padding: '0.5rem 0.75rem 1.25rem' }}>
            {nav}
          </div>
        )}
        <main style={{ padding: '1.5rem 1rem' }}>{children}</main>
      </div>

      {/* Desktop content */}
      <main className="admin-desktop-main" style={{ flex: 1, padding: '2rem 1.75rem', minWidth: 0 }}>
        {children}
      </main>

      <style>{`
        @media (max-width: 820px) {
          .admin-sidebar { display: none !important; }
          .admin-desktop-main { display: none !important; }
          .admin-mobile-bar { display: block !important; }
        }
      `}</style>
    </div>
  )
}
