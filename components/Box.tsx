import React, { type ComponentProps } from 'react'
import { cn } from '@/lib/cn'
import { VariantProps, cva } from 'class-variance-authority'

const boxVariants = cva(['bg-secondary rounded-2xl'], {
  variants: {
    padding: {
      default: 'px-5 py-3',
      none: ''
    }
  },
  defaultVariants: {
    padding: 'default'
  }
})

type BoxProps = {} & ComponentProps<'div'> & VariantProps<typeof boxVariants>

const Box = ({ children, className, padding, ...props }: BoxProps): JSX.Element => {
  return (
    <div {...props} className={cn(boxVariants({ className, padding }))}>
      {children}
    </div>
  )
}

export { Box, type BoxProps }
