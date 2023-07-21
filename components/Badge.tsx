import React, { type ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const badgeVariants = cva(['flex text-sm items-center rounded-full px-2 justify-center font-medium w-min'], {
  variants: {
    color: {
      primary: 'bg-primary-600 dark:bg-primary-300 text-primary-reverse',
      secondary: 'bg-secondary border border-primary text-primary'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

type BadgeProps = {} & ComponentProps<'span'> & VariantProps<typeof badgeVariants>

const Badge = ({ children, className, color, ...props }: BadgeProps): JSX.Element => {
  return (
    <span {...props} className={cn(badgeVariants({ className, color }))}>
      {children ?? ''}
    </span>
  )
}

export { Badge, type BadgeProps }
