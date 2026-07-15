import { NextResponse } from 'next/server'
import { prisma } from '../../lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const articles = await prisma.mediaArticle.findMany({
      orderBy: [{ year: 'desc' }, { sortOrder: 'asc' }],
    })
    return NextResponse.json({ ok: true, articles }, {
      headers: { 'Cache-Control': 'public, max-age=60, s-maxage=60' },
    })
  } catch (err) {
    console.error('[media] failed', err)
    return NextResponse.json({ ok: false, articles: [] }, { status: 500 })
  }
}
