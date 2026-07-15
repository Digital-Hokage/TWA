import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'

export async function GET() {
  const faqs = await prisma.fAQ.findMany({ orderBy: { sortOrder: 'asc' } })
  return NextResponse.json({ ok: true, faqs })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const question = typeof body?.question === 'string' ? body.question.trim() : ''
    const answer = typeof body?.answer === 'string' ? body.answer.trim() : ''
    if (!question || !answer) {
      return NextResponse.json({ ok: false, error: 'Question and answer are required.' }, { status: 422 })
    }
    const last = await prisma.fAQ.findFirst({ orderBy: { sortOrder: 'desc' } })
    const faq = await prisma.fAQ.create({
      data: {
        question,
        answer,
        visible: body?.visible === undefined ? true : Boolean(body.visible),
        sortOrder: (last?.sortOrder ?? 0) + 1,
      },
    })
    await prisma.adminLog.create({ data: { action: 'faq_created', detail: `FAQ "${question.slice(0, 60)}"` } })
    return NextResponse.json({ ok: true, faq })
  } catch (err) {
    console.error('[admin/faqs] POST failed', err)
    return NextResponse.json({ ok: false, error: 'Create failed.' }, { status: 500 })
  }
}
