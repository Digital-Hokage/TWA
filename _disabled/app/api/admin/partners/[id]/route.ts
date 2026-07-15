import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const data: Record<string, unknown> = {}
    if (typeof body?.name === 'string') data.name = body.name.trim()
    if (typeof body?.type === 'string') data.type = body.type.trim()
    if (typeof body?.description === 'string') data.description = body.description.trim()
    if (typeof body?.initials === 'string') data.initials = body.initials.trim().slice(0, 3).toUpperCase()
    if (typeof body?.logoPath === 'string') data.logoPath = body.logoPath.trim() || null
    if (typeof body?.visible === 'boolean') data.visible = body.visible
    if (typeof body?.sortOrder === 'number') data.sortOrder = body.sortOrder

    if (!Object.keys(data).length) {
      return NextResponse.json({ ok: false, error: 'No valid fields to update.' }, { status: 422 })
    }

    const partner = await prisma.partner.update({ where: { id: params.id }, data })
    await prisma.adminLog.create({
      data: { action: 'partner_updated', detail: `Partner "${partner.name}" updated (${Object.keys(data).join(', ')})` },
    })
    return NextResponse.json({ ok: true, partner })
  } catch (err) {
    console.error('[admin/partners] PATCH failed', err)
    return NextResponse.json({ ok: false, error: 'Update failed.' }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const partner = await prisma.partner.delete({ where: { id: params.id } })
    await prisma.adminLog.create({
      data: { action: 'partner_deleted', detail: `Partner "${partner.name}" deleted` },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/partners] DELETE failed', err)
    return NextResponse.json({ ok: false, error: 'Delete failed.' }, { status: 500 })
  }
}
