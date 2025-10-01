'use client'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BloodDonationBenefits from '../components/BloodDonationBenefits'

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', availability: '', message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('Volunteer registration submitted successfully!')
        setFormData({ name: '', email: '', phone: '', availability: '', message: '' })
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      alert('Registration failed. Please try again.')
    }
  }

  return (
    <main>
      <Header />
      <section style={{ 
        padding: '6rem 0 4rem', 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #001a00 50%, #0a0a0a 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {[...Array(18)].map((_, i) => (
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
          <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '3rem', color: '#28a745', fontWeight: '800' }}>
            Join the Circle of Life
          </h1>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#ffc107', fontWeight: '800' }}>Ways to Share Your Life Energy</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ 
                padding: '2rem', 
                background: 'rgba(220, 53, 69, 0.1)', 
                borderRadius: '12px', 
                border: '1px solid rgba(220, 53, 69, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>Event Support</h3>
                <p style={{ color: 'white', opacity: 0.9 }}>Help organize blood donation drives and awareness camps.</p>
              </div>
              <div style={{ 
                padding: '2rem', 
                background: 'rgba(255, 193, 7, 0.1)', 
                borderRadius: '12px', 
                border: '1px solid rgba(255, 193, 7, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                <h3 style={{ color: '#ffc107', marginBottom: '1rem' }}>Patient Support</h3>
                <p style={{ color: 'white', opacity: 0.9 }}>Provide companionship during hospital visits.</p>
              </div>
              <div style={{ 
                padding: '2rem', 
                background: 'rgba(40, 167, 69, 0.1)', 
                borderRadius: '12px', 
                border: '1px solid rgba(40, 167, 69, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
                <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>Administrative Help</h3>
                <p style={{ color: 'white', opacity: 0.9 }}>Assist with office tasks and operations.</p>
              </div>
            </div>

            <div style={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              padding: '2rem', 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '12px',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ marginBottom: '2rem', color: '#28a745', textAlign: 'center' }}>Join Our Life-Saving Mission</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid rgba(255,255,255,0.2)', 
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      backdropFilter: 'blur(5px)'
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid rgba(255,255,255,0.2)', 
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      backdropFilter: 'blur(5px)'
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid rgba(255,255,255,0.2)', 
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      backdropFilter: 'blur(5px)'
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({...formData, availability: e.target.value})}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid rgba(255,255,255,0.2)', 
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      backdropFilter: 'blur(5px)'
                    }}
                    required
                  >
                    <option value="" style={{ background: '#333', color: 'white' }}>Select Availability</option>
                    <option value="weekends" style={{ background: '#333', color: 'white' }}>Weekends Only</option>
                    <option value="weekdays" style={{ background: '#333', color: 'white' }}>Weekdays</option>
                    <option value="flexible" style={{ background: '#333', color: 'white' }}>Flexible</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <textarea
                    placeholder="Tell us about your skills and interests"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid rgba(255,255,255,0.2)', 
                      borderRadius: '8px', 
                      minHeight: '100px',
                      background: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      backdropFilter: 'blur(5px)',
                      resize: 'vertical'
                    }}
                  />
                </div>
                <button type="submit" style={{ 
                  width: '100%', 
                  padding: '15px',
                  background: 'linear-gradient(45deg, #28a745, #20c997)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)'
                }}>
                  🌟 Join the Mission
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
      
      <BloodDonationBenefits />
      <Footer />
    </main>
  )
}