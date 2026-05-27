import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import { CONTACT } from '../lib/constants'

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Get in touch with the Thalassemia Welfare Association, Chennai. Patient helpline, donor support and partnership enquiries.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: 'var(--color-bg-subtle)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <span className="eyebrow">Contact</span>
            <h1>We&apos;d love to hear from you.</h1>
            <p className="lead" style={{ marginTop: '0.75rem' }}>
              Patient or family member, donor, volunteer, journalist or corporate partner —
              the same team will read and respond to your message.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'start', gap: '2.5rem' }}>
              {/* Info */}
              <div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Reach us directly</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li className="flex" style={{ alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span className="icon-tile accent" aria-hidden="true"><Icon name="map-pin" size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 600 }}>Visit</div>
                      <div className="text-muted" style={{ fontSize: '0.95rem' }}>
                        {CONTACT.addressLine1}<br />{CONTACT.addressLine2} – {CONTACT.pincode}
                      </div>
                    </div>
                  </li>
                  <li className="flex" style={{ alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span className="icon-tile accent" aria-hidden="true"><Icon name="phone" size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 600 }}>Call</div>
                      <div className="text-muted" style={{ fontSize: '0.95rem' }}>
                        <a href={`tel:${CONTACT.phonePrimary.replace(/\s/g, '')}`}>{CONTACT.phonePrimary}</a><br />
                        Helpline: <a href={`tel:${CONTACT.phoneHelpline.replace(/\s/g, '')}`}>{CONTACT.phoneHelpline}</a>
                      </div>
                    </div>
                  </li>
                  <li className="flex" style={{ alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span className="icon-tile accent" aria-hidden="true"><Icon name="mail" size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 600 }}>Email</div>
                      <div className="text-muted" style={{ fontSize: '0.95rem' }}>
                        General: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
                        Donations: <a href={`mailto:${CONTACT.emailDonations}`}>{CONTACT.emailDonations}</a><br />
                        Volunteers: <a href={`mailto:${CONTACT.emailVolunteers}`}>{CONTACT.emailVolunteers}</a>
                      </div>
                    </div>
                  </li>
                  <li className="flex" style={{ alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span className="icon-tile accent" aria-hidden="true"><Icon name="clock" size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 600 }}>Hours</div>
                      <div className="text-muted" style={{ fontSize: '0.95rem' }}>{CONTACT.hours}</div>
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
