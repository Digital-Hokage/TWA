import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutPage() {
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
          <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '3rem', color: '#dc3545', fontWeight: '800' }}>
            The Soul Behind the Science
          </h1>
          
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#ffc107', fontWeight: '800' }}>Our Story</h2>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '2rem', color: 'white' }}>
              Founded in 2010, TWA Chennai was born from a simple yet powerful mission: 
              to ensure no one has to face Thalassemia alone. What began as a small group of dedicated 
              volunteers has grown into Chennai's premier Thalassemia treatment facility.
            </p>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: 'white' }}>
              We believe every individual with Thalassemia deserves access to the best possible care, 
              support, and quality of life.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#28a745', fontWeight: '800' }}>Mission & Vision</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '2rem', background: 'rgba(255, 193, 7, 0.1)', borderRadius: '12px', border: '1px solid rgba(255, 193, 7, 0.3)', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#ffc107', marginBottom: '1rem' }}>🤝 Our Mission</h3>
                <p style={{ color: 'white', opacity: 0.9 }}>Provide comprehensive Thalassemia care through medical excellence, patient advocacy, and community support.</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '12px', border: '1px solid rgba(40, 167, 69, 0.3)', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>⭐ Our Vision</h3>
                <p style={{ color: 'white', opacity: 0.9 }}>A future where effective Thalassemia management is accessible to all, with breakthrough treatments leading to cures.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#007bff', fontWeight: '800' }}>Our Impact</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#ffc107' }}>2,500+</div>
                <p style={{ color: 'white', opacity: 0.9 }}>Lives Transformed</p>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#28a745' }}>15,000+</div>
                <p style={{ color: 'white', opacity: 0.9 }}>Safe Transfusions</p>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#007bff' }}>15</div>
                <p style={{ color: 'white', opacity: 0.9 }}>Years of Excellence</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}