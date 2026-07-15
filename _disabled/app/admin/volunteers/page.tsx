import { prisma } from '../../lib/db'
import VolunteersTable from './table'

export const dynamic = 'force-dynamic'

export default async function AdminVolunteersPage() {
  const volunteers = await prisma.volunteer.findMany({ orderBy: { createdAt: 'desc' } })
  const rows = volunteers.map((v) => ({ ...v, createdAt: v.createdAt.toISOString() }))
  return <VolunteersTable rows={rows} />
}
