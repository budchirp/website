'use client'

import React, { type ComponentProps } from 'react'

import { useElementOnScreen } from '@/lib/useElementOnScreen'
import { cn } from '@/lib/cn'

type AnimateOnScrollProps = {} & ComponentProps<'div'>

const AnimateOnScroll = ({ children, className, ...props }: AnimateOnScrollProps): React.ReactNode => {
  const [ref, visible] = useElementOnScreen()

  return (
    <div {...props} ref={ref} className={cn('transition duration-300', visible ? 'opacity-100 ease-out' : 'opacity-0 ease-in', className)}>
      {children}
    </div>
  )
}
AnimateOnScroll.displayName = 'AnimateOnScroll'

export { AnimateOnScroll, type AnimateOnScrollProps }
