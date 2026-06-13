/**
 * TWA Logo component.
 *
 * HOW TO ADD THE REAL LOGO:
 * 1. Place the logo file at:  public/twa-logo.svg  (SVG preferred, PNG accepted)
 * 2. Replace the entire <div> below (the "TWA lettermark block") with:
 *      <Image src="/twa-logo.svg" alt="TWA Chennai" width={150} height={40} priority />
 *    (import Image from 'next/image' at the top of this file)
 *
 * The text underneath the logo badge ("Thalassemia Welfare Association") is always shown
 * alongside the logo for accessibility — keep it even after adding the real logo image.
 */
export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>

      {/* ── TWA lettermark – replace with <Image> when logo is ready ── */}
      <span
        aria-hidden="true"
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: 'linear-gradient(145deg, #B91C1C 0%, #7F1313 100%)',
          color: '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontSize: '0.8rem',
          letterSpacing: '0.08em',
          boxShadow: '0 2px 8px rgba(127,19,19,0.28)',
          flexShrink: 0,
          userSelect: 'none',
        }}
      >
        TWA
      </span>

      {/* org name – always visible next to the logo */}
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span
          style={{
            fontWeight: 700,
            color: 'var(--color-text)',
            fontSize: '0.95rem',
          }}
        >
          Thalassemia Welfare Association
        </span>
        <span
          style={{
            fontSize: '0.68rem',
            color: 'var(--color-text-subtle)',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          Chennai · Est. 2006
        </span>
      </span>
    </div>
  )
}
