import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { prisma } from '../../../lib/db'

export async function POST(request: NextRequest) {
  const secret = process.env.RAZORPAY_KEY_SECRET
  if (!secret || secret.includes('xxxx')) {
    return NextResponse.json({ ok: false, error: 'Payment verification is not configured.' }, { status: 503 })
  }

  let body: { razorpay_order_id?: string; razorpay_payment_id?: string; razorpay_signature?: string } = {}
  try { body = await request.json() }
  catch {
    return NextResponse.json({ ok: false, error: 'Invalid request payload.' }, { status: 400 })
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ ok: false, error: 'Missing payment fields.' }, { status: 422 })
  }

  const expectedSig = crypto
    .createHmac('sha256', secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex')

  if (expectedSig !== razorpay_signature) {
    await prisma.adminLog.create({
      data: { action: 'razorpay_verify_failed', detail: `Signature mismatch for order ${razorpay_order_id}` },
    })
    return NextResponse.json({ ok: false, error: 'Payment verification failed.' }, { status: 400 })
  }

  try {
    const { count } = await prisma.donation.updateMany({
      where: { razorpayId: razorpay_order_id },
      data: { status: 'confirmed', razorpayId: `${razorpay_order_id} / ${razorpay_payment_id}` },
    })

    await prisma.adminLog.create({
      data: {
        action: 'donation_confirmed',
        detail: `Order ${razorpay_order_id} paid (payment ${razorpay_payment_id})${count === 0 ? ' — no matching pledge row found' : ''}`,
      },
    })

    return NextResponse.json({ success: true, ok: true })
  } catch (err) {
    console.error('[verify] failed', err)
    return NextResponse.json({ ok: false, error: 'Could not record the payment. Contact us with your payment ID.' }, { status: 500 })
  }
}
