'use client'
import { useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()

  const switchLanguage = (locale: string) => {
    // Simple language switching - in production would use next-intl or similar
    document.documentElement.lang = locale
    localStorage.setItem('language', locale)
  }

  return (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <button 
        onClick={() => switchLanguage('en')}
        style={{ 
          padding: '4px 8px', 
          border: '1px solid var(--light-grey)', 
          borderRadius: '4px', 
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '0.8rem'
        }}
      >
        EN
      </button>
      <button 
        onClick={() => switchLanguage('ta')}
        style={{ 
          padding: '4px 8px', 
          border: '1px solid var(--light-grey)', 
          borderRadius: '4px', 
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '0.8rem'
        }}
      >
        தமிழ்
      </button>
    </div>
  )
}