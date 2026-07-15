import { prisma } from '../../lib/db'
import PartnersManager from './manager'

export const dynamic = 'force-dynamic'

export default async function AdminPartnersPage() {
  const partners = await prisma.partner.findMany({ orderBy: { sortOrder: 'asc' } })
  return <PartnersManager rows={partners} />
}
