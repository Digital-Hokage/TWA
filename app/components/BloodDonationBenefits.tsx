'use client'
import { LifeBloodAnimations } from './LifeBloodDesign'

export default function BloodDonationBenefits() {
  return (
    <section style={{ 
      padding: '6rem 0', 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 30%, #000a00 70%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {[...Array(25)].map((_, i) => (
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
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#dc3545', fontWeight: '800' }}>
              The Gift That Heals Both Giver & Receiver
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'white', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', opacity: 0.9 }}>
              Donating blood is not just about saving lives - it brings incredible health benefits to you too!
            </p>
          </div>
        </LifeBloodAnimations.HeartbeatPulse>

        <LifeBloodAnimations.LifeEnergyGlow>
          <div style={{ 
            background: 'transparent', 
            padding: '2rem', 
            borderRadius: '15px', 
            marginBottom: '3rem', 
            textAlign: 'center',
            border: '1px solid rgba(220, 53, 69, 0.2)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '3rem', color: '#dc3545', fontWeight: '700' }}>1</div>
                <p style={{ fontSize: '1.1rem', color: 'white' }}>Blood donation saves</p>
                <p style={{ fontSize: '1.3rem', fontWeight: '600', color: '#dc3545' }}>3 LIVES</p>
              </div>
              <div>
                <div style={{ fontSize: '3rem', color: '#ffc107', fontWeight: '700' }}>56</div>
                <p style={{ fontSize: '1.1rem', color: 'white' }}>Days between donations</p>
                <p style={{ fontSize: '1.3rem', fontWeight: '600', color: '#ffc107' }}>Safe interval</p>
              </div>
              <div>
                <div style={{ fontSize: '3rem', color: '#28a745', fontWeight: '700' }}>45</div>
                <p style={{ fontSize: '1.1rem', color: 'white' }}>Minutes total time</p>
                <p style={{ fontSize: '1.3rem', fontWeight: '600', color: '#28a745' }}>Quick & easy</p>
              </div>
            </div>
          </div>
        </LifeBloodAnimations.LifeEnergyGlow>

        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: '#ffc107', fontWeight: '700' }}>
            Amazing Health Benefits for YOU
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '❤️', title: 'Heart Health Boost', desc: 'Regular blood donation reduces iron levels, lowering risk of heart disease by 88%. Your heart will thank you!' },
              { icon: '🔄', title: 'Blood Renewal', desc: 'Your body produces fresh, new blood cells within 24-48 hours. It\'s like a natural body refresh!' },
              { icon: '🩺', title: 'Free Health Check', desc: 'Every donation includes free screening for blood pressure, hemoglobin, and infectious diseases. Worth ₹2,000+!' },
              { icon: '😊', title: 'Mental Wellness', desc: 'Helping others releases endorphins - natural happiness hormones. Feel good while doing good!' },
              { icon: '⚖️', title: 'Weight Management', desc: 'Burn approximately 650 calories per donation as your body works to replenish the donated blood.' },
              { icon: '🛡️', title: 'Cancer Protection', desc: 'Studies show regular donors have lower cancer risk, especially liver, lung, and throat cancers.' }
            ].map((benefit, index) => (
              <LifeBloodAnimations.OrganicMorph key={index}>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  padding: '2rem', 
                  borderRadius: '15px', 
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                  <h4 style={{ color: '#dc3545', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>{benefit.title}</h4>
                  <p style={{ lineHeight: '1.7', color: 'white', opacity: 0.9 }}>{benefit.desc}</p>
                </div>
              </LifeBloodAnimations.OrganicMorph>
            ))}
          </div>
        </div>

        <LifeBloodAnimations.LifePulseWave>
          <div style={{ 
            background: 'transparent', 
            padding: '3rem', 
            borderRadius: '15px',
            border: '1px solid rgba(40, 167, 69, 0.2)'
          }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: '#28a745', fontWeight: '700' }}>
              Your Blood = Their Life
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h4 style={{ color: '#ffc107', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>For Thalassemia Patients:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Prevents organ damage from anemia',
                    'Allows normal growth and development', 
                    'Enables children to attend school regularly',
                    'Improves quality of life dramatically'
                  ].map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#28a745', fontSize: '1.2rem', marginRight: '0.5rem' }}>✓</span>
                      <span style={{ color: 'white' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div style={{ 
                  background: 'transparent', 
                  padding: '1.5rem', 
                  borderRadius: '10px', 
                  borderLeft: '4px solid #dc3545', 
                  marginTop: '1.5rem',
                  border: '1px solid rgba(220, 53, 69, 0.2)'
                }}>
                  <p style={{ fontStyle: 'italic', color: 'white', lineHeight: '1.6' }}>
                    "Before regular transfusions, I was always tired. Now I'm the fastest runner in my class!" 
                    <br /><strong style={{ color: '#ffc107' }}>- Kavya, age 10</strong>
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🩸➡️❤️</div>
                <LifeBloodAnimations.HeartbeatPulse>
                  <div style={{ 
                    background: 'linear-gradient(135deg, #dc3545, #c82333)', 
                    color: 'white', 
                    padding: '2rem', 
                    borderRadius: '15px' 
                  }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>1 Unit</div>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>of your blood</p>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>= 3 Lives</div>
                    <p style={{ fontSize: '1.1rem' }}>potentially saved</p>
                  </div>
                </LifeBloodAnimations.HeartbeatPulse>
              </div>
            </div>
          </div>
        </LifeBloodAnimations.LifePulseWave>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div style={{ 
            background: 'rgba(220, 53, 69, 0.1)', 
            color: 'white', 
            padding: '2rem', 
            borderRadius: '15px', 
            maxWidth: '600px', 
            margin: '0 auto',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(220, 53, 69, 0.3)'
          }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '700' }}>Ready to Be a Hero?</h3>
              <p style={{ marginBottom: '2rem', opacity: 0.95 }}>
                Join our blood donor family and experience the joy of saving lives while improving your own health.
              </p>
              <LifeBloodAnimations.OrganicMorph>
                <button style={{ 
                  background: 'var(--white)', 
                  color: '#dc3545', 
                  padding: '15px 30px', 
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  border: 'none', 
                  borderRadius: '25px',
                  cursor: 'pointer'
                }}>
                  🩸 Find Blood Drive Near You
                </button>
              </LifeBloodAnimations.OrganicMorph>
          </div>
        </div>
      </div>
    </section>
  )
}