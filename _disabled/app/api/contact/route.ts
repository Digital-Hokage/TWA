import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../lib/db'
import type { ContactMessage } from '../../types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(input: Partial<ContactMessage>): Record<string, string> {
  const e: Record<string, string> = {}
  if (!input.name || input.name.trim().length < 2)         e.name = 'Please enter your name.'
  if (!input.email || !EMAIL_RE.test(input.email))         e.email = 'Please enter a valid email.'
  if (!input.message || input.message.trim().length < 10)  e.message = 'Please enter a short message.'
  if (input.message && input.message.length > 5000)        e.message = 'Message is too long.'
  return e
}

export async function POST(request: NextRequest) {
  let body: Partial<ContactMessage> = {}
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
    const contact = await prisma.contact.create({
      data: {
        name: body.name!.trim(),
        email: body.email!.trim(),
        phone: body.phone?.trim() || null,
        subject: body.subject?.trim() || null,
        message: body.message!.trim(),
        status: 'unread',
      },
    })

    await prisma.adminLog.create({
      data: { action: 'contact_received', detail: `Message ${contact.id} — ${contact.email}: ${contact.subject ?? '(no subject)'}` },
    })

    return NextResponse.json({ id: contact.id, success: true })
  } catch (err) {
    console.error('[contact] failed to save', err)
    return NextResponse.json({ success: false, error: 'Could not record your message. Please try again.' }, { status: 500 })
  }
}
