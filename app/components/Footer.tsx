'use client'
import { LifeBloodAnimations } from './LifeBloodDesign'

export default function Footer() {
  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)', 
      color: 'white', 
      padding: '4rem 0 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="life-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
      
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem',
                background: 'linear-gradient(45deg, #dc3545, #ffc107)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '900'
              }}>TWA Chennai</h3>
              <p style={{ lineHeight: '1.6', opacity: 0.9, marginBottom: '1rem' }}>
                Where every heartbeat matters,
                and no patient faces thalassemia alone.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="icon-container" style={{ color: '#dc3545' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="icon-container" style={{ color: '#ffc107' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 4h3l2 4-2 2a14 14 0 0 0 6 6l2-2 4 2v3c0 1-1 2-2 2A16 16 0 0 1 4 6c0-1 1-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="icon-container" style={{ color: '#28a745' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
          </div>
          
          <LifeBloodAnimations.OrganicMorph>
            <div>
              <h4 style={{ color: '#ffc107', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'What is Thalassemia?', href: '/what-is-thalassemia' },
                  { name: 'Volunteer', href: '/get-involved' },
                  { name: 'Donate', href: '/donate' },
                  { name: 'Contact', href: '/#contact' }
                ].map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    <a href={link.href} style={{ 
                      color: 'white', 
                      textDecoration: 'none', 
                      opacity: 0.8,
                      transition: 'all 0.3s'
                    }}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </LifeBloodAnimations.OrganicMorph>
          
          <LifeBloodAnimations.HeartbeatPulse>
            <div>
              <h4 style={{ color: '#28a745', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>Our Impact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <span style={{ opacity: 0.9 }}>· 2,500+ Patients Supported</span>
                <span style={{ opacity: 0.9 }}>· 15,000+ Transfusions Facilitated</span>
                <span style={{ opacity: 0.9 }}>· 15+ Years of Service</span>
                <span style={{ opacity: 0.9 }}>· 80G Tax Exemption Available</span>
              </div>
            </div>
          </LifeBloodAnimations.HeartbeatPulse>
          
          <LifeBloodAnimations.LifePulseWave>
            <div id="contact">
              <h4 style={{ color: '#dc3545', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>Contact</h4>
              <div style={{ 
                background: 'rgba(220, 53, 69, 0.08)', 
                padding: '1rem', 
                borderRadius: '10px',
                border: '0.5px solid rgba(220, 53, 69, 0.3)'
              }}>
                <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>24/7 Helpline: +91 XXXX XXXXXX</p>
                <p style={{ marginBottom: '0.5rem' }}>Email: info@twachennai.org</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>Address: [Your address], Chennai</p>
              </div>
            </div>
          </LifeBloodAnimations.LifePulseWave>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '2rem', 
          textAlign: 'center'
        }}>
          <p style={{ opacity: 0.7, margin: 0 }}>
            © 2025 Thalassemia Welfare Association, Chennai.
            Registered NGO · 80G Certified · All rights reserved.
          </p>
          <p style={{ opacity: 0.6, margin: '0.5rem 0 0', fontSize: '0.8rem' }}>
            Designed & developed by <a href="https://www.instagram.com/digital_hokage/" target="_blank" rel="noopener noreferrer" style={{ color: '#dc3545', textDecoration: 'none' }}>Digital Hokage</a>
          </p>
        </div>
      </div>
    </footer>
  )
}