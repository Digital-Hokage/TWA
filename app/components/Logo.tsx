import Image from 'next/image'

export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>

      <Image
        src="/images/logo.jpeg"
        alt="Thalassaemia Welfare Association logo"
        width={44}
        height={44}
        priority
        style={{
          borderRadius: 8,
          objectFit: 'contain',
          flexShrink: 0,
        }}
      />

      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            color: 'var(--color-ink)',
            fontSize: '1rem',
            letterSpacing: '-0.005em',
          }}
        >
          Thalassaemia Welfare Association
        </span>
        <span
          style={{
            fontSize: '0.7rem',
            color: 'var(--color-ink-muted)',
            fontWeight: 400,
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
