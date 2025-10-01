'use client'
import Icons from './IconLibrary'
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
          <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255,255,255,0.15)', borderRadius: '25px', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: '600' }}>
            🏥 Serving Chennai Since 2010 • 15+ Years of Excellence
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
            The Pulse of Life<br />Flows Through TWA
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
            Where every heartbeat matters, every drop of blood carries hope, 
            and every life is a universe worth saving. We don't just treat Thalassemia – 
            <span style={{ color: '#dc3545', fontWeight: '600' }}> we nurture the essence of life itself.</span>
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
              transition: 'all 0.3s ease'
            }}>
                <LifeBloodAnimations.BloodVessel />
                ❤️ Give Life, Give Hope
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
              cursor: 'pointer'
            }}>
              🧬 Discover Our Science
            </button>
          </LifeBloodAnimations.OrganicMorph>
        </div>
        
        <div style={{ 
          marginTop: screenSize === 'mobile' ? '2rem' : '4rem', 
          display: 'grid',
          ...styles.grid,
          gap: screenSize === 'mobile' ? '1rem' : '2rem',
          justifyContent: 'center'
        }}>
          <LifeBloodAnimations.HeartbeatPulse>
            <div style={{ 
              padding: '2rem', 
              background: 'transparent', 
              backdropFilter: 'blur(15px)', 
              borderRadius: '20px', 
              textAlign: 'center',
              border: '1px solid rgba(220, 53, 69, 0.2)'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', color: '#dc3545' }}>2,500+</div>
              <p style={{ fontSize: '1rem', opacity: 0.9, color: 'white' }}>Lives Transformed</p>
            </div>
          </LifeBloodAnimations.HeartbeatPulse>
          
          <LifeBloodAnimations.LifeEnergyGlow>
            <div style={{ 
              padding: '2rem', 
              background: 'transparent', 
              backdropFilter: 'blur(15px)', 
              borderRadius: '20px', 
              textAlign: 'center',
              border: '1px solid rgba(255, 193, 7, 0.2)'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', color: '#ffc107' }}>15,000+</div>
              <p style={{ fontSize: '1rem', opacity: 0.9, color: 'white' }}>Blood Transfusions</p>
            </div>
          </LifeBloodAnimations.LifeEnergyGlow>
          
          <LifeBloodAnimations.OrganicMorph>
            <div style={{ 
              padding: '2rem', 
              background: 'transparent', 
              backdropFilter: 'blur(15px)', 
              borderRadius: '20px', 
              textAlign: 'center',
              border: '1px solid rgba(40, 167, 69, 0.2)'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', color: '#28a745' }}>∞</div>
              <p style={{ fontSize: '1rem', opacity: 0.9, color: 'white' }}>Hope Eternal</p>
            </div>
          </LifeBloodAnimations.OrganicMorph>
        </div>
      </div>
    </section>
  )
}