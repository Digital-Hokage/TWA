export const Icons = {
  Heart: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="animate-heartbeat">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
    </svg>
  ),
  
  BloodDrop: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="animate-pulse">
      <path d="M12 2C8 6 4 10 4 14a8 8 0 1 0 16 0c0-4-4-8-8-12z" fill="currentColor"/>
      <circle cx="12" cy="14" r="3" fill="rgba(255,255,255,0.3)"/>
    </svg>
  ),
  
  Shield: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="animate-float">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  Stethoscope: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
      <path d="M11 2v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V2M5 2v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V2" stroke="currentColor" strokeWidth="2"/>
      <path d="M11 8v4a6 6 0 0 0 6 6h0a2 2 0 1 0 0-4h0a2 2 0 0 1-2-2V8" stroke="currentColor" strokeWidth="2"/>
      <circle cx="20" cy="18" r="2" fill="currentColor"/>
    </svg>
  ),
  
  Users: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  
  Award: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="animate-glow">
      <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="8" r="3" fill="currentColor"/>
    </svg>
  ),
  
  TrendingUp: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="2"/>
      <polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  
  Globe: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="animate-float">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

export default Icons