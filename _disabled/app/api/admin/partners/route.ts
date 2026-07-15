import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'

export async function GET() {
  const partners = await prisma.partner.findMany({ orderBy: { sortOrder: 'asc' } })
  return NextResponse.json({ ok: true, partners })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const type = typeof body?.type === 'string' ? body.type.trim() : ''
    const description = typeof body?.description === 'string' ? body.description.trim() : ''
    if (!name || !type || !description) {
      return NextResponse.json({ ok: false, error: 'Name, type and description are required.' }, { status: 422 })
    }
    const initials =
      typeof body?.initials === 'string' && body.initials.trim()
        ? body.initials.trim().slice(0, 3).toUpperCase()
        : name.slice(0, 2).toUpperCase()
    const last = await prisma.partner.findFirst({ orderBy: { sortOrder: 'desc' } })
    const partner = await prisma.partner.create({
      data: {
        name,
        type,
        description,
        initials,
        logoPath: typeof body?.logoPath === 'string' ? body.logoPath.trim() || null : null,
        visible: body?.visible === undefined ? true : Boolean(body.visible),
        sortOrder: (last?.sortOrder ?? 0) + 1,
      },
    })
    await prisma.adminLog.create({ data: { action: 'partner_created', detail: `Partner "${name}"` } })
    return NextResponse.json({ ok: true, partner })
  } catch (err) {
    console.error('[admin/partners] POST failed', err)
    return NextResponse.json({ ok: false, error: 'Create failed.' }, { status: 500 })
  }
}
