import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'

const STATUSES = new Set(['unread', 'read', 'replied'])

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const status = typeof body?.status === 'string' ? body.status : ''
    if (!STATUSES.has(status)) {
      return NextResponse.json({ ok: false, error: 'Invalid status.' }, { status: 422 })
    }
    const contact = await prisma.contact.update({ where: { id: params.id }, data: { status } })
    await prisma.adminLog.create({
      data: { action: 'message_status_changed', detail: `Message ${contact.id} → ${status}` },
    })
    return NextResponse.json({ ok: true, contact })
  } catch (err) {
    console.error('[admin/messages] PATCH failed', err)
    return NextResponse.json({ ok: false, error: 'Update failed.' }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.contact.delete({ where: { id: params.id } })
    await prisma.adminLog.create({
      data: { action: 'message_deleted', detail: `Message ${params.id} deleted` },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/messages] DELETE failed', err)
    return NextResponse.json({ ok: false, error: 'Delete failed.' }, { status: 500 })
  }
}
