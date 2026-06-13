'use client'

import { type ReactNode, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          ob.unobserve(el)
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' },
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction}${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
