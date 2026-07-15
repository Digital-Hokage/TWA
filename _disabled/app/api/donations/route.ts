import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../lib/db'
import type { DonationRequest } from '../../types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PAN_RE   = /^[A-Z]{5}[0-9]{4}[A-Z]$/

function validate(input: Partial<DonationRequest>): Record<string, string> {
  const errors: Record<string, string> = {}
  const amount = Number(input.amount)
  if (!Number.isFinite(amount) || amount < 100)  errors.amount = 'Minimum donation is ₹100.'
  if (amount > 10_000_000)                       errors.amount = 'For donations above ₹1 crore please contact us.'
  if (!input.name || input.name.trim().length < 2) errors.name = 'Please enter your full name.'
  if (!input.email || !EMAIL_RE.test(input.email)) errors.email = 'Please enter a valid email.'
  if (input.pan && !PAN_RE.test(input.pan))        errors.pan = 'PAN must be 10 characters: 5 letters, 4 digits, 1 letter.'
  return errors
}

export async function POST(request: NextRequest) {
  let body: Partial<DonationRequest> = {}
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request payload.' }, { status: 400 })
  }

  const errors = validate(body)
  if (Object.keys(errors).length) {
    return NextResponse.json(
      { success: false, error: 'Please correct the highlighted fields.', fields: errors },
      { status: 422 },
    )
  }

  try {
    const donation = await prisma.donation.create({
      data: {
        name: body.name!.trim(),
        email: body.email!.trim(),
        phone: body.phone?.trim() || null,
        amount: Math.round(Number(body.amount)),
        pan: body.pan?.trim() || null,
        message: body.message?.trim() || null,
        status: 'pending',
      },
    })

    await prisma.adminLog.create({
      data: { action: 'donation_pledged', detail: `Donation ${donation.id} — ₹${donation.amount} from ${donation.email}` },
    })

    return NextResponse.json({ id: donation.id, success: true })
  } catch (err) {
    console.error('[donations] failed to save', err)
    return NextResponse.json({ success: false, error: 'Could not record your pledge. Please try again.' }, { status: 500 })
  }
}
