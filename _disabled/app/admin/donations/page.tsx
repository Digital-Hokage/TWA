import { prisma } from '../../lib/db'
import DonationsTable from './table'

export const dynamic = 'force-dynamic'

export default async function AdminDonationsPage() {
  const donations = await prisma.donation.findMany({ orderBy: { createdAt: 'desc' } })
  const rows = donations.map((d) => ({ ...d, createdAt: d.createdAt.toISOString() }))
  return <DonationsTable rows={rows} />
}
