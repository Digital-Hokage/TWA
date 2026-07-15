import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const data: Record<string, unknown> = {}
    if (typeof body?.publication === 'string') data.publication = body.publication.trim()
    if (typeof body?.date === 'string') data.date = body.date.trim()
    if (typeof body?.headline === 'string') data.headline = body.headline.trim()
    if (typeof body?.excerpt === 'string') data.excerpt = body.excerpt.trim() || null
    if (typeof body?.url === 'string') data.url = body.url.trim() || null
    if (typeof body?.featured === 'boolean') data.featured = body.featured
    if (typeof body?.sortOrder === 'number') data.sortOrder = body.sortOrder
    if (typeof body?.year === 'number') data.year = body.year

    if (!Object.keys(data).length) {
      return NextResponse.json({ ok: false, error: 'No valid fields to update.' }, { status: 422 })
    }

    const article = await prisma.mediaArticle.update({ where: { id: params.id }, data })
    await prisma.adminLog.create({
      data: { action: 'media_updated', detail: `Article "${article.headline}" updated (${Object.keys(data).join(', ')})` },
    })
    return NextResponse.json({ ok: true, article })
  } catch (err) {
    console.error('[admin/media] PATCH failed', err)
    return NextResponse.json({ ok: false, error: 'Update failed.' }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const article = await prisma.mediaArticle.delete({ where: { id: params.id } })
    await prisma.adminLog.create({
      data: { action: 'media_deleted', detail: `Article "${article.headline}" deleted` },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/media] DELETE failed', err)
    return NextResponse.json({ ok: false, error: 'Delete failed.' }, { status: 500 })
  }
}
