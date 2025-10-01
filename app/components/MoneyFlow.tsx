'use client'
import { LifeBloodAnimations } from './LifeBloodDesign'

export default function MoneyFlow() {
  return (
    <section style={{ 
      padding: '6rem 0', 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {[...Array(15)].map((_, i) => (
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
        <LifeBloodAnimations.HeartbeatPulse>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '3rem', color: '#dc3545', fontWeight: '800' }}>
            The True Cost of Life
          </h2>
        </LifeBloodAnimations.HeartbeatPulse>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.3rem', color: 'white', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.6', opacity: 0.9 }}>
          Transparent breakdown of actual monthly treatment costs per patient - 
          see exactly where your donation makes the difference.
        </p>

        <LifeBloodAnimations.OrganicMorph>
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.2), rgba(255, 193, 7, 0.2))', 
            padding: '3rem', 
            borderRadius: '20px', 
            marginBottom: '4rem', 
            textAlign: 'center',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(220, 53, 69, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
              <LifeBloodAnimations.BloodVessel />
              <h3 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#dc3545', fontWeight: '900' }}>
                ₹8,500 per life per month
              </h3>
              <p style={{ fontSize: '1.3rem', color: 'white', opacity: 0.9 }}>
                The price of hope, the cost of tomorrow (Range: ₹5,000 - ₹12,000 depending on patient needs)
              </p>
          </div>
        </LifeBloodAnimations.OrganicMorph>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {[
            { icon: '🩸', title: '₹3,500 = Blood & Transfusion', desc: 'Complete transfusion process', details: 'Blood units, transfusion kit, filter (₹800), PPE, medical supervision', quote: 'Safe blood gives me energy to live normally', color: '#dc3545' },
            { icon: '💊', title: '₹2,500 = Medicines', desc: 'Iron chelation & vitamins', details: 'Chelation drugs, vitamin injections, growth supplements, folic acid', quote: 'These medicines prevent organ damage', color: '#7b1fa2' },
            { icon: '🔬', title: '₹1,500 = Tests & Monitoring', desc: 'Regular health checks', details: 'CBC, Ferritin (every 6 months), MRI (every 1.5 years), liver function', quote: 'Regular monitoring saves lives', color: '#388e3c' },
            { icon: '🚗', title: '₹1,000 = Transit & Support', desc: 'Family assistance', details: 'Travel costs, doctor consultation fees, emergency support', quote: 'TWA covers what families cannot afford', color: '#f57c00' }
          ].map((item, index) => (
            <LifeBloodAnimations.OrganicMorph key={index}>
              <div style={{ 
                background: `rgba(${item.color === '#dc3545' ? '220, 53, 69' : item.color === '#7b1fa2' ? '123, 31, 162' : item.color === '#388e3c' ? '56, 142, 60' : '245, 124, 0'}, 0.1)`, 
                padding: '2rem', 
                borderRadius: '15px', 
                border: `1px solid rgba(${item.color === '#dc3545' ? '220, 53, 69' : item.color === '#7b1fa2' ? '123, 31, 162' : item.color === '#388e3c' ? '56, 142, 60' : '245, 124, 0'}, 0.3)`,
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%'
              }}>
                <LifeBloodAnimations.BloodVessel />
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2.5rem', marginRight: '1rem' }}>{item.icon}</div>
                  <div>
                    <h3 style={{ color: item.color, marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'white', opacity: 0.8 }}>{item.desc}</p>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', backdropFilter: 'blur(5px)' }}>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'white' }}>
                    <strong>Includes:</strong> {item.details}
                  </p>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#ffc107', fontStyle: 'italic' }}>
                  "{item.quote}" - Expert
                </div>
              </div>
            </LifeBloodAnimations.OrganicMorph>
          ))}
        </div>

        <LifeBloodAnimations.LifePulseWave>
          <div style={{ 
            background: 'rgba(0, 123, 255, 0.1)', 
            padding: '3rem', 
            borderRadius: '20px', 
            color: 'white', 
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 123, 255, 0.3)'
          }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: '700' }}>Your Monthly Impact</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {[
                { amount: '₹2,500', impact: 'Covers medicines for 1 patient', desc: 'Essential chelation therapy' },
                { amount: '₹8,500', impact: 'Complete care for 1 patient', desc: 'Full monthly treatment' },
                { amount: '₹25,000', impact: 'Supports 3 patients monthly', desc: 'Transform multiple lives' }
              ].map((tier, index) => (
                <LifeBloodAnimations.HeartbeatPulse key={index}>
                  <div style={{ padding: '2rem', background: 'transparent', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{tier.amount}</div>
                    <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tier.impact}</p>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{tier.desc}</p>
                  </div>
                </LifeBloodAnimations.HeartbeatPulse>
              ))}
            </div>
          </div>
        </LifeBloodAnimations.LifePulseWave>
      </div>
    </section>
  )
}