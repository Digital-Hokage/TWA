import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const data: Record<string, unknown> = {}
    if (typeof body?.question === 'string') data.question = body.question.trim()
    if (typeof body?.answer === 'string') data.answer = body.answer.trim()
    if (typeof body?.visible === 'boolean') data.visible = body.visible
    if (typeof body?.sortOrder === 'number') data.sortOrder = body.sortOrder

    if (!Object.keys(data).length) {
      return NextResponse.json({ ok: false, error: 'No valid fields to update.' }, { status: 422 })
    }

    const faq = await prisma.fAQ.update({ where: { id: params.id }, data })
    await prisma.adminLog.create({
      data: { action: 'faq_updated', detail: `FAQ "${faq.question.slice(0, 60)}" updated` },
    })
    return NextResponse.json({ ok: true, faq })
  } catch (err) {
    console.error('[admin/faqs] PATCH failed', err)
    return NextResponse.json({ ok: false, error: 'Update failed.' }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const faq = await prisma.fAQ.delete({ where: { id: params.id } })
    await prisma.adminLog.create({
      data: { action: 'faq_deleted', detail: `FAQ "${faq.question.slice(0, 60)}" deleted` },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/faqs] DELETE failed', err)
    return NextResponse.json({ ok: false, error: 'Delete failed.' }, { status: 500 })
  }
}
