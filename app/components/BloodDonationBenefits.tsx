'use client'
import { LifeBloodAnimations } from './LifeBloodDesign'
import { Icons } from './IconLibrary'

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
            <div
              className="section-label"
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '999px',
                border: '0.5px solid rgba(255,255,255,0.2)',
                marginBottom: '1rem',
                fontSize: '0.85rem',
                fontWeight: '700'
              }}
            >
              Why Donate Blood
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#dc3545', fontWeight: '800' }}>
              The Gift That Works Both Ways
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'white', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', opacity: 0.9 }}>
              Blood donation is one of the few acts where giving is genuinely good for the giver too.
              Here is what science says.
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
            border: '0.5px solid rgba(220, 53, 69, 0.2)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {[
                { value: '3', label: 'Lives saved per donation', color: '#dc3545' },
                { value: '56 days', label: 'Safe interval between donations', color: '#ffc107' },
                { value: '45 min', label: 'Total time commitment', color: '#28a745' }
              ].map((fact, index) => (
                <div key={index}>
                  <div style={{ fontSize: '2.8rem', color: fact.color, fontWeight: '700' }}>{fact.value}</div>
                  <p style={{ fontSize: '1.1rem', color: 'white' }}>{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </LifeBloodAnimations.LifeEnergyGlow>

        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: '#ffc107', fontWeight: '700' }}>
            Benefits Backed by Science
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                Icon: Icons.Heart,
                title: 'Cardiovascular Protection',
                desc: 'Regular donation reduces excess iron in the blood, a known risk factor for heart disease. Studies link it to up to 88% lower cardiovascular risk.',
                color: '#dc3545'
              },
              {
                Icon: Icons.BloodDrop,
                title: 'Natural Cell Renewal',
                desc: 'Your body replenishes donated red blood cells within 24–48 hours, stimulating the production of fresher, healthier blood.',
                color: '#ff6b6b'
              },
              {
                Icon: Icons.Stethoscope,
                title: 'Complimentary Health Check',
                desc: 'Every donation includes screening for blood pressure, hemoglobin levels, and five infectious diseases — equivalent to a ₹2,000+ clinical test, at no cost.',
                color: '#ffc107'
              },
              {
                Icon: Icons.Users,
                title: 'Psychological Wellbeing',
                desc: 'Altruistic acts trigger endorphin release. Donors consistently report higher life satisfaction and reduced stress in longitudinal studies.',
                color: '#20c997'
              },
              {
                Icon: Icons.TrendingUp,
                title: 'Metabolic Benefit',
                desc: 'Your body expends approximately 650 kcal regenerating the donated blood — a natural, medically documented metabolic benefit.',
                color: '#17a2b8'
              },
              {
                Icon: Icons.Shield,
                title: 'Lower Cancer Risk',
                desc: 'Research published in the Journal of the National Cancer Institute links regular donation to reduced risk of liver, lung, and colon cancers.',
                color: '#6f42c1'
              }
            ].map((benefit, index) => (
              <LifeBloodAnimations.OrganicMorph key={index}>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  padding: '2rem', 
                  borderRadius: '15px', 
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '0.5px solid rgba(255, 255, 255, 0.12)',
                  height: '100%'
                }}>
                  <div className="icon-container" style={{ margin: '0 auto 1rem', width: '56px', height: '56px', color: benefit.color }}>
                    <benefit.Icon />
                  </div>
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
            border: '0.5px solid rgba(40, 167, 69, 0.2)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div
                className="section-label"
                style={{
                  display: 'inline-block',
                  padding: '6px 16px',
                  background: 'rgba(40,167,69,0.1)',
                  borderRadius: '999px',
                  border: '0.5px solid rgba(40,167,69,0.3)',
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  fontWeight: '700'
                }}
              >
                Your Blood = Their Life
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', color: '#28a745', fontWeight: '700' }}>
                For a Child with Thalassemia,
                <br />Your Donation Is Not Optional.
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'white', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Thalassemia Major patients require blood transfusions every 2–4 weeks for life.
                Without consistent donors, there is no alternative.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
              <div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Prevents irreversible organ damage caused by chronic anemia',
                    'Enables normal physical growth and development in children',
                    'Allows children to attend school and lead active lives',
                    'Reduces complications that lead to early mortality'
                  ].map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#28a745', fontSize: '1.2rem', marginRight: '0.5rem' }}>✓</span>
                      <span style={{ color: 'white' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ 
                  background: 'transparent', 
                  padding: '1.5rem', 
                  borderRadius: '10px', 
                  borderLeft: '4px solid #dc3545', 
                  border: '0.5px solid rgba(220, 53, 69, 0.2)',
                  marginBottom: '1.5rem'
                }}>
                  <p style={{ fontStyle: 'italic', color: 'white', lineHeight: '1.6' }}>
                    "Before regular transfusions, I was always exhausted. I couldn't keep up with my classmates. Now I run, I laugh, I study — I feel like any other child."
                  </p>
                  <p style={{ color: '#ffc107', fontWeight: '700', marginTop: '0.75rem' }}>— Kavya, age 10 · TWA Patient since 2019</p>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '1.4rem', fontWeight: '700', color: '#dc3545' }}>Make Your Donation Count</h4>
                  <LifeBloodAnimations.OrganicMorph>
                    <button style={{ 
                      background: 'var(--white)', 
                      color: '#dc3545', 
                      padding: '15px 30px', 
                      fontSize: '1.05rem', 
                      fontWeight: '600', 
                      border: 'none', 
                      borderRadius: '25px',
                      cursor: 'pointer',
                      minHeight: '48px'
                    }}>
                      Find a Blood Drive Near You →
                    </button>
                  </LifeBloodAnimations.OrganicMorph>
                  <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: 'white', opacity: 0.85 }}>
                    Next camp: [date] · [location], Chennai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LifeBloodAnimations.LifePulseWave>
      </div>
    </section>
  )
}