import React, { type ComponentProps } from 'react'

import { cn } from '@/lib/cn'
import { VariantProps, cva } from 'class-variance-authority'

const boxVariants = cva(['rounded-2xl'], {
  variants: {
    variant: {
      primary: 'bg-primary border border-primary',
      secondary: 'bg-secondary'
    },
    padding: {
      default: 'px-5 py-3',
      none: ''
    }
  },
  defaultVariants: {
    padding: 'default',
    variant: 'secondary'
  }
})

type BoxProps = {} & ComponentProps<'div'> & VariantProps<typeof boxVariants>

const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>> = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, className, padding, variant, ...props }: BoxProps, ref): React.ReactNode => {
    return (
      <div {...props} ref={ref} className={cn(boxVariants({ className, padding, variant }))}>
        {children}
      </div>
    )
  }
)
Box.displayName = 'Box'

export { Box, type BoxProps }
