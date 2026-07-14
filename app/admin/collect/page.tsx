type Item = { what: string; where: string; notes?: string; priority: 'high' | 'medium' | 'low' }

const PHOTOS: Item[] = [
  {
    what: 'TWA logo (SVG or high-res PNG, white + colour versions)',
    where: 'Header, footer, and all print materials',
    notes: 'Must be vector (SVG) or at least 1000×400 px PNG with transparent background. Replace placeholder in /public/twa-logo.svg.',
    priority: 'high',
  },
  {
    what: 'Dr. Revathi Raj — professional portrait or candid at centre',
    where: 'Our Story section, homepage, About page',
    notes: 'Clear, well-lit face photo. Portrait orientation (3:4 ratio). Should convey warmth and authority.',
    priority: 'high',
  },
  {
    what: 'Group photo — TWA team / patients / volunteers at VHS Taramani',
    where: 'Hero section (main image), homepage',
    notes: 'Landscape, 16:11 or wider. High resolution. Can include Dr. Revathi Raj, patients, and volunteers together.',
    priority: 'high',
  },
  {
    what: 'Community event or awareness camp photo',
    where: 'Our Story section (right column, bottom)',
    notes: 'World Thalassemia Day, blood donation drive, or similar event. Landscape 16:9.',
    priority: 'high',
  },
  {
    what: 'Blood transfusion session at VHS Taramani',
    where: 'Programs page, What is Thalassemia page',
    notes: 'Shows patient care in action. Must respect patient consent — use signed media release forms.',
    priority: 'high',
  },
  {
    what: 'BMT procedure or bone marrow transplant context photo',
    where: 'Programs page',
    notes: 'Clinical setting at Apollo Hospitals or VHS. Can be a doctor/nurse photo if patient privacy required.',
    priority: 'medium',
  },
  {
    what: 'Prenatal screening / Mediscan Systems lab photo',
    where: 'Programs page',
    notes: 'Shows the CVS / chorion villous sampling partnership. Coordinate with Mediscan.',
    priority: 'medium',
  },
  {
    what: 'Camp Rainbow art therapy session',
    where: 'Programs page, homepage Partners section',
    notes: 'Young patients doing art/craft activities. Cheerful, colourful. Patient consent required.',
    priority: 'medium',
  },
  {
    what: 'Annamayil meal service photo',
    where: 'Programs page',
    notes: 'Meals being served to patients attending transfusion sessions.',
    priority: 'low',
  },
  {
    what: 'Annamayil logo',
    where: 'Homepage Partners section, Our Story page',
    notes: 'Apollo, Mediscan, Camp Rainbow, Five Star Business Finance, and Rotork logos received. Annamayil still outstanding.',
    priority: 'low',
  },
  {
    what: 'Patient story photos (with signed consent)',
    where: 'Future patient stories page at /stories',
    notes: 'Before / after stories or day-in-the-life. Requires written media consent form for each patient.',
    priority: 'low',
  },
]

const DETAILS: Item[] = [
  {
    what: 'Contact phone numbers (primary and helpline)',
    where: 'Header, footer, Contact page, constants.ts',
    notes: 'Replace the placeholder "+91 00000 00000" in app/lib/constants.ts.',
    priority: 'high',
  },
  {
    what: 'Complete address with pincode',
    where: 'Footer, Contact page, Google Maps embed',
    notes: 'Full postal address for VHS Taramani centre, e.g. "Thalassemia Centre, VHS Hospital, Taramani, Chennai – 600113".',
    priority: 'high',
  },
  {
    what: 'Society registration number',
    where: 'Footer, Transparency page',
    notes: 'Issued by Tamil Nadu Registrar of Societies.',
    priority: 'high',
  },
  {
    what: 'PAN (Permanent Account Number)',
    where: 'Footer, Donate page, 80G receipts',
    notes: 'Required for 80G income-tax receipt generation.',
    priority: 'high',
  },
  {
    what: '80G registration certificate number and validity date',
    where: 'Footer, Donate page, Transparency page',
    notes: 'Verify if certificate is still valid. Upload scanned copy to /resources/ via admin portal.',
    priority: 'high',
  },
  {
    what: '12A registration certificate number',
    where: 'Transparency page, CSR profile',
    notes: 'Required for CSR-eligible donations under Companies Act 2013.',
    priority: 'high',
  },
  {
    what: 'FCRA registration (if applicable)',
    where: 'Transparency page',
    notes: 'Required if receiving foreign donations. Confirm whether TWA holds FCRA registration.',
    priority: 'medium',
  },
  {
    what: 'CSR registration number (Form CSR-1)',
    where: 'Transparency page, CSR profile',
    notes: 'MCA portal registration for accepting CSR funds from corporates.',
    priority: 'medium',
  },
  {
    what: 'Bank account details for donations (NEFT/RTGS/UPI)',
    where: 'Donate page, donation follow-up emails',
    notes: 'Account name, number, IFSC code, UPI ID. Must be in TWA\'s registered name.',
    priority: 'high',
  },
  {
    what: 'Social media handles (Facebook, Instagram, YouTube, LinkedIn)',
    where: 'Header, footer, constants.ts',
    notes: 'Profile URLs, not just usernames. Leave blank if not present.',
    priority: 'medium',
  },
  {
    what: 'Official email addresses',
    where: 'Contact page, footer, forms',
    notes: 'Primary (twachennai@gmail.com already set), plus separate addresses for donations and media if available.',
    priority: 'medium',
  },
  {
    what: 'Current patient count (confirmed figure for 2026)',
    where: 'Hero stats, ImpactStats, About page',
    notes: 'Currently shows 199. Confirm or update this figure.',
    priority: 'high',
  },
  {
    what: 'BMT count (confirmed number as of 2026)',
    where: 'ImpactStats section',
    notes: 'Currently shows 300+. Confirm the most recent accurate figure.',
    priority: 'high',
  },
  {
    what: 'Google Analytics 4 measurement ID',
    where: '.env.local → NEXT_PUBLIC_GA_ID',
    notes: 'Create a GA4 property at analytics.google.com if not already done.',
    priority: 'medium',
  },
  {
    what: 'Google Maps embed URL for VHS Taramani',
    where: 'Contact page (map section)',
    notes: 'Generate from Google Maps → Share → Embed a map. Copy the iframe src URL.',
    priority: 'low',
  },
]

