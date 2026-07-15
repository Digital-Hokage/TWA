import { NextResponse } from 'next/server'
import { prisma } from '../../lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const rows = await prisma.siteStat.findMany()
    const stats: Record<string, string> = {}
    for (const row of rows) stats[row.key] = row.value
    return NextResponse.json(stats, {
      headers: { 'Cache-Control': 'public, max-age=60, s-maxage=60' },
    })
  } catch (err) {
    console.error('[stats] failed', err)
    return NextResponse.json({}, { status: 500 })
  }
}
