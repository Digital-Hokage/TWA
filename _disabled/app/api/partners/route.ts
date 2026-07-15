import { NextResponse } from 'next/server'
import { prisma } from '../../lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const partners = await prisma.partner.findMany({
      where: { visible: true },
      orderBy: { sortOrder: 'asc' },
    })
    return NextResponse.json({ ok: true, partners }, {
      headers: { 'Cache-Control': 'public, max-age=60, s-maxage=60' },
    })
  } catch (err) {
    console.error('[partners] failed', err)
    return NextResponse.json({ ok: false, partners: [] }, { status: 500 })
  }
}
