import Link from 'next/link'
import { ORG, CONTACT, SOCIAL, REGISTRATION, NAV } from '../lib/constants'
import Icon, { type IconName } from './Icon'
import Logo from './Logo'

const socialLinks: { name: string; href: string; icon: IconName }[] = [
  { name: 'Facebook', href: SOCIAL.facebook, icon: 'facebook' },
  { name: 'Instagram', href: SOCIAL.instagram, icon: 'instagram' },
  { name: 'Twitter', href: SOCIAL.twitter, icon: 'twitter' },
  { name: 'YouTube', href: SOCIAL.youtube, icon: 'youtube' },
  { name: 'LinkedIn', href: SOCIAL.linkedin, icon: 'linkedin' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const labelStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.72rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    marginBottom: '1rem',
    fontFamily: 'var(--font-sans)',
  }

  return (
    <footer style={{ background: 'var(--color-ink)', color: 'rgba(255,255,255,0.7)', marginTop: '4rem' }}>
      <div className="container" style={{ padding: '4rem 1.5rem 3rem' }}>
        <div className="grid grid-4" style={{ gap: '2.5rem' }}>
          {/* Brand */}
          <div>
            {/* CSS variable override so Logo text reads as white on dark bg */}
            <div
              style={{
                marginBottom: '1rem',
                '--color-ink': '#fff',
                '--color-ink-muted': 'rgba(255,255,255,0.55)',
              } as React.CSSProperties}
            >
              <Logo />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              {ORG.tagline}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              {socialLinks.filter(s => s.href).map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={labelStyle}>Explore</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/stories" className="footer-link" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Patient Stories</Link></li>
              <li><Link href="/donate" className="footer-link" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Donate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={labelStyle}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.875rem' }}>
              <li style={{ display: 'flex', gap: '0.6rem', color: 'rgba(255,255,255,0.7)' }}>
                <Icon name="map-pin" size={16} />
                <span>{CONTACT.addressLine1}<br />{CONTACT.addressLine2} – {CONTACT.pincode}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: 'rgba(255,255,255,0.7)' }}>
                <Icon name="phone" size={16} />
                <a href={`tel:${CONTACT.phonePrimary.replace(/\s/g, '')}`} className="footer-link" style={{ color: 'inherit' }}>{CONTACT.phonePrimary}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: 'rgba(255,255,255,0.7)' }}>
                <Icon name="mail" size={16} />
                <a href={`mailto:${CONTACT.email}`} className="footer-link" style={{ color: 'inherit' }}>{CONTACT.email}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: 'rgba(255,255,255,0.7)' }}>
                <Icon name="clock" size={16} />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>

          {/* Registration — only rows with confirmed (non-TODO) values are rendered */}
          <div>
            <h4 style={labelStyle}>Registration</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
              {([
                ['Society Reg. No.', REGISTRATION.societyRegNo],
                ['PAN', REGISTRATION.pan],
                ['80G Reg.', REGISTRATION.reg80G],
                ['12A Reg.', REGISTRATION.reg12A],
                ['CSR Reg.', REGISTRATION.csrRegNo],
              ] as [string, string][])
                .filter(([, value]) => value && value !== 'TODO')
                .map(([label, value]) => (
                  <li key={label}>{label}: <strong style={{ color: '#fff', fontWeight: 500 }}>{value}</strong></li>
                ))}
            </ul>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.9rem', lineHeight: 1.6 }}>
              All donations are eligible for tax deduction under Section 80G of the Income Tax Act, 1961.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#0A120B', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div
          className="container"
          style={{
            padding: '1.25rem 1.5rem',
            display: 'flex', flexWrap: 'wrap', gap: '1rem',
            justifyContent: 'space-between', alignItems: 'center',
            fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.5)' }}>© {year} {ORG.name}. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/privacy" className="footer-link" style={{ color: 'inherit' }}>Privacy Policy</Link>
            <Link href="/terms" className="footer-link" style={{ color: 'inherit' }}>Terms of Use</Link>
            <Link href="/transparency" className="footer-link" style={{ color: 'inherit' }}>Transparency</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
