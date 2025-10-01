'use client'
import { LifeBloodAnimations } from './LifeBloodDesign'

export default function DaycareCenter() {
  return (
    <section style={{ 
      padding: '6rem 0', 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #001a00 50%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {[...Array(20)].map((_, i) => (
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
        <LifeBloodAnimations.LifePulseWave>
          <div style={{ textAlign: 'center', marginBottom: '4rem', color: 'white' }}>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(40, 167, 69, 0.2)', borderRadius: '25px', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: '600' }}>
              🏥 Our Flagship Facility
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#28a745', fontWeight: '800', lineHeight: '1.2' }}>
              More Than a Transfusion.<br />A Circle of Complete Care.
            </h2>
            <p style={{ fontSize: '1.3rem', color: '#ffffff', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', opacity: 0.9 }}>
              While government hospitals provide basic blood transfusions, Thalassemia management requires comprehensive care. 
              At <strong style={{ color: '#28a745' }}>TWA Medical Center</strong>, we've created a medical sanctuary 
              where patients receive world-class, specialized care—all under one roof and completely free.
            </p>
          </div>
        </LifeBloodAnimations.LifePulseWave>

        <LifeBloodAnimations.OrganicMorph>
          <div style={{ 
            background: 'linear-gradient(135deg, #28a745, #20c997)', 
            height: '400px', 
            borderRadius: '20px', 
            marginBottom: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(40, 167, 69, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <LifeBloodAnimations.BloodVessel />
            <div>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏥</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>TWA Medical Center</h3>
              <p style={{ opacity: 0.9 }}>Chennai • Specialized Thalassemia Care Facility</p>
            </div>
          </div>
        </LifeBloodAnimations.OrganicMorph>

        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#28a745', fontWeight: '700' }}>
            The TWA Advantage: Why Our Center Changes Everything
          </h3>
          
          <div style={{ 
            background: 'transparent', 
            borderRadius: '20px', 
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '60px' }}>
              <div style={{ background: 'transparent', padding: '2rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ color: '#dc3545', fontSize: '1.3rem', fontWeight: '700' }}>❌ Standard Government Hospital</h4>
              </div>
              <div style={{ background: 'transparent', padding: '2rem', textAlign: 'center' }}>
                <h4 style={{ color: '#28a745', fontSize: '1.3rem', fontWeight: '700' }}>✅ TWA Medical Center</h4>
              </div>
              
              <div style={{ padding: '2rem', borderRight: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', background: 'transparent' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem', marginRight: '1rem' }}>🩸</span>
                  <div>
                    <h5 style={{ color: '#dc3545', marginBottom: '0.5rem' }}>Basic Transfusion</h5>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Mixed general ward, crowded conditions</p>
                  </div>
                </div>
              </div>
              <div style={{ padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white', background: 'transparent' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem', marginRight: '1rem' }}>❤️</span>
                  <div>
                    <h5 style={{ color: '#28a745', marginBottom: '0.5rem' }}>Safe Dedicated Transfusions</h5>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Clean, exclusive Thalassemia-only ward</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          background: 'rgba(40, 167, 69, 0.1)', 
          color: 'white', 
          padding: '4rem 3rem', 
          borderRadius: '20px',
          textAlign: 'center',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(40, 167, 69, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
            <LifeBloodAnimations.BloodVessel />
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '4rem' }}>❤️</div>
            </div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '700' }}>
              Your Donation Creates This Higher Standard of Care
            </h3>
            <p style={{ fontSize: '1.3rem', marginBottom: '3rem', opacity: 0.95, lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 3rem' }}>
              The compassionate, systematic care at TWA Medical Center is <strong>not government-funded</strong>. 
              It exists because of people like you. When you donate to TWA, you're directly funding a better, 
              safer, and more effective model of care that gives our patients the dignity and quality of life they deserve.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <LifeBloodAnimations.HeartbeatPulse>
                <div style={{ padding: '2rem', background: 'transparent', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>₹2,500</div>
                  <p style={{ fontSize: '1rem' }}>Covers medicines for 1 patient monthly</p>
                </div>
              </LifeBloodAnimations.HeartbeatPulse>
              <LifeBloodAnimations.HeartbeatPulse>
                <div style={{ padding: '2rem', background: 'transparent', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>₹8,500</div>
                  <p style={{ fontSize: '1rem' }}>Complete monthly care for 1 patient</p>
                </div>
              </LifeBloodAnimations.HeartbeatPulse>
              <LifeBloodAnimations.HeartbeatPulse>
                <div style={{ padding: '2rem', background: 'transparent', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>₹25,000</div>
                  <p style={{ fontSize: '1rem' }}>Supports 3 patients for a month</p>
                </div>
              </LifeBloodAnimations.HeartbeatPulse>
            </div>
            
            <LifeBloodAnimations.OrganicMorph>
              <button style={{ 
                background: 'var(--white)', 
                color: '#28a745', 
                padding: '18px 40px', 
                fontSize: '1.2rem', 
                fontWeight: '700',
                borderRadius: '50px',
                border: 'none',
                boxShadow: '0 8px 25px rgba(255,255,255,0.3)',
                cursor: 'pointer'
              }}>
                🏥 Fund TWA Excellence
              </button>
            </LifeBloodAnimations.OrganicMorph>
        </div>
      </div>
    </section>
  )
}