import './globals.css'

export const metadata = {
  title: 'Thalassemia Welfare Association - Chennai | Supporting Patients & Families',
  description: 'TWA Chennai provides comprehensive support to Thalassemia patients through medical aid, blood transfusions, and community awareness. Join us in making a difference.',
  keywords: 'thalassemia, blood disorder, Chennai, Tamil Nadu, medical support, blood transfusion, charity, donation, volunteer',
  authors: [{ name: 'TWA Chennai' }],
  creator: 'Thalassemia Welfare Association',
  publisher: 'TWA Chennai',
  openGraph: {
    title: 'Thalassemia Welfare Association - Chennai',
    description: 'Supporting Thalassemia patients and families with hope, care, and medical assistance',
    url: 'https://twachennai.org',
    siteName: 'TWA Chennai',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thalassemia Welfare Association - Chennai',
    description: 'Supporting Thalassemia patients and families in Chennai, Tamil Nadu',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}