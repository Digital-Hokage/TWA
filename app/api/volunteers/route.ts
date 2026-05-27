import { NextRequest, NextResponse } from 'next/server'
import type { ApiResult, VolunteerApplication } from '../../types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+0-9 ()-]{8,20}$/
const ROLES = new Set<VolunteerApplication['role']>(['blood-drive','patient-companion','office-digital','fundraising','medical','other'])
const AVAIL = new Set<VolunteerApplication['availability']>(['weekdays','weekends','evenings','flexible'])

function validate(input: Partial<VolunteerApplication>): Record<string, string> {
  const e: Record<string, string> = {}
  if (!input.name || input.name.trim().length < 2)   e.name = 'Please enter your full name.'
  if (!input.email || !EMAIL_RE.test(input.email))   e.email = 'Please enter a valid email.'
  if (!input.phone || !PHONE_RE.test(input.phone))   e.phone = 'Please enter a valid phone number.'
  if (!input.role  || !ROLES.has(input.role as VolunteerApplication['role'])) e.role = 'Please choose a role.'
  if (!input.availability || !AVAIL.has(input.availability as VolunteerApplication['availability'])) e.availability = 'Please choose availability.'
  if (input.message && input.message.length > 2000)  e.message = 'Message is too long.'
  return e
}

export async function POST(request: NextRequest) {
  let body: Partial<VolunteerApplication> = {}
  try { body = await request.json() }
  catch {
    return NextResponse.json<ApiResult>({ ok: false, error: 'Invalid request payload.' }, { status: 400 })
  }

  const errors = validate(body)
  if (Object.keys(errors).length) {
    return NextResponse.json<ApiResult>(
      { ok: false, error: 'Please correct the highlighted fields.', fields: errors },
      { status: 422 },
    )
  }

  // eslint-disable-next-line no-console
  console.log('[volunteer] new application', {
    at: new Date().toISOString(),
    email: body.email,
    role: body.role,
  })

  return NextResponse.json<ApiResult<{ applicationId: string }>>({
    ok: true,
    data: { applicationId: `VOL-${Date.now().toString(36).toUpperCase()}` },
  })
}
