import { prisma } from '../../lib/db'
import LogViewer from './viewer'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 50

export default async function AdminLogPage({
  searchParams,
}: {
  searchParams: { page?: string; action?: string }
}) {
  const page = Math.max(1, Number(searchParams.page) || 1)
  const action = searchParams.action || undefined

  const where = action ? { action } : {}
  const [entries, total, actionRows] = await Promise.all([
    prisma.adminLog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.adminLog.count({ where }),
    prisma.adminLog.findMany({ distinct: ['action'], select: { action: true }, orderBy: { action: 'asc' } }),
  ])

  return (
    <LogViewer
      entries={entries.map((e) => ({ ...e, createdAt: e.createdAt.toISOString() }))}
      total={total}
      page={page}
      pageSize={PAGE_SIZE}
      actions={actionRows.map((a) => a.action)}
      activeAction={action ?? ''}
    />
  )
}
