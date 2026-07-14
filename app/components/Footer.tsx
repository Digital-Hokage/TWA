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

  return (
    <footer style={{ background: '#0F172A', color: '#E2E8F0', marginTop: '4rem' }}>
      <div className="container" style={{ padding: '3.5rem 1.5rem 1.5rem' }}>
        <div className="grid grid-4" style={{ gap: '2rem' }}>
          {/* Brand */}
          <div>
            {/* CSS variable override so Logo text reads as white on dark bg */}
            <div
              style={{
                marginBottom: '1rem',
                '--color-text': '#fff',
                '--color-text-subtle': 'rgba(226,232,240,0.55)',
              } as React.CSSProperties}
            >
              <Logo />
            </div>
            <p style={{ fontSize: '0.92rem', color: 'rgba(226,232,240,0.8)', lineHeight: 1.6 }}>
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
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: '#E2E8F0',
                  }}
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.9rem' }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ color: 'rgba(226,232,240,0.75)', fontSize: '0.92rem' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/stories" style={{ color: 'rgba(226,232,240,0.75)', fontSize: '0.92rem' }}>Patient Stories</Link></li>
              <li><Link href="/donate" style={{ color: 'rgba(226,232,240,0.75)', fontSize: '0.92rem' }}>Donate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.9rem' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.92rem' }}>
              <li style={{ display: 'flex', gap: '0.6rem', color: 'rgba(226,232,240,0.85)' }}>
                <Icon name="map-pin" size={16} />
                <span>{CONTACT.addressLine1}<br />{CONTACT.addressLine2} – {CONTACT.pincode}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: 'rgba(226,232,240,0.85)' }}>
                <Icon name="phone" size={16} />
                <a href={`tel:${CONTACT.phonePrimary.replace(/\s/g, '')}`} style={{ color: 'inherit' }}>{CONTACT.phonePrimary}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: 'rgba(226,232,240,0.85)' }}>
                <Icon name="mail" size={16} />
                <a href={`mailto:${CONTACT.email}`} style={{ color: 'inherit' }}>{CONTACT.email}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: 'rgba(226,232,240,0.85)' }}>
                <Icon name="clock" size={16} />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.9rem' }}>
              Registration
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'rgba(226,232,240,0.75)' }}>
              <li>Society Reg. No.: <strong style={{ color: '#fff' }}>{REGISTRATION.societyRegNo}</strong></li>
              <li>PAN: <strong style={{ color: '#fff' }}>{REGISTRATION.pan}</strong></li>
              <li>80G Reg.: <strong style={{ color: '#fff' }}>{REGISTRATION.reg80G}</strong></li>
              <li>12A Reg.: <strong style={{ color: '#fff' }}>{REGISTRATION.reg12A}</strong></li>
            </ul>
            <p style={{ fontSize: '0.8rem', color: 'rgba(226,232,240,0.6)', marginTop: '0.8rem' }}>
              All donations are eligible for tax deduction under Section 80G of the Income Tax Act, 1961.
            </p>
          </div>
        </div>

        <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.08)', margin: '2.5rem 0 1.5rem' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'rgba(226,232,240,0.6)' }}>
          <p>© {year} {ORG.name}. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ color: 'inherit' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'inherit' }}>Terms of Use</Link>
            <Link href="/transparency" style={{ color: 'inherit' }}>Transparency</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
