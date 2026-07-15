import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import { prisma } from '../../../lib/db'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function razorpayConfigured(): boolean {
  const id = process.env.RAZORPAY_KEY_ID ?? ''
  const secret = process.env.RAZORPAY_KEY_SECRET ?? ''
  return id.startsWith('rzp_') && !id.includes('xxxx') && secret.length > 0 && !secret.includes('xxxx')
}

export async function POST(request: NextRequest) {
  if (!razorpayConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'Online payment is not configured yet. Please use the pledge form below.' },
      { status: 503 },
    )
  }

  let body: { amount?: number; name?: string; email?: string; pan?: string } = {}
  try { body = await request.json() }
  catch {
    return NextResponse.json({ ok: false, error: 'Invalid request payload.' }, { status: 400 })
  }

  const amount = Math.round(Number(body.amount))
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid amount.' }, { status: 422 })
  }
  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Name and a valid email are required.' }, { status: 422 })
  }

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    })

    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: 'INR',
      receipt: `twa_${Date.now()}`,
      notes: { name, email, pan: body.pan ?? '' },
    })

    await prisma.donation.create({
      data: {
        name,
        email,
        amount,
        pan: body.pan?.trim() || null,
        status: 'pending',
        razorpayId: order.id,
      },
    })

    await prisma.adminLog.create({
      data: { action: 'razorpay_order_created', detail: `Order ${order.id} — ₹${amount} for ${email}` },
    })

    return NextResponse.json({ ok: true, orderId: order.id, amount: amount * 100, currency: 'INR' })
  } catch (err) {
    console.error('[create-order] failed', err)
    return NextResponse.json({ ok: false, error: 'Could not start payment. Please try the pledge form.' }, { status: 500 })
  }
}
