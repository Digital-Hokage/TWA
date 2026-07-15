import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../lib/db'
import type { VolunteerApplication } from '../../types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(input: Partial<VolunteerApplication>): Record<string, string> {
  const e: Record<string, string> = {}
  if (!input.name || input.name.trim().length < 2)   e.name = 'Please enter your full name.'
  if (!input.email || !EMAIL_RE.test(input.email))   e.email = 'Please enter a valid email.'
  if (input.message && input.message.length > 2000)  e.message = 'Message is too long.'
  return e
}

export async function POST(request: NextRequest) {
  let body: Partial<VolunteerApplication & { role?: string }> = {}
  try { body = await request.json() }
  catch {
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
    // Role is folded into the message body — the Volunteer model tracks
    // name/contact/availability, and the free-text keeps the rest.
    const messageParts = [
      body.role ? `Preferred role: ${body.role}` : null,
      body.city ? `City: ${body.city}` : null,
      body.message?.trim() || null,
    ].filter(Boolean)

    const volunteer = await prisma.volunteer.create({
      data: {
        name: body.name!.trim(),
        email: body.email!.trim(),
        phone: body.phone?.trim() || null,
        availability: body.availability || null,
        message: messageParts.length ? messageParts.join('\n') : null,
        status: 'new',
      },
    })

    await prisma.adminLog.create({
      data: { action: 'volunteer_applied', detail: `Volunteer ${volunteer.id} — ${volunteer.email}` },
    })

    return NextResponse.json({ id: volunteer.id, success: true })
  } catch (err) {
    console.error('[volunteers] failed to save', err)
    return NextResponse.json({ success: false, error: 'Could not record your application. Please try again.' }, { status: 500 })
  }
}
