import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'

export const dynamic = 'force-dynamic'

export async function DELETE() {
  try {
    const { count } = await prisma.adminLog.deleteMany({})
    await prisma.adminLog.create({
      data: { action: 'log_cleared', detail: `${count} log entries cleared` },
    })
    return NextResponse.json({ ok: true, cleared: count })
  } catch (err) {
    console.error('[admin/log] DELETE failed', err)
    return NextResponse.json({ ok: false, error: 'Failed to clear logs.' }, { status: 500 })
  }
}