const DOCS: Item[] = [
  {
    what: 'Audited annual report (latest available year)',
    where: '/resources/, Transparency page',
    notes: 'Upload as PDF. Will be publicly downloadable. Link from the Transparency page.',
    priority: 'high',
  },
  {
    what: 'Scanned 80G certificate',
    where: '/resources/, Transparency page',
    notes: 'Donors may ask for proof of 80G before donating. Upload as PDF.',
    priority: 'high',
  },
  {
    what: 'Scanned 12A certificate',
    where: '/resources/, Transparency page',
    notes: 'For CSR donors and institutional partners.',
    priority: 'medium',
  },
  {
    what: 'Society registration certificate',
    where: '/resources/, Transparency page',
    notes: 'Issued by Registrar of Societies, Tamil Nadu.',
    priority: 'medium',
  },
  {
    what: 'MoU with Apollo Hospitals (redacted if needed)',
    where: 'Transparency page (optional)',
    notes: 'Summary or executive version showing the free BMT commitment.',
    priority: 'low',
  },
  {
    what: 'MoU with Mediscan Systems (redacted if needed)',
    where: 'Transparency page (optional)',
    notes: 'Confirms free CVS / prenatal diagnosis commitment.',
    priority: 'low',
  },
  {
    what: 'Press kit / media kit',
    where: '/resources/press-kit.pdf',
    notes: 'Fact sheet, boilerplate description, Dr. Revathi Raj bio, high-res logo. For journalists.',
    priority: 'low',
  },
]

const APPROVALS: Item[] = [
  {
    what: 'Patient photo consent forms (signed)',
    where: 'Before publishing any patient images',
    notes: 'Must have signed written consent from patient and/or parent/guardian before any patient photos go live.',
    priority: 'high',
  },
  {
    what: 'Review of all patient case numbers / statistics on site',
    where: 'Hero stats, ImpactStats, About page, Our Story',
    notes: 'Dr. Revathi Raj to confirm patient count, BMT count, and all impact statistics are accurate.',
    priority: 'high',
  },
  {
    what: 'Review of factual claims on the Thalassemia page',
    where: 'what-is-thalassemia page',
    notes: 'Clinical content (inheritance percentages, treatment steps, statistics) to be validated by Dr. Revathi Raj.',
    priority: 'high',
  },
  {
    what: 'Partner logo and name approvals',
    where: 'Homepage Partners section',
    notes: 'Confirm each partner\'s preferred name, logo, and role description before publishing.',
    priority: 'medium',
  },
  {
    what: 'Review of programme descriptions on Programs page',
    where: '/programs page',
    notes: 'All programme details (e.g. chelation, leucodepletion, CVS) to be reviewed for accuracy.',
    priority: 'medium',
  },
]

const REMOVALS: Item[] = [
  {
    what: 'Replace all "#" placeholder URLs in media page',
    where: 'app/media/page.tsx',
    notes: 'LiveChennai 2010, New Indian Express 2013, The News Minute 2023, Apollo Press Release 2023, Times of India 2026 are still missing URLs.',
    priority: 'high',
  },
  {
    what: 'Remove "TODO" registration numbers once real ones are confirmed',
    where: 'app/lib/constants.ts — REGISTRATION object',
    notes: 'Society Reg, PAN, 80G, 12A, CSR are all currently "TODO".',
    priority: 'high',
  },
  {
    what: 'Remove placeholder phone numbers once real numbers are provided',
    where: 'app/lib/constants.ts — CONTACT object',
    notes: 'Currently "+91 00000 00000".',
    priority: 'high',
  },
  {
    what: 'Replace all ImagePlaceholder components with real photos',
    where: 'All pages — see photo collection list above',
    notes: 'Each ImagePlaceholder shows a dashed red border with a description of what photo is needed.',
    priority: 'high',
  },
  {
    what: 'Remove "Stories" and "Privacy" and "Terms" placeholder links',
    where: 'Footer, app/page.tsx',
    notes: '/stories, /privacy, and /terms pages are linked but do not exist yet. Either create them or remove the links.',
    priority: 'medium',
  },
  {
    what: 'Update ADMIN_PASSWORD and ADMIN_TOKEN in production .env.local',
    where: '.env.local (server only — never commit to git)',
    notes: 'Change from default values before going live. Use a strong random password.',
    priority: 'high',
  },
]

