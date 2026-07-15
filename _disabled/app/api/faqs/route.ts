import { NextResponse } from 'next/server'
import { prisma } from '../../lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const faqs = await prisma.fAQ.findMany({
      where: { visible: true },
      orderBy: { sortOrder: 'asc' },
    })
    return NextResponse.json({ ok: true, faqs }, {
      headers: { 'Cache-Control': 'public, max-age=60, s-maxage=60' },
    })
  } catch (err) {
    console.error('[faqs] failed', err)
    return NextResponse.json({ ok: false, faqs: [] }, { status: 500 })
  }
}
