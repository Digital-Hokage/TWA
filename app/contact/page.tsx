import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import { CONTACT } from '../lib/constants'
import PageHero from '../components/PageHero'

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Get in touch with the Thalassemia Welfare Association, Chennai. Patient helpline, donor support and partnership enquiries.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="We'd love to hear from you."
          lead="Patient or family member, donor, volunteer, journalist or corporate partner — the same team will read and respond to your message."
        />

        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'start', gap: '2.5rem' }}>
              {/* Info panel */}
              <div
                className="card"
                style={{ background: 'var(--color-bg-subtle)' }}
              >
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 700 }}>Reach us directly</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <li className="flex" style={{ alignItems: 'flex-start', gap: '0.875rem' }}>
                    <span className="icon-tile accent" aria-hidden="true"><Icon name="map-pin" size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.2rem' }}>Visit</div>
                      <div className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {CONTACT.addressLine1}<br />{CONTACT.addressLine2} – {CONTACT.pincode}
                      </div>
                    </div>
                  </li>
                  <li className="flex" style={{ alignItems: 'flex-start', gap: '0.875rem' }}>
                    <span className="icon-tile accent" aria-hidden="true"><Icon name="phone" size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.2rem' }}>Call</div>
                      <div className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                        <a href={`tel:${CONTACT.phonePrimary.replace(/\s/g, '')}`}>{CONTACT.phonePrimary}</a><br />
                        Helpline: <a href={`tel:${CONTACT.phoneHelpline.replace(/\s/g, '')}`}>{CONTACT.phoneHelpline}</a>
                      </div>
                    </div>
                  </li>
                  <li className="flex" style={{ alignItems: 'flex-start', gap: '0.875rem' }}>
                    <span className="icon-tile accent" aria-hidden="true"><Icon name="mail" size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.2rem' }}>Email</div>
                      <div className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                      </div>
                    </div>
                  </li>
                  <li className="flex" style={{ alignItems: 'flex-start', gap: '0.875rem' }}>
                    <span className="icon-tile accent" aria-hidden="true"><Icon name="clock" size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.2rem' }}>Hours</div>
                      <div className="text-muted" style={{ fontSize: '0.9rem' }}>{CONTACT.hours}</div>
                    </div>
                  </li>
                </ul>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
