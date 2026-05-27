import { NextRequest, NextResponse } from 'next/server'
import type { ApiResult, DonationRequest } from '../../types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PAN_RE   = /^[A-Z]{5}[0-9]{4}[A-Z]$/

function validate(input: Partial<DonationRequest>): Record<string, string> {
  const errors: Record<string, string> = {}
  const amount = Number(input.amount)
  if (!Number.isFinite(amount) || amount < 100)  errors.amount = 'Minimum donation is ₹100.'
  if (amount > 10_000_000)                       errors.amount = 'For donations above ₹1 crore please contact us.'
  if (input.frequency !== 'monthly' && input.frequency !== 'one-time') errors.frequency = 'Choose monthly or one-time.'
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
    return NextResponse.json<ApiResult>(
      { ok: false, error: 'Invalid request payload.' },
      { status: 400 },
    )
  }

  const errors = validate(body)
  if (Object.keys(errors).length) {
    return NextResponse.json<ApiResult>(
      { ok: false, error: 'Please correct the highlighted fields.', fields: errors },
      { status: 422 },
    )
  }

  // Server-side log (in production: persist to DB and create payment gateway order)
  // eslint-disable-next-line no-console
  console.log('[donation] new pledge', {
    at: new Date().toISOString(),
    amount: body.amount,
    frequency: body.frequency,
    email: body.email,
  })

  // TODO: integrate Razorpay/Stripe and email confirmation pipeline.
  // For now we acknowledge the pledge so the donor can complete payment via a follow-up
  // email from the operations team.
  return NextResponse.json<ApiResult<{ pledgeId: string }>>({
    ok: true,
    data: { pledgeId: `PLD-${Date.now().toString(36).toUpperCase()}` },
  })
}
