import React, { type ComponentProps } from 'react'
import { cn } from '@/lib/cn'

type BoxProps = {} & ComponentProps<'div'>

const Box = (props: BoxProps): JSX.Element => {
  return (
    <div {...props} className={cn('bg-2 rounded-2xl px-4 py-2', props.className)}>
      {props.children}
    </div>
  )
}

export { Box, type BoxProps }
