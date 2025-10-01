'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ display: 'none' }} className="mobile-menu">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          background: 'none', 
          border: 'none', 
          fontSize: '1.5rem', 
          cursor: 'pointer',
          color: 'var(--primary-blue)'
        }}
      >
        ☰
      </button>
      
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--white)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          padding: '1rem',
          zIndex: 1000
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/what-is-thalassemia" onClick={() => setIsOpen(false)}>What is Thalassemia?</Link>
            <Link href="/get-involved" onClick={() => setIsOpen(false)}>Get Involved</Link>
            <Link href="/donate" className="btn btn-primary" onClick={() => setIsOpen(false)}>Donate Now</Link>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}