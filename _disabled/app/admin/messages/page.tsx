import { prisma } from '../../lib/db'
import MessagesTable from './table'

export const dynamic = 'force-dynamic'

export default async function AdminMessagesPage() {
  const messages = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } })
  const rows = messages.map((m) => ({ ...m, createdAt: m.createdAt.toISOString() }))
  return <MessagesTable rows={rows} />
}
