export interface Donation {
  id: string
  amount: number
  currency: string
  donorName?: string
  donorEmail?: string
  donorPhone?: string
  type: 'monthly' | 'onetime'
  status: 'pending' | 'completed' | 'failed'
  createdAt: Date
}

export interface Volunteer {
  id: string
  name: string
  email: string
  phone: string
  skills: string[]
  availability: string
  message?: string
  status: 'pending' | 'approved' | 'rejected'
  createdAt: Date
}

export interface Patient {
  id: string
  name: string
  age: number
  bloodGroup: string
  lastTransfusion?: Date
  nextTransfusion?: Date
  status: 'active' | 'inactive'
}

export interface Event {
  id: string
  title: string
  description: string
  date: Date
  location: string
  type: 'blood_drive' | 'awareness_camp' | 'fundraiser'
  status: 'upcoming' | 'ongoing' | 'completed'
}