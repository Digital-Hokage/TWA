import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'

export async function GET() {
  const articles = await prisma.mediaArticle.findMany({
    orderBy: [{ sortOrder: 'asc' }, { year: 'desc' }, { createdAt: 'desc' }],
  })
  return NextResponse.json({ ok: true, articles })
}

function parseYear(date: string): number {
  const m = date.match(/\b(19|20)\d{2}\b/)
  return m ? Number(m[0]) : new Date().getFullYear()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const publication = typeof body?.publication === 'string' ? body.publication.trim() : ''
    const date = typeof body?.date === 'string' ? body.date.trim() : ''
    const headline = typeof body?.headline === 'string' ? body.headline.trim() : ''
    if (!publication || !date || !headline) {
      return NextResponse.json({ ok: false, error: 'Publication, date and headline are required.' }, { status: 422 })
    }
    const last = await prisma.mediaArticle.findFirst({ orderBy: { sortOrder: 'desc' } })
    const article = await prisma.mediaArticle.create({
      data: {
        publication,
        date,
        year: Number(body?.year) || parseYear(date),
        headline,
        excerpt: typeof body?.excerpt === 'string' ? body.excerpt.trim() || null : null,
        url: typeof body?.url === 'string' ? body.url.trim() || null : null,
        featured: Boolean(body?.featured),
        sortOrder: (last?.sortOrder ?? 0) + 1,
      },
    })
    await prisma.adminLog.create({
      data: { action: 'media_created', detail: `Article "${headline}" (${publication})` },
    })
    return NextResponse.json({ ok: true, article })
  } catch (err) {
    console.error('[admin/media] POST failed', err)
    return NextResponse.json({ ok: false, error: 'Create failed.' }, { status: 500 })
  }
}
