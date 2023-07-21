'use client'

import React, { type ComponentProps } from 'react'
import { cn } from '@/lib/cn'
import { useElementOnScreen } from '@/lib/useElementOnScreen'

type AnimateOnScrollProps = {} & ComponentProps<'div'>

const AnimateOnScroll = (props: AnimateOnScrollProps): JSX.Element => {
  const [ref, visible] = useElementOnScreen()

  return (
    <div
      {...props}
      ref={ref}
      className={cn('transition duration-300', visible ? 'ease-out opacity-100 blur-none' : 'opacity-0 blur-sm ease-in', props.className)}
    >
      {props.children}
    </div>
  )
}

export { AnimateOnScroll, type AnimateOnScrollProps }
