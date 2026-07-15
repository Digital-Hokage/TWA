import { prisma } from '../../lib/db'
import FAQManager from './manager'

export const dynamic = 'force-dynamic'

export default async function AdminFAQsPage() {
  const faqs = await prisma.fAQ.findMany({ orderBy: { sortOrder: 'asc' } })
  return <FAQManager rows={faqs} />
}
