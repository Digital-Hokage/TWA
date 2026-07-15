import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const key = typeof body?.key === 'string' ? body.key.trim() : ''
    const value = typeof body?.value === 'string' ? body.value.trim() : ''
    if (!key || !value) {
      return NextResponse.json({ ok: false, error: 'Both key and value are required.' }, { status: 422 })
    }
    const stat = await prisma.siteStat.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    })
    await prisma.adminLog.create({
      data: { action: 'stat_updated', detail: `Stat "${key}" → "${value}"` },
    })
    return NextResponse.json({ ok: true, stat })
  } catch (err) {
    console.error('[admin/stats] PATCH failed', err)
    return NextResponse.json({ ok: false, error: 'Update failed.' }, { status: 500 })
  }
}
