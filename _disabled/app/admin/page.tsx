'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const next   = params.get('next') ?? '/admin/dashboard'

  const [password, setPassword]   = useState('')
  const [error, setError]         = useState('')
  const [loading, setLoading]     = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res  = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const json = await res.json()
      if (!json.ok) {
        setError(json.error ?? 'Incorrect password.')
        return
      }
      router.push(next)
    } catch {
      setError('Could not connect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0F172A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          background: '#1E293B',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          padding: '2.5rem',
          width: '100%',
          maxWidth: 400,
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              width: 52, height: 52, borderRadius: 12,
              background: 'linear-gradient(135deg, #B91C1C, #7F1313)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: '1.1rem', color: '#fff',
              marginBottom: '1rem',
            }}
          >
            TWA
          </div>
          <h1 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.25rem' }}>
            Admin Portal
          </h1>
          <p style={{ color: 'rgba(226,232,240,0.5)', fontSize: '0.875rem' }}>
            Thalassemia Welfare Association Chennai
          </p>
        </div>

        {error && (
          <div
            style={{
              background: '#450A0A', border: '1px solid #B91C1C',
              borderRadius: 8, padding: '0.75rem 1rem',
              color: '#FCA5A5', fontSize: '0.875rem', marginBottom: '1.25rem',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label
              htmlFor="admin-pw"
              style={{ display: 'block', color: '#CBD5E1', fontSize: '0.875rem', marginBottom: '0.4rem', fontWeight: 500 }}
            >
              Password
            </label>
            <input
              id="admin-pw"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              style={{
                width: '100%', padding: '0.7rem 0.9rem',
                background: '#0F172A', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8, color: '#F1F5F9', fontSize: '0.95rem',
                outline: 'none', boxSizing: 'border-box',
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '0.8rem',
              background: loading ? '#7F1313' : 'linear-gradient(135deg, #B91C1C, #991B1B)',
              border: 'none', borderRadius: 8,
              color: '#fff', fontWeight: 700, fontSize: '0.95rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'opacity .15s',
            }}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(226,232,240,0.35)' }}>
          Access is configured via <code>ADMIN_PASSWORD_HASH</code> and <code>JWT_SECRET</code> in <code>.env.local</code>.
        </p>
      </div>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
