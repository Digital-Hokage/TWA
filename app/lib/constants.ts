/**
 * Organization-wide constants. Update these in one place.
 * Placeholders marked `TODO` must be replaced before launch.
 */

export const ORG = {
  name: 'Thalassemia Welfare Association',
  shortName: 'TWA Chennai',
  tagline: 'Two decades of care. Zero cost to patients. Because no family should lose a child to a treatable condition.',
  foundedYear: 2006,
  city: 'Chennai',
  state: 'Tamil Nadu',
  country: 'India',
  url: 'https://twachennai.org',
} as const

export const CONTACT = {
  // TODO: replace placeholders with verified details before launch.
  phonePrimary: '+91 00000 00000',
  phoneHelpline: '+91 00000 00000',
  email: 'info@twachennai.org',
  emailDonations: 'donate@twachennai.org',
  emailVolunteers: 'volunteer@twachennai.org',
  addressLine1: 'TWA Chennai Centre',
  addressLine2: 'Chennai, Tamil Nadu',
  pincode: '600000',
  hours: 'Mon – Sat · 9:00 AM – 6:00 PM',
} as const

export const REGISTRATION = {
  // TODO: replace with actual registration numbers.
  societyRegNo: 'TODO',
  pan: 'TODO',
  reg80G: 'TODO',
  reg12A: 'TODO',
  csrRegNo: 'TODO',
} as const

export const SOCIAL = {
  facebook: '',
  instagram: '',
  twitter: '',
  youtube: '',
  linkedin: '',
} as const

export const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Thalassemia', href: '/what-is-thalassemia' },
  { label: 'Programs', href: '/programs' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Transparency', href: '/transparency' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
] as const

export const DONATION_PRESETS = [
  { amount: 2500,   label: 'One month of medicines for one patient' },
  { amount: 8500,   label: 'Full monthly care for one patient' },
  { amount: 25500,  label: 'Full monthly care for three patients' },
  { amount: 102000, label: 'One year of care for one patient' },
] as const

export const MONTHLY_COST = {
  blood: 3500,
  medicines: 2500,
  tests: 1500,
  transit: 1000,
  total: 8500,
} as const

/**
 * Tax bracket presets for the 80G calculator.
 * Source: Indian Income Tax Act, Section 80G (50% deduction for eligible donations
 * to registered trusts without qualifying limit caveats — display only.
 * Effective rates reflect taxpayer's marginal slab.)
 */
export const TAX_BRACKETS = [
  { rate: 0.05, label: '5%' },
  { rate: 0.20, label: '20%' },
  { rate: 0.30, label: '30%' },
] as const
