'use client'
import { useState } from 'react'

export default function Donate() {
  const [donationType, setDonationType] = useState('monthly')
  const [amount, setAmount] = useState('1000')

  const monthlyImpacts = [
    { amount: '2500', impact: 'Covers complete monthly medicines (chelation drugs, vitamins, supplements)' },
    { amount: '5000', impact: 'Funds blood transfusion + medicines for one patient monthly' },
    { amount: '8500', impact: 'Complete monthly treatment for one patient (blood, medicines, tests, support)' }
  ]

  const oneTimeImpacts = [
    { amount: '3500', impact: 'Funds one complete blood transfusion with all medical supplies' },
    { amount: '8500', impact: 'Covers one month of complete treatment for one patient' },
    { amount: '25000', impact: 'Supports 3 patients for one month with comprehensive care' }
  ]

  const handleDonate = async () => {
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parseInt(amount), type: donationType })
      })
      
      if (response.ok) {
        const data = await response.json()
        alert(`${donationType === 'monthly' ? 'Monthly' : 'One-time'} donation of ₹${amount} initiated successfully!`)
      } else {
        throw new Error('Donation failed')
      }
    } catch (error) {
      alert('Donation failed. Please try again.')
    }
  }

  return (
    <section style={{ 
      padding: '6rem 0', 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #001a00 30%, #1a0000 70%, #0a0a0a 100%)',
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
      
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '3rem', color: '#28a745', fontWeight: '800' }}>
          Become the Heartbeat of Hope
        </h2>
        <p style={{ marginBottom: '3rem', fontSize: '1.3rem', color: 'white', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.6', opacity: 0.9 }}>
          Your regular support creates lasting impact in the lives of Thalassemia patients
        </p>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Donation Type Tabs */}
          <div style={{ display: 'flex', marginBottom: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '4px', backdropFilter: 'blur(10px)' }}>
            <button 
              onClick={() => setDonationType('monthly')}
              style={{
                flex: 1,
                padding: '12px',
                border: 'none',
                borderRadius: '8px',
                background: donationType === 'monthly' ? 'linear-gradient(45deg, #dc3545, #c82333)' : 'transparent',
                color: donationType === 'monthly' ? 'white' : 'rgba(255,255,255,0.7)',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Monthly
            </button>
            <button 
              onClick={() => setDonationType('onetime')}
              style={{
                flex: 1,
                padding: '12px',
                border: 'none',
                borderRadius: '8px',
                background: donationType === 'onetime' ? 'linear-gradient(45deg, #dc3545, #c82333)' : 'transparent',
                color: donationType === 'onetime' ? 'white' : 'rgba(255,255,255,0.7)',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              One-Time
            </button>
          </div>

          {/* Impact Tiers */}
          <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'white' }}>Your Gift, Their Future</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {(donationType === 'monthly' ? monthlyImpacts : oneTimeImpacts).map((tier, index) => (
              <div 
                key={index}
                onClick={() => setAmount(tier.amount)}
                style={{
                  padding: '1.5rem',
                  border: amount === tier.amount ? '2px solid #dc3545' : '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: amount === tier.amount ? 'rgba(220, 53, 69, 0.1)' : 'transparent'
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#dc3545', marginBottom: '0.5rem' }}>
                  ₹{tier.amount}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'white', opacity: 0.9 }}>{tier.impact}</p>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div style={{ marginBottom: '2rem' }}>
            <input
              type="number"
              placeholder="Enter custom amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ 
                width: '300px', 
                padding: '12px', 
                border: '1px solid rgba(255,255,255,0.2)', 
                borderRadius: '8px',
                fontSize: '1rem',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                backdropFilter: 'blur(5px)'
              }}
            />
          </div>

          {/* Donate Button */}
          <button 
            className="btn btn-primary" 
            onClick={handleDonate}
            style={{ fontSize: '1.1rem', padding: '15px 40px', marginBottom: '1rem' }}
          >
            Donate ₹{amount || '0'} {donationType === 'monthly' ? 'Monthly' : 'Now'}
          </button>
          
          <div style={{ background: 'rgba(40, 167, 69, 0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(40, 167, 69, 0.3)', backdropFilter: 'blur(10px)' }}>
            <p style={{ fontSize: '1rem', color: '#28a745', fontWeight: '600', marginBottom: '0.5rem' }}>
              📜 80G Tax Benefit: Save up to 30% on taxes!
            </p>
            <p style={{ fontSize: '0.9rem', color: 'white', opacity: 0.9 }}>
              Donate ₹25,000 → Save ₹7,500 in taxes → Effective cost only ₹17,500
            </p>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'white', opacity: 0.7 }}>
            🔒 Secure payments • Instant 80G certificate • 100% tax deduction
          </p>
        </div>
      </div>
    </section>
  )
}