import { prisma } from '../../lib/db'
import MediaManager from './manager'

export const dynamic = 'force-dynamic'

export default async function AdminMediaPage() {
  const articles = await prisma.mediaArticle.findMany({
    orderBy: [{ sortOrder: 'asc' }],
  })
  const rows = articles.map((a) => ({ ...a, createdAt: a.createdAt.toISOString() }))
  return <MediaManager rows={rows} />
}
