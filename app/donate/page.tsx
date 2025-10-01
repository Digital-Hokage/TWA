import Header from '../components/Header'
import Footer from '../components/Footer'
import Donate from '../components/Donate'
import MoneyFlow from '../components/MoneyFlow'
import TaxBenefits from '../components/TaxBenefits'

export default function DonatePage() {
  return (
    <main>
      <Header />
      <section style={{ padding: '6rem 0 2rem', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Fund TWA Excellence</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
            Your donation directly funds the superior care at TWA Medical Center - 
            the premier facility in Chennai providing comprehensive Thalassemia care under one roof.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'transparent', padding: '1rem 2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>₹2,500</div>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>= 1 Month Medicines</p>
            </div>
            <div style={{ background: 'transparent', padding: '1rem 2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>₹8,500</div>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>= 1 Month Complete Care</p>
            </div>
            <div style={{ background: 'transparent', padding: '1rem 2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>₹25,000</div>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>= 3 Patients Monthly</p>
            </div>
          </div>
        </div>
      </section>
      
      <MoneyFlow />
      <TaxBenefits />
      <Donate />
      
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#c62828', fontWeight: '800' }}>
              🏥 Sustaining Excellence: Monthly Operations Fund
            </h2>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '2rem', color: 'white', opacity: 0.9 }}>
              Our permanent healthcare facility requires consistent funding to maintain world-class medical standards, 
              24/7 emergency services, and ongoing research programs that benefit patients globally.
            </p>
            
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '15px', backdropFilter: 'blur(15px)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#c62828' }}>₹15L</div>
                  <p style={{ color: 'white', opacity: 0.8 }}>Monthly Target</p>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#28a745' }}>₹11.2L</div>
                  <p style={{ color: 'white', opacity: 0.8 }}>Raised This Month</p>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#007bff' }}>75%</div>
                  <p style={{ color: 'white', opacity: 0.8 }}>Sustainability Rate</p>
                </div>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.1)', height: '20px', borderRadius: '10px', marginTop: '2rem', overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(90deg, #28a745, #4caf50)', height: '100%', width: '75%', borderRadius: '10px' }}></div>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#28a745', fontWeight: '600' }}>75% Complete - Almost There!</p>
            </div>
            
            <button className="btn btn-primary animate-pulse" style={{ fontSize: '1.2rem', padding: '18px 40px', background: '#c62828', border: 'none', borderRadius: '50px' }}>
              🏥 Support Our Medical Excellence
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}