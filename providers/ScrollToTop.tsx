'use client'

import React, { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

type ScrollToTopProps = {
  children: React.ReactNode
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }): React.ReactNode => {
  const pathname = usePathname()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return children
}

export { ScrollToTop }
