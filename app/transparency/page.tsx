import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTABand from '../components/CTABand'
import Icon, { type IconName } from '../components/Icon'
import { REGISTRATION } from '../lib/constants'

export const metadata: Metadata = {
  title: 'Transparency & governance',
  description: 'Registrations, audited financials, governance documents and conflict-of-interest policies for the Thalassemia Welfare Association, Chennai.',
}

const PRINCIPLES: { title: string; desc: string; icon: IconName }[] = [
  { title: 'Independent audit', icon: 'file-text',
    desc: 'A registered chartered accountant audits our books every year. The full report and balance sheet are linked below.' },
  { title: 'Restricted vs unrestricted', icon: 'check-circle',
    desc: 'Donations marked for patient care are spent only on patient care. Administrative costs are funded from unrestricted sources.' },
  { title: 'Board oversight', icon: 'users',
    desc: 'Our board meets quarterly. No staff member sits on the board. Trustees serve without remuneration.' },
  { title: 'Conflict-of-interest policy', icon: 'shield',
    desc: 'Trustees, staff and volunteers declare conflicts annually. Decisions involving related parties are recused and minuted.' },
]

export default function TransparencyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: 'var(--color-bg-subtle)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <span className="eyebrow">Transparency</span>
            <h1>The numbers and documents behind our work.</h1>
            <p className="lead" style={{ marginTop: '0.75rem' }}>
              Trust is something a charity earns every year. Here is the evidence.
            </p>
          </div>
        </section>

        {/* Registrations */}
        <section className="section">
          <div className="container-narrow">
            <h2>Registrations</h2>
            <p className="mt-3">
              TWA Chennai is registered under applicable Indian laws governing non-profit
              organisations. The following identifiers can be verified with the relevant
              authorities.
            </p>
            <div className="card mt-6" style={{ overflowX: 'auto' }}>
              <table className="table">
                <tbody>
                  <tr><th>Society Registration No.</th><td>{REGISTRATION.societyRegNo}</td></tr>
                  <tr><th>PAN</th><td>{REGISTRATION.pan}</td></tr>
                  <tr><th>80G certification</th><td>{REGISTRATION.reg80G}</td></tr>
                  <tr><th>12A certification</th><td>{REGISTRATION.reg12A}</td></tr>
                  <tr><th>CSR-1 Registration</th><td>{REGISTRATION.csrRegNo}</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', marginTop: '0.75rem' }}>
              Original certificates are available on request. Write to us at
              {' '}<a href="mailto:info@twachennai.org">info@twachennai.org</a>.
            </p>
          </div>
        </section>

        {/* Annual reports */}
        <section className="section bg-subtle">
          <div className="container-narrow">
            <h2>Annual reports & audited financials</h2>
            <p className="mt-3">
              Each financial year we publish an annual report covering programme outcomes,
              audited financial statements and a breakdown of income and expenditure.
            </p>
            <ul style={{ listStyle: 'none', marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['2024–25', '2023–24', '2022–23'].map((yr) => (
                <li key={yr} className="card card-flat" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem' }}>
                  <span style={{ fontWeight: 600 }}>Annual Report {yr}</span>
                  <span className="badge">Available on request</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', marginTop: '1rem' }}>
              We are migrating to public PDF downloads. Until then, please contact us for a
              copy and we will email it the same working day.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>How we govern ourselves.</h2>
            </div>
            <div className="grid grid-4">
              {PRINCIPLES.map((p) => (
                <article key={p.title} className="card card-hover">
                  <span className="icon-tile accent" aria-hidden="true"><Icon name={p.icon} size={20} /></span>
                  <h3 className="card-title" style={{ marginTop: '0.85rem' }}>{p.title}</h3>
                  <p className="card-body">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Grievance */}
        <section className="section bg-subtle">
          <div className="container-narrow">
            <h2>Grievance redressal</h2>
            <p className="mt-3">
              If you have a concern about a donation, an interaction with our team or any aspect
              of our work, please write to our Grievance Officer at
              {' '}<a href="mailto:grievance@twachennai.org">grievance@twachennai.org</a>.
              We acknowledge every complaint within two working days and aim to resolve them
              within fifteen.
            </p>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  )
}
