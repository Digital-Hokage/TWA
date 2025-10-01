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
                Where every heartbeat matters, every drop of blood carries hope, 
                and every life is a universe worth saving.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'rgba(220, 53, 69, 0.2)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(220, 53, 69, 0.3)'
                }}>📧</div>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'rgba(255, 193, 7, 0.2)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 193, 7, 0.3)'
                }}>📱</div>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'rgba(40, 167, 69, 0.2)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(40, 167, 69, 0.3)'
                }}>🌐</div>
              </div>
          </div>
          
          <LifeBloodAnimations.OrganicMorph>
            <div>
              <h4 style={{ color: '#ffc107', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'What is Thalassemia?', href: '/what-is-thalassemia' },
                  { name: 'Get Involved', href: '/get-involved' },
                  { name: 'Donate Now', href: '/donate' }
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#dc3545', fontSize: '1.2rem' }}>❤️</span>
                  <span style={{ opacity: 0.9 }}>2,500+ Lives Transformed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#ffc107', fontSize: '1.2rem' }}>🩸</span>
                  <span style={{ opacity: 0.9 }}>15,000+ Safe Transfusions</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#28a745', fontSize: '1.2rem' }}>⭐</span>
                  <span style={{ opacity: 0.9 }}>15+ Years Excellence</span>
                </div>
              </div>
            </div>
          </LifeBloodAnimations.HeartbeatPulse>
          
          <LifeBloodAnimations.LifePulseWave>
            <div>
              <h4 style={{ color: '#dc3545', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>Emergency Contact</h4>
              <div style={{ 
                background: 'rgba(220, 53, 69, 0.1)', 
                padding: '1rem', 
                borderRadius: '10px',
                border: '1px solid rgba(220, 53, 69, 0.3)'
              }}>
                <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>24/7 Helpline</p>
                <p style={{ fontSize: '1.2rem', color: '#dc3545', fontWeight: '700' }}>+91 XXXX XXXXXX</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>For medical emergencies</p>
              </div>
            </div>
          </LifeBloodAnimations.LifePulseWave>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '2rem', 
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ opacity: 0.7, margin: 0 }}>
              © 2024 TWA Chennai. All rights reserved. | Reg. No: XXXXX
            </p>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '0.8rem' }}>
              Developed by <a href="https://www.instagram.com/digital_hokage/" target="_blank" rel="noopener noreferrer" style={{ color: '#dc3545', textDecoration: 'none' }}>Digital Hokage</a>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <span style={{ opacity: 0.7 }}>80G Tax Exemption Available</span>
            <div style={{ 
              background: 'rgba(40, 167, 69, 0.2)', 
              padding: '0.5rem 1rem', 
              borderRadius: '15px',
              border: '1px solid rgba(40, 167, 69, 0.3)',
              fontSize: '0.9rem'
            }}>
              ✓ Verified NGO
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}