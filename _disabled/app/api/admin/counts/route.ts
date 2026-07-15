import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const [donationsPending, volunteersNew, messagesUnread] = await Promise.all([
      prisma.donation.count({ where: { status: 'pending' } }),
      prisma.volunteer.count({ where: { status: 'new' } }),
      prisma.contact.count({ where: { status: 'unread' } }),
    ])
    return NextResponse.json({ ok: true, donationsPending, volunteersNew, messagesUnread })
  } catch (err) {
    console.error('[admin/counts] failed', err)
    return NextResponse.json({ ok: false, error: 'Failed to load counts.' }, { status: 500 })
  }
}
