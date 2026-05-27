export interface DonationRequest {
  amount: number
  frequency: 'one-time' | 'monthly'
  name: string
  email: string
  phone?: string
  pan?: string
  message?: string
}

export interface VolunteerApplication {
  name: string
  email: string
  phone: string
  role: 'blood-drive' | 'patient-companion' | 'office-digital' | 'fundraising' | 'medical' | 'other'
  availability: 'weekdays' | 'weekends' | 'evenings' | 'flexible'
  city?: string
  message?: string
}

export interface ContactMessage {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface ApiResult<T = unknown> {
  ok: boolean
  data?: T
  error?: string
  fields?: Record<string, string>
}
