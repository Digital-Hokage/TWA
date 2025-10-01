'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header style={{ 
      background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95), rgba(26, 0, 0, 0.95))', 
      boxShadow: '0 2px 20px rgba(220, 53, 69, 0.3)', 
      padding: '1rem 0', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000,
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid rgba(220, 53, 69, 0.2)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ 
            background: 'linear-gradient(45deg, #dc3545, #ffc107)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2rem', 
            fontWeight: '900'
          }}>TWA</h1>
          <span style={{ color: 'white', fontSize: '0.9rem', marginLeft: '0.5rem', opacity: 0.8 }}>Chennai</span>
        </div>

        {!isMobile && (
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'white', fontWeight: '600', opacity: 0.8 }}>Home</Link>
            <Link href="/about" style={{ textDecoration: 'none', color: 'white', fontWeight: '600', opacity: 0.8 }}>About</Link>
            <Link href="/what-is-thalassemia" style={{ textDecoration: 'none', color: 'white', fontWeight: '600', opacity: 0.8 }}>Thalassemia</Link>
            <Link href="/get-involved" style={{ textDecoration: 'none', color: 'white', fontWeight: '600', opacity: 0.8 }}>Get Involved</Link>
            <LanguageSwitcher />
            <Link href="/donate" style={{ 
              background: 'linear-gradient(45deg, #dc3545, #c82333)',
              color: 'white', padding: '10px 25px', fontSize: '14px', fontWeight: '700',
              textDecoration: 'none', borderRadius: '25px'
            }}>💝 Donate</Link>
          </nav>
        )}
        
        {isMobile && (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>
      
      {isMenuOpen && isMobile && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.98), rgba(26, 0, 0, 0.98))',
          backdropFilter: 'blur(15px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <Link href="/" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>About Us</Link>
          <Link href="/what-is-thalassemia" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>What is Thalassemia?</Link>
          <Link href="/get-involved" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 0' }}>Get Involved</Link>
          <Link href="/donate" onClick={() => setIsMenuOpen(false)} style={{ 
            background: 'linear-gradient(45deg, #dc3545, #c82333)', color: 'white', padding: '12px 20px',
            textDecoration: 'none', borderRadius: '25px', textAlign: 'center', marginTop: '1rem'
          }}>💝 Donate Now</Link>
        </div>
      )}
    </header>
  )
}