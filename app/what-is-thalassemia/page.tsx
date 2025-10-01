'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LifeBloodAnimations } from '../components/LifeBloodDesign'

export default function WhatIsThalassemiaPage() {
  return (
    <main>
      <Header />
      <section style={{ 
        padding: '6rem 0 4rem', 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #001a1a 50%, #0a0a0a 100%)',
        minHeight: '100vh',
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
            <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '3rem', color: '#dc3545', fontWeight: '800' }}>
              Understanding Thalassemia
            </h1>
          </LifeBloodAnimations.HeartbeatPulse>

          <LifeBloodAnimations.LifePulseWave>
            <section style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#ffc107', fontWeight: '800' }}>What is Thalassemia?</h2>
              <div style={{ 
                background: 'rgba(255,255,255,0.05)', 
                padding: '2rem', 
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'white' }}>
                  Thalassemia is an inherited blood disorder affecting the body's ability to produce hemoglobin, 
                  the protein in red blood cells that carries oxygen. This leads to anemia, 
                  leaving patients feeling fatigued and weak.
                </p>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: 'white' }}>
                  For those with severe forms, regular blood transfusions are essential for survival.
                </p>
              </div>
            </section>
          </LifeBloodAnimations.LifePulseWave>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#28a745', fontWeight: '800' }}>Types of Thalassemia</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              <LifeBloodAnimations.OrganicMorph>
                <div style={{ 
                  padding: '2rem', 
                  background: 'rgba(220, 53, 69, 0.1)', 
                  borderRadius: '12px', 
                  border: '1px solid rgba(220, 53, 69, 0.3)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <LifeBloodAnimations.BloodVessel />
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
                  <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>Thalassemia Major</h3>
                  <p style={{ color: 'white', opacity: 0.9 }}>The most severe form requiring lifelong, regular blood transfusions and intensive medical care.</p>
                </div>
              </LifeBloodAnimations.OrganicMorph>
              
              <LifeBloodAnimations.OrganicMorph>
                <div style={{ 
                  padding: '2rem', 
                  background: 'rgba(40, 167, 69, 0.1)', 
                  borderRadius: '12px', 
                  border: '1px solid rgba(40, 167, 69, 0.3)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <LifeBloodAnimations.BloodVessel />
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧬</div>
                  <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>Thalassemia Minor</h3>
                  <p style={{ color: 'white', opacity: 0.9 }}>Carriers typically experience no health problems but can pass the trait to their children.</p>
                </div>
              </LifeBloodAnimations.OrganicMorph>
            </div>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#dc3545', fontWeight: '800' }}>Treatment</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <LifeBloodAnimations.LifeEnergyGlow>
                <div style={{ 
                  padding: '2rem', 
                  background: 'rgba(220, 53, 69, 0.1)', 
                  borderRadius: '12px', 
                  border: '1px solid rgba(220, 53, 69, 0.3)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🩸</div>
                  <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>Blood Transfusions</h3>
                  <p style={{ color: 'white', opacity: 0.9 }}>Regular transfusions provide healthy red blood cells essential for survival.</p>
                </div>
              </LifeBloodAnimations.LifeEnergyGlow>
              
              <LifeBloodAnimations.HeartbeatPulse>
                <div style={{ 
                  padding: '2rem', 
                  background: 'rgba(255, 193, 7, 0.1)', 
                  borderRadius: '12px', 
                  border: '1px solid rgba(255, 193, 7, 0.3)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💊</div>
                  <h3 style={{ color: '#ffc107', marginBottom: '1rem' }}>Iron Chelation</h3>
                  <p style={{ color: 'white', opacity: 0.9 }}>Medicines to remove excess iron from frequent transfusions.</p>
                </div>
              </LifeBloodAnimations.HeartbeatPulse>
            </div>
          </section>

          <LifeBloodAnimations.LifePulseWave>
            <section>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#007bff', fontWeight: '800' }}>Prevention</h2>
              <div style={{ 
                background: 'rgba(0, 123, 255, 0.1)', 
                padding: '2rem', 
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 123, 255, 0.3)'
              }}>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'white' }}>
                  A simple blood test (HbA2 testing) can determine if someone is a Thalassemia carrier.
                </p>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: 'white' }}>
                  We advocate for carrier screening before marriage to help couples make informed decisions.
                </p>
              </div>
            </section>
          </LifeBloodAnimations.LifePulseWave>
        </div>
      </section>
      <Footer />
    </main>
  )
}