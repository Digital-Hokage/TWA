'use client'
import { useEffect, useState } from 'react'

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('desktop')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setScreenSize('mobile')
      else if (window.innerWidth <= 768) setScreenSize('tablet')
      else if (window.innerWidth <= 1024) setScreenSize('laptop')
      else setScreenSize('desktop')
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}

export const getResponsiveStyles = (screenSize: string) => ({
  hero: {
    padding: screenSize === 'mobile' ? '4rem 0' : screenSize === 'tablet' ? '5rem 0' : '8rem 0',
    minHeight: screenSize === 'mobile' ? '80vh' : '100vh'
  },
  title: {
    fontSize: screenSize === 'mobile' ? '2.5rem' : screenSize === 'tablet' ? '3.5rem' : '4.5rem',
    lineHeight: screenSize === 'mobile' ? '1.2' : '1.1'
  },
  subtitle: {
    fontSize: screenSize === 'mobile' ? '2rem' : screenSize === 'tablet' ? '2.5rem' : '3rem'
  },
  text: {
    fontSize: screenSize === 'mobile' ? '1rem' : screenSize === 'tablet' ? '1.2rem' : '1.3rem'
  },
  section: {
    padding: screenSize === 'mobile' ? '3rem 0' : screenSize === 'tablet' ? '4rem 0' : '6rem 0'
  },
  grid: {
    gridTemplateColumns: screenSize === 'mobile' 
      ? '1fr' 
      : screenSize === 'tablet' 
      ? 'repeat(auto-fit, minmax(250px, 1fr))' 
      : 'repeat(auto-fit, minmax(300px, 1fr))'
  },
  container: {
    padding: screenSize === 'mobile' ? '0 1rem' : screenSize === 'tablet' ? '0 1.5rem' : '0 2rem',
    maxWidth: screenSize === 'mobile' ? '100%' : screenSize === 'tablet' ? '95%' : '1200px'
  }
})