import { MetadataRoute } from 'next'
import { ORG } from './lib/constants'

const routes = [
  { path: '',                       priority: 1.0, changeFrequency: 'monthly' as const },
  { path: '/about',                 priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/what-is-thalassemia',   priority: 0.8, changeFrequency: 'yearly'  as const },
  { path: '/programs',              priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/get-involved',          priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/donate',                priority: 0.9, changeFrequency: 'weekly'  as const },
  { path: '/transparency',          priority: 0.7, changeFrequency: 'yearly'  as const },
  { path: '/contact',               priority: 0.6, changeFrequency: 'yearly'  as const },
  { path: '/stories',               priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/privacy',               priority: 0.3, changeFrequency: 'yearly'  as const },
  { path: '/terms',                 priority: 0.3, changeFrequency: 'yearly'  as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((r) => ({
    url: `${ORG.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
