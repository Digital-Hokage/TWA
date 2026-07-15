import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'

const STATUSES = new Set(['new', 'contacted', 'onboarded', 'declined'])

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const status = typeof body?.status === 'string' ? body.status : ''
    if (!STATUSES.has(status)) {
      return NextResponse.json({ ok: false, error: 'Invalid status.' }, { status: 422 })
    }
    const volunteer = await prisma.volunteer.update({ where: { id: params.id }, data: { status } })
    await prisma.adminLog.create({
      data: { action: 'volunteer_status_changed', detail: `Volunteer ${volunteer.id} → ${status}` },
    })
    return NextResponse.json({ ok: true, volunteer })
  } catch (err) {
    console.error('[admin/volunteers] PATCH failed', err)
    return NextResponse.json({ ok: false, error: 'Update failed.' }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.volunteer.delete({ where: { id: params.id } })
    await prisma.adminLog.create({
      data: { action: 'volunteer_deleted', detail: `Volunteer ${params.id} deleted` },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/volunteers] DELETE failed', err)
    return NextResponse.json({ ok: false, error: 'Delete failed.' }, { status: 500 })
  }
}
