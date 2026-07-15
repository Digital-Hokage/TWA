import { prisma } from '../../lib/db'
import StatsEditor from './editor'

export const dynamic = 'force-dynamic'

const LABELS: Record<string, string> = {
  patients:         'Patients on register',
  bmts:             'BMTs performed free',
  years:            'Years of service',
  cost:             'Cost to patients',
  founded:          'Year founded',
  deaths:           'Lives lost (two decades)',
  cvs_procedures:   'CVS procedures',
  babies_delivered: 'Babies delivered in cohort',
}

export default async function AdminStatsPage() {
  const rows = await prisma.siteStat.findMany({ orderBy: { key: 'asc' } })
  const stats = rows.map((r) => ({
    key: r.key,
    value: r.value,
    label: LABELS[r.key] ?? r.key,
    updatedAt: r.updatedAt.toISOString(),
  }))
  return <StatsEditor stats={stats} />
}