type SectionProps = { title: string; color: string; emoji: string; items: Item[] }

function Section({ title, color, emoji, items }: SectionProps) {
  const high   = items.filter((i) => i.priority === 'high').length
  const medium = items.filter((i) => i.priority === 'medium').length
  const low    = items.filter((i) => i.priority === 'low').length

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '1.4rem' }}>{emoji}</span>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>{title}</h2>
        <div style={{ display: 'flex', gap: '0.4rem', marginLeft: 'auto' }}>
          {high   > 0 && <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: 4, background: '#FEE2E2', color: '#7F1D1D' }}>{high} high</span>}
          {medium > 0 && <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: 4, background: '#FEF3C7', color: '#78350F' }}>{medium} medium</span>}
          {low    > 0 && <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: 4, background: '#F1F5F9', color: '#475569' }}>{low} low</span>}
        </div>
      </div>

      <div
        style={{
          background: '#fff', border: '1px solid #E2E8F0',
          borderRadius: 12, overflow: 'hidden',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ width: 80, textAlign: 'center', padding: '0.6rem 0.75rem', color: '#475569', fontWeight: 600 }}>Priority</th>
              <th style={{ textAlign: 'left', padding: '0.6rem 0.75rem', color: '#475569', fontWeight: 600 }}>What to collect</th>
              <th style={{ textAlign: 'left', padding: '0.6rem 0.75rem', color: '#475569', fontWeight: 600 }}>Used where</th>
              <th style={{ textAlign: 'left', padding: '0.6rem 0.75rem', color: '#475569', fontWeight: 600 }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => {
              const priorityStyle = {
                high:   { bg: '#FEE2E2', text: '#7F1D1D', label: 'High' },
                medium: { bg: '#FEF3C7', text: '#78350F', label: 'Med'  },
                low:    { bg: '#F1F5F9', text: '#475569', label: 'Low'  },
              }[item.priority]

              return (
                <tr key={item.what} style={{ borderTop: '1px solid #F1F5F9', background: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                  <td style={{ textAlign: 'center', padding: '0.75rem' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 4,
                      fontSize: '0.72rem', fontWeight: 700,
                      background: priorityStyle.bg, color: priorityStyle.text,
                    }}>
                      {priorityStyle.label}
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem', color: '#1E293B', fontWeight: 500, verticalAlign: 'top' }}>
                    {item.what}
                  </td>
                  <td style={{ padding: '0.75rem', color: '#475569', verticalAlign: 'top', fontSize: '0.82rem' }}>
                    {item.where}
                  </td>
                  <td style={{ padding: '0.75rem', color: '#64748B', verticalAlign: 'top', fontSize: '0.82rem', lineHeight: 1.5 }}>
                    {item.notes}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function CollectPage() {
  const total = PHOTOS.length + DETAILS.length + DOCS.length + APPROVALS.length + REMOVALS.length
  const highTotal = [...PHOTOS, ...DETAILS, ...DOCS, ...APPROVALS, ...REMOVALS].filter(i => i.priority === 'high').length

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
          Collection Report
        </h1>
        <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1rem' }}>
          Everything needed from the TWA team and rep to complete and launch the website.
          {' '}<strong style={{ color: '#0F172A' }}>{total} items total</strong>
          {' '}— <strong style={{ color: '#B91C1C' }}>{highTotal} high priority</strong>.
        </p>
        <div
          style={{
            background: '#F0FDF4', border: '1px solid #86EFAC',
            borderRadius: 8, padding: '0.85rem 1rem',
            fontSize: '0.875rem', color: '#14532D',
          }}
        >
          <strong>How to use this:</strong> Go through each section with Dr. Revathi Raj / the rep.
          Tick off items as they are provided. High-priority items are blocking — the site should
          not go live without them. Medium and low priority items can come after launch.
        </div>
      </div>

      <Section title="Photos &amp; Images needed" emoji="📷" color="#B91C1C" items={PHOTOS} />
      <Section title="Details &amp; Information to provide" emoji="📋" color="#0F766E" items={DETAILS} />
      <Section title="Documents to upload" emoji="📄" color="#1D4ED8" items={DOCS} />
      <Section title="Approvals required" emoji="✅" color="#92400E" items={APPROVALS} />
      <Section title="Placeholders &amp; TODOs to resolve" emoji="🔧" color="#4B5563" items={REMOVALS} />
    </div>
  )
}
