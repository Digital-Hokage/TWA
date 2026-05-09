'use client'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BloodDonationBenefits from '../components/BloodDonationBenefits'

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', availability: '', message: ''
  })

  const volunteerRoles = [
    {
      title: 'Blood Drive Volunteer',
      desc: 'Help coordinate our monthly blood donation camps across Chennai. No medical background required — just your time and commitment.',
      color: '#dc3545',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Patient Companion',
      desc: 'Accompany patients during hospital transfusion visits. A familiar face makes an enormous difference to children and families.',
      color: '#ffc107',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 12v-3a2 2 0 0 1 4 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17 12v-3a2 2 0 0 0-4 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 14l4-3 4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 14l-4-3-4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Office & Digital Support',
      desc: 'Assist with data entry, social media, donor outreach, or grant documentation. Work remotely or from our centre.',
      color: '#28a745',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M2 20h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('Volunteer registration submitted successfully.')
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
          <div style={{ textAlign: 'center', marginBottom: '4rem', color: 'white' }}>
            <div
              className="section-label"
              style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(40, 167, 69, 0.12)',
                borderRadius: '999px',
                border: '0.5px solid rgba(40, 167, 69, 0.35)',
                marginBottom: '1.5rem',
                fontSize: '0.85rem',
                fontWeight: '700'
              }}
            >
              Volunteer With Us
            </div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#28a745', fontWeight: '800', lineHeight: '1.15' }}>
              Your Time Is
              <br />as Valuable as Your Blood
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', marginBottom: '0.75rem' }}>
              Every Donation Counts
            </p>
            <p style={{ fontSize: '1.3rem', color: 'white', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', opacity: 0.9 }}>
              Whether you can spare a weekend or a few hours a week, there is a role for you at TWA Chennai.
              Our volunteers are the backbone of everything we do.
            </p>
          </div>

          <section style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              {volunteerRoles.map((role, index) => (
                <div
                  key={index}
                  style={{ 
                    padding: '2rem', 
                    background: 'rgba(255, 255, 255, 0.04)', 
                    borderRadius: '12px', 
                    border: '0.5px solid rgba(255, 255, 255, 0.16)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="icon-container" style={{ marginBottom: '1rem', color: role.color }}>
                    {role.icon}
                  </div>
                  <h3 style={{ color: role.color, marginBottom: '1rem' }}>{role.title}</h3>
                  <p style={{ color: 'white', opacity: 0.9, lineHeight: '1.6' }}>{role.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              padding: '2rem', 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '12px',
              backdropFilter: 'blur(15px)',
              border: '0.5px solid rgba(255,255,255,0.16)'
            }}>
              <h3 style={{ marginBottom: '2rem', color: '#28a745', textAlign: 'center' }}>Ready to Contribute?</h3>
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
                  <label htmlFor="availability" style={{ display: 'block', marginBottom: '0.5rem', color: 'white', fontWeight: '600' }}>
                    When are you available?
                  </label>
                  <select
                    id="availability"
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
                    <option value="" style={{ background: '#333', color: 'white' }}>Select availability</option>
                    <option value="weekends" style={{ background: '#333', color: 'white' }}>Weekends</option>
                    <option value="weekdays" style={{ background: '#333', color: 'white' }}>Weekdays</option>
                    <option value="flexible" style={{ background: '#333', color: 'white' }}>Flexible Schedule</option>
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
                  Apply to Volunteer →
                </button>
                <p style={{ marginTop: '0.75rem', textAlign: 'center', color: 'white', opacity: 0.75, fontSize: '0.9rem' }}>
                  We'll reach out within 48 hours of your submission.
                </p>
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