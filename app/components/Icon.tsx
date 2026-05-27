import React from 'react'

type IconProps = {
  name: IconName
  size?: number
  strokeWidth?: number
  className?: string
  'aria-label'?: string
}

export type IconName =
  | 'heart' | 'droplet' | 'shield' | 'stethoscope' | 'users'
  | 'check' | 'check-circle' | 'arrow-right' | 'arrow-up-right'
  | 'phone' | 'mail' | 'map-pin' | 'clock'
  | 'menu' | 'x' | 'chevron-down' | 'chevron-right'
  | 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin'
  | 'building' | 'file-text' | 'award' | 'calendar'
  | 'pill' | 'flask' | 'bus' | 'rupee' | 'globe' | 'info'

const PATHS: Record<IconName, React.ReactNode> = {
  heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />,
  droplet: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  stethoscope: <><path d="M6 2v6a4 4 0 0 0 8 0V2" /><path d="M10 12v3a5 5 0 0 0 10 0v-1" /><circle cx="20" cy="10" r="2" /></>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  check: <polyline points="20 6 9 17 4 12" />,
  'check-circle': <><circle cx="12" cy="12" r="10" /><polyline points="9 12 12 15 16 10" /></>,
  'arrow-right': <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
  'arrow-up-right': <><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22 6 12 13 2 6" /></>,
  'map-pin': <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  menu: <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>,
  x: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
  'chevron-down': <polyline points="6 9 12 15 18 9" />,
  'chevron-right': <polyline points="9 18 15 12 9 6" />,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  instagram: <><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37a4 4 0 1 1-7.91 1.18A4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
  twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
  youtube: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  building: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="9" x2="9" y2="9" /><line x1="15" y1="9" x2="15" y2="9" /><line x1="9" y1="15" x2="9" y2="15" /><line x1="15" y1="15" x2="15" y2="15" /></>,
  'file-text': <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>,
  award: <><circle cx="12" cy="8" r="6" /><polyline points="15.477 12.89 17 22 12 19 7 22 8.523 12.89" /></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  pill: <><path d="M10.5 20.5a7 7 0 0 1-9.9-9.9L9 2.6a7 7 0 0 1 9.9 9.9z" /><line x1="6" y1="6" x2="17" y2="17" /></>,
  flask: <><path d="M9 2v6L3 20a2 2 0 0 0 1.8 3h14.4A2 2 0 0 0 21 20L15 8V2" /><line x1="9" y1="2" x2="15" y2="2" /></>,
  bus: <><rect x="3" y="6" width="18" height="13" rx="2" /><line x1="3" y1="13" x2="21" y2="13" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" /></>,
  rupee: <><path d="M6 3h12" /><path d="M6 8h12" /><path d="M6 13l9 8" /><path d="M6 13c5 0 7-2 7-5" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  info: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>,
}

export default function Icon({ name, size = 20, strokeWidth = 1.8, className, ...rest }: IconProps) {
  const label = rest['aria-label']
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}
