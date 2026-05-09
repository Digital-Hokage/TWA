'use client'
import { LifeBloodAnimations } from './LifeBloodDesign'
import { useResponsive, getResponsiveStyles } from './ResponsiveStyles'

export default function Hero() {
  const screenSize = useResponsive()
  const styles = getResponsiveStyles(screenSize)
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 30%, #000a1a 70%, #0a0a0a 100%)', 
      color: 'var(--white)', 
      ...styles.hero,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      <LifeBloodAnimations.BloodFlow />
      
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3 }}>
        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="bloodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc3545" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffc107" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#28a745" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,300 Q200,100 400,300 T800,300" stroke="url(#bloodGradient)" strokeWidth="3" fill="none" strokeDasharray="10,5">
            <animate attributeName="stroke-dashoffset" values="0;-100;0" dur="4s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      
      <div style={{ position: 'absolute', top: '20%', right: '10%', opacity: 0.2 }}>
        <LifeBloodAnimations.DNAHelix />
      </div>
      
      <div className="container">
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div
            className="section-label"
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(255,255,255,0.12)',
              borderRadius: '25px',
              marginBottom: '2rem',
              fontSize: '0.85rem',
              fontWeight: '700',
              border: '0.5px solid rgba(255,255,255,0.25)'
            }}
          >
            Chennai's Thalassemia Care Network · Est. 2009
          </div>
        </div>
        
        <LifeBloodAnimations.HeartbeatPulse>
          <h1 style={{ 
            ...styles.title,
            marginBottom: '2rem', 
            fontWeight: '900', 
            background: 'linear-gradient(45deg, #dc3545, #ffc107, #28a745, #007bff)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease infinite',
            textShadow: '0 0 30px rgba(220, 53, 69, 0.5)'
          }}>
            Every 8 Minutes,<br />
            a Child in India is Born<br />
            with Thalassemia.
          </h1>
        </LifeBloodAnimations.HeartbeatPulse>
        
        <LifeBloodAnimations.LifePulseWave>
          <p style={{ 
            ...styles.text,
            marginBottom: '3rem', 
            maxWidth: screenSize === 'mobile' ? '100%' : '900px', 
            margin: '0 auto 3rem', 
            opacity: '0.95', 
            lineHeight: '1.7',
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            fontWeight: '300'
          }}>
            TWA Chennai bridges the gap between diagnosis and dignity —
            <br />connecting patients with safe blood, medical guidance,
            <br />and a community that never lets them face it alone.
          </p>
        </LifeBloodAnimations.LifePulseWave>
        
        <div style={{ 
          display: 'flex', 
          gap: screenSize === 'mobile' ? '1rem' : '2rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          marginTop: '2rem',
          flexDirection: screenSize === 'mobile' ? 'column' : 'row',
          alignItems: 'center'
        }}>
          <LifeBloodAnimations.OrganicMorph>
            <button style={{ 
              fontSize: '1.3rem', 
              padding: '20px 50px', 
              background: 'linear-gradient(45deg, #dc3545, #c82333)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontWeight: '700',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              minHeight: '48px'
            }}>
                <LifeBloodAnimations.BloodVessel />
                Register as Blood Donor
            </button>
          </LifeBloodAnimations.OrganicMorph>
          
          <LifeBloodAnimations.OrganicMorph>
            <button style={{ 
              fontSize: '1.2rem', 
              padding: '18px 40px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(220, 53, 69, 0.5)',
              borderRadius: '50px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              minHeight: '48px'
            }}>
              Learn About Thalassemia
            </button>
          </LifeBloodAnimations.OrganicMorph>
        </div>

        <p style={{
          marginTop: '1.5rem',
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.85)',
          letterSpacing: '0.02em'
        }}>
          ✓ Registered NGO · ✓ 80G Tax Exemption · ✓ 15+ Years of Service
        </p>
        
        <div style={{ 
          marginTop: screenSize === 'mobile' ? '2rem' : '4rem', 
          display: 'grid',
          ...styles.grid,
          gap: screenSize === 'mobile' ? '1rem' : '2rem',
          justifyContent: 'center'
        }}>
          {[
            { value: '2,500+', label: 'Patients Supported', color: '#dc3545', border: 'rgba(220, 53, 69, 0.25)' },
            { value: '15,000+', label: 'Transfusions Facilitated', color: '#ffc107', border: 'rgba(255, 193, 7, 0.25)' },
            { value: '15+', label: 'Years Active', color: '#28a745', border: 'rgba(40, 167, 69, 0.25)' },
            { value: '40+', label: 'Partner Hospitals', color: '#17a2b8', border: 'rgba(23, 162, 184, 0.25)' }
          ].map((stat, index) => (
            <LifeBloodAnimations.HeartbeatPulse key={index}>
              <div style={{ 
                padding: '2rem', 
                background: 'transparent', 
                backdropFilter: 'blur(15px)', 
                borderRadius: '20px', 
                textAlign: 'center',
                border: `0.5px solid ${stat.border}`
              }}>
                <div style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', color: stat.color }}>{stat.value}</div>
                <p style={{ fontSize: '1rem', opacity: 0.9, color: 'white' }}>{stat.label}</p>
              </div>
            </LifeBloodAnimations.HeartbeatPulse>
          ))}
        </div>
      </div>
    </section>
  )
}