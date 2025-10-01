'use client'

export const LifeBloodAnimations = {
  BloodFlow: () => (
    <div style={{ 
      position: 'absolute', 
      width: '100%', 
      height: '100%', 
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            background: 'radial-gradient(circle, #dc3545, #c82333)',
            borderRadius: '50%',
            top: `${20 + i * 15}%`,
            left: '-10px',
            animation: `bloodFlow ${3 + i * 0.5}s linear infinite`,
            animationDelay: `${i * 0.8}s`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes bloodFlow {
          0% { transform: translateX(-20px) scale(0.5); opacity: 0; }
          20% { transform: translateX(0px) scale(1); opacity: 1; }
          80% { transform: translateX(calc(100vw + 20px)) scale(1); opacity: 1; }
          100% { transform: translateX(calc(100vw + 40px)) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  ),

  HeartbeatPulse: ({ children }: { children: React.ReactNode }) => (
    <div style={{
      animation: 'heartbeatPulse 2s ease-in-out infinite',
      transformOrigin: 'center'
    }}>
      {children}
      <style jsx>{`
        @keyframes heartbeatPulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          25% { transform: scale(1.03); filter: brightness(1.05); }
          50% { transform: scale(1.06); filter: brightness(1.1); }
          75% { transform: scale(1.03); filter: brightness(1.05); }
        }
      `}</style>
    </div>
  ),

  LifeEnergyGlow: ({ children }: { children: React.ReactNode }) => (
    <div style={{
      position: 'relative',
      animation: 'lifeEnergyGlow 3s ease-in-out infinite'
    }}>
      {children}
      <style jsx>{`
        @keyframes lifeEnergyGlow {
          0% { 
            box-shadow: 0 0 20px rgba(220, 53, 69, 0.3), 0 0 40px rgba(255, 193, 7, 0.2);
            filter: brightness(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(220, 53, 69, 0.6), 0 0 80px rgba(255, 193, 7, 0.4), 0 0 120px rgba(40, 167, 69, 0.3);
            filter: brightness(1.1);
          }
          100% { 
            box-shadow: 0 0 20px rgba(220, 53, 69, 0.3), 0 0 40px rgba(255, 193, 7, 0.2);
            filter: brightness(1);
          }
        }
      `}</style>
    </div>
  ),

  OrganicMorph: ({ children }: { children: React.ReactNode }) => (
    <div style={{
      animation: 'organicMorph 8s ease-in-out infinite',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {children}
      <style jsx>{`
        @keyframes organicMorph {
          0%, 100% { border-radius: 20px; transform: scale(1) rotate(0deg); }
          25% { border-radius: 35px 20px 35px 20px; transform: scale(1.02) rotate(1deg); }
          50% { border-radius: 50px; transform: scale(1.04) rotate(0deg); }
          75% { border-radius: 20px 35px 20px 35px; transform: scale(1.02) rotate(-1deg); }
        }
      `}</style>
    </div>
  ),

  BloodVessel: () => (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, transparent 0%, rgba(220, 53, 69, 0.1) 25%, rgba(220, 53, 69, 0.3) 50%, rgba(220, 53, 69, 0.1) 75%, transparent 100%)',
      backgroundSize: '200% 100%',
      animation: 'bloodVesselFlow 4s linear infinite',
      pointerEvents: 'none'
    }}>
      <style jsx>{`
        @keyframes bloodVesselFlow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  ),

  DNAHelix: () => (
    <div style={{ position: 'relative', height: '100px', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, #dc3545, #ffc107, #28a745)',
        top: '30%',
        left: 0,
        animation: 'dnaRotate1 6s linear infinite',
        transformOrigin: 'center'
      }} />
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, #28a745, #ffc107, #dc3545)',
        top: '70%',
        left: 0,
        animation: 'dnaRotate2 6s linear infinite',
        transformOrigin: 'center'
      }} />
      <style jsx>{`
        @keyframes dnaRotate1 {
          0% { transform: rotateY(0deg) translateZ(20px); }
          100% { transform: rotateY(360deg) translateZ(20px); }
        }
        @keyframes dnaRotate2 {
          0% { transform: rotateY(180deg) translateZ(20px); }
          100% { transform: rotateY(540deg) translateZ(20px); }
        }
      `}</style>
    </div>
  ),

  LifePulseWave: ({ children }: { children: React.ReactNode }) => (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {children}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '0',
        height: '0',
        background: 'radial-gradient(circle, rgba(220, 53, 69, 0.4), transparent)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'pulseWave 3s ease-out infinite',
        pointerEvents: 'none'
      }} />
      <style jsx>{`
        @keyframes pulseWave {
          0% { width: 0; height: 0; opacity: 1; }
          100% { width: 400px; height: 400px; opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default LifeBloodAnimations