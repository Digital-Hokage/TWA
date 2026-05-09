'use client'
import { useEffect, useState } from 'react'

type Locale = 'en' | 'ta'

export default function LanguageSwitcher() {
  const [activeLocale, setActiveLocale] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved === 'en' || saved === 'ta') {
      setActiveLocale(saved)
    }
  }, [])

  const switchLanguage = (locale: Locale) => {
    document.documentElement.lang = locale
    localStorage.setItem('language', locale)
    setActiveLocale(locale)
  }

  const toggleButtonStyle = (locale: Locale) => ({
    padding: '6px 14px',
    border: 'none',
    borderRadius: '999px',
    background: activeLocale === locale ? 'white' : 'transparent',
    color: activeLocale === locale ? '#111' : 'white',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: 700,
    lineHeight: 1
  })

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px',
        gap: '4px',
        border: '1px solid rgba(255,255,255,0.25)',
        borderRadius: '999px',
        background: 'rgba(255,255,255,0.08)'
      }}
      aria-label="Language toggle"
    >
      <button
        type="button"
        onClick={() => switchLanguage('en')}
        aria-pressed={activeLocale === 'en'}
        style={toggleButtonStyle('en')}
      >
        EN
      </button>
      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', lineHeight: 1 }}>|</span>
      <button
        type="button"
        onClick={() => switchLanguage('ta')}
        aria-pressed={activeLocale === 'ta'}
        style={toggleButtonStyle('ta')}
      >
        தமிழ்
      </button>
    </div>
  )
}