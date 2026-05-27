import { NextRequest, NextResponse } from 'next/server'
import type { ApiResult, ContactMessage } from '../../types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(input: Partial<ContactMessage>): Record<string, string> {
  const e: Record<string, string> = {}
  if (!input.name || input.name.trim().length < 2)        e.name = 'Please enter your name.'
  if (!input.email || !EMAIL_RE.test(input.email))        e.email = 'Please enter a valid email.'
  if (!input.subject || input.subject.trim().length < 2)  e.subject = 'Please enter a subject.'
  if (!input.message || input.message.trim().length < 10) e.message = 'Please enter a short message.'
  if (input.message && input.message.length > 5000)       e.message = 'Message is too long.'
  return e
}

export async function POST(request: NextRequest) {
  let body: Partial<ContactMessage> = {}
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
  console.log('[contact] new message', {
    at: new Date().toISOString(),
    email: body.email,
    subject: body.subject,
  })

  return NextResponse.json<ApiResult<{ ticketId: string }>>({
    ok: true,
    data: { ticketId: `MSG-${Date.now().toString(36).toUpperCase()}` },
  })
}
