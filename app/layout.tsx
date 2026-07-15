import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ORG, CONTACT } from './lib/constants'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL(ORG.url),
  title: {
    default: `${ORG.name} — ${ORG.city}`,
    template: `%s · ${ORG.shortName}`,
  },
  description:
    'Thalassemia Welfare Association, Chennai supports thalassemia patients across Tamil Nadu with safe blood, free medicines, transit assistance and lifelong care. Registered non-profit · 80G tax exempt.',
  keywords: [
    'thalassemia', 'thalassemia welfare association', 'TWA Chennai',
    'blood transfusion', 'thalassemia patients India', 'donate India', '80G donation',
    'Chennai NGO', 'Tamil Nadu non-profit', 'blood donation Chennai',
  ],
  authors: [{ name: ORG.name }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: ORG.url,
    siteName: ORG.shortName,
    title: `${ORG.name} — ${ORG.city}`,
    description:
      'Lifelong support for thalassemia patients in Tamil Nadu. Safe blood, medicines, and care — funded by donors like you.',
  },
  twitter: {
    card: 'summary_large_image',
    title: ORG.name,
    description: 'Supporting thalassemia patients in Tamil Nadu.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: ORG.name,
    alternateName: ORG.shortName,
    url: ORG.url,
    foundingDate: String(ORG.foundedYear),
    foundingLocation: { '@type': 'Place', name: `${ORG.city}, ${ORG.state}, ${ORG.country}` },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.addressLine1,
      addressLocality: ORG.city,
      addressRegion: ORG.state,
      postalCode: CONTACT.pincode,
      addressCountry: ORG.country,
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: CONTACT.phonePrimary,
      email: CONTACT.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Tamil'],
    }],
    description:
      'Registered non-profit providing safe blood, free medicines and lifelong care to thalassemia patients in Tamil Nadu.',
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
