import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'

const STATUSES = new Set(['pending', 'confirmed', 'failed'])

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const status = typeof body?.status === 'string' ? body.status : ''
    if (!STATUSES.has(status)) {
      return NextResponse.json({ ok: false, error: 'Invalid status.' }, { status: 422 })
    }
    const donation = await prisma.donation.update({ where: { id: params.id }, data: { status } })
    await prisma.adminLog.create({
      data: { action: 'donation_status_changed', detail: `Donation ${donation.id} → ${status}` },
    })
    return NextResponse.json({ ok: true, donation })
  } catch (err) {
    console.error('[admin/donations] PATCH failed', err)
    return NextResponse.json({ ok: false, error: 'Update failed.' }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.donation.delete({ where: { id: params.id } })
    await prisma.adminLog.create({
      data: { action: 'donation_deleted', detail: `Donation ${params.id} deleted` },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/donations] DELETE failed', err)
    return NextResponse.json({ ok: false, error: 'Delete failed.' }, { status: 500 })
  }
}
