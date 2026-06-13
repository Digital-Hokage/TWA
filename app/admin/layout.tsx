'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const NAV = [
  { href: '/admin/dashboard',   label: 'Dashboard' },
  { href: '/admin/media',       label: 'Media Articles' },
  { href: '/admin/submissions', label: 'Form Submissions' },
  { href: '/admin/resources',   label: 'Resources' },
  { href: '/admin/collect',     label: 'Collection Report' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router   = useRouter()

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  // The login page renders its own full-page layout
  if (pathname === '/admin') return <>{children}</>

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <header
        style={{
          background: '#0F172A',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center',
          padding: '0 1.5rem', height: 56,
          position: 'sticky', top: 0, zIndex: 50,
        }}
      >
        <div
          style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #B91C1C, #7F1313)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '0.75rem', color: '#fff',
            marginRight: '0.85rem', flexShrink: 0,
          }}
        >
          TWA
        </div>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginRight: 'auto' }}>
          Admin Portal
        </span>
        <nav style={{ display: 'flex', gap: '0.15rem', marginRight: '1rem' }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '0.4rem 0.75rem',
                borderRadius: 6,
                fontSize: '0.83rem',
                fontWeight: 500,
                color: pathname.startsWith(item.href) ? '#fff' : 'rgba(226,232,240,0.6)',
                background: pathname.startsWith(item.href) ? 'rgba(255,255,255,0.08)' : 'transparent',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={logout}
          style={{
            padding: '0.4rem 0.8rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 6,
            color: 'rgba(226,232,240,0.7)',
            fontSize: '0.82rem',
            cursor: 'pointer',
          }}
        >
          Sign out
        </button>
      </header>

      {/* Mobile nav */}
      <div
        style={{
          display: 'none', // shown via CSS @media below
          background: '#1E293B',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          overflowX: 'auto',
          padding: '0.5rem 1rem',
          gap: '0.25rem',
        }}
        className="admin-mobile-nav"
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              padding: '0.35rem 0.7rem',
              borderRadius: 6,
              fontSize: '0.82rem',
              fontWeight: 500,
              color: pathname.startsWith(item.href) ? '#fff' : 'rgba(226,232,240,0.6)',
              background: pathname.startsWith(item.href) ? 'rgba(255,255,255,0.1)' : 'transparent',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <main style={{ flex: 1, padding: '2rem 1.5rem' }}>
        {children}
      </main>

      <style>{`
        @media (max-width: 768px) {
          .admin-mobile-nav { display: flex !important; }
          header nav { display: none !important; }
        }
      `}</style>
    </div>
  )
}
