'use client'
import { LifeBloodAnimations } from './LifeBloodDesign'

export default function TaxBenefits() {
  return (
    <section style={{ 
      padding: '6rem 0', 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #001a1a 50%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {[...Array(12)].map((_, i) => (
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
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#ffc107', fontWeight: '800' }}>
              Your Generosity, Rewarded
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'white', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', opacity: 0.9 }}>
              Your donation to TWA not only saves lives but also provides significant tax savings under Indian tax laws.
            </p>
          </div>
        </LifeBloodAnimations.LifePulseWave>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <LifeBloodAnimations.OrganicMorph>
            <div style={{ 
              background: 'rgba(255, 193, 7, 0.1)', 
              padding: '3rem 2rem', 
              borderRadius: '20px', 
              textAlign: 'center',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 193, 7, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
                <LifeBloodAnimations.BloodVessel />
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📜</div>
                <h3 style={{ color: '#ffc107', marginBottom: '1rem', fontSize: '1.4rem', fontWeight: '700' }}>
                  80G Tax Exemption
                </h3>
                <p style={{ lineHeight: '1.7', color: 'white', marginBottom: '2rem', opacity: 0.9 }}>
                  Get <strong>100% tax deduction</strong> on your donations under Section 80G of the Income Tax Act. 
                  Official receipt provided immediately.
                </p>
                <div style={{ background: 'rgba(255, 193, 7, 0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ffc107', marginBottom: '0.5rem' }}>
                    100%
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'white' }}>Tax Deduction Available</p>
                </div>
            </div>
          </LifeBloodAnimations.OrganicMorph>

          <LifeBloodAnimations.HeartbeatPulse>
            <div style={{ 
              background: 'rgba(40, 167, 69, 0.1)', 
              padding: '3rem 2rem', 
              borderRadius: '20px', 
              textAlign: 'center',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(40, 167, 69, 0.3)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>💰</div>
              <h3 style={{ color: '#28a745', marginBottom: '1rem', fontSize: '1.4rem', fontWeight: '700' }}>
                Your Tax Savings
              </h3>
              <p style={{ lineHeight: '1.7', color: 'white', marginBottom: '2rem', opacity: 0.9 }}>
                If you donate <strong>₹25,000</strong> and are in 30% tax bracket, 
                you save <strong>₹7,500</strong> in taxes.
              </p>
              <div style={{ background: 'rgba(40, 167, 69, 0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#28a745', marginBottom: '0.5rem' }}>
                  ₹25,000 → ₹17,500
                </div>
                <p style={{ fontSize: '0.9rem', color: 'white' }}>Effective donation cost after tax savings</p>
              </div>
            </div>
          </LifeBloodAnimations.HeartbeatPulse>
        </div>

        <LifeBloodAnimations.LifePulseWave>
          <div style={{ 
            background: 'transparent', 
            borderRadius: '20px', 
            overflow: 'hidden', 
            border: '1px solid rgba(220, 53, 69, 0.2)'
          }}>
            <div style={{ background: 'transparent', color: 'white', padding: '2rem', textAlign: 'center', borderBottom: '1px solid rgba(220, 53, 69, 0.2)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Tax Savings Calculator</h3>
              <p style={{ opacity: 0.95 }}>See how much you save based on your tax bracket</p>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'transparent' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'white' }}>Donation Amount</th>
                      <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'white' }}>20% Tax Bracket</th>
                      <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'white' }}>30% Tax Bracket</th>
                      <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'white' }}>Effective Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { donation: '₹10,000', tax20: '₹2,000', tax30: '₹3,000', cost: '₹7,000' },
                      { donation: '₹25,000', tax20: '₹5,000', tax30: '₹7,500', cost: '₹17,500' },
                      { donation: '₹50,000', tax20: '₹10,000', tax30: '₹15,000', cost: '₹35,000' },
                      { donation: '₹1,00,000', tax20: '₹20,000', tax30: '₹30,000', cost: '₹70,000' }
                    ].map((row, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'transparent' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: '#ffc107' }}>{row.donation}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>{row.tax20}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>{row.tax30}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: '#dc3545' }}>{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </LifeBloodAnimations.LifePulseWave>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div style={{ 
            background: 'rgba(40, 167, 69, 0.1)', 
            color: 'white', 
            padding: '2rem', 
            borderRadius: '15px', 
            maxWidth: '600px', 
            margin: '0 auto',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(40, 167, 69, 0.3)'
          }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Additional Benefits</h4>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                {[
                  'Instant 80G certificate via email',
                  'No limit on donation amount',
                  'Valid for current financial year',
                  'Quarterly impact reports included'
                ].map((benefit, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '0.5rem' }}>✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}