import React, { type ComponentProps } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
  ['flex disabled:opacity-75 disabled:animate-pulse active:scale-95 cursor-pointer items-center justify-center font-bold transition duration-300'],
  {
    variants: {
      variant: {
        default: 'rounded-2xl px-6 py-1',
        round: 'h-10 w-10 rounded-full p-2 text-2xl'
      },
      color: {
        primary: 'bg-accent-600 text-white hover:text-gray-200 disabled:text-gray-200 hover:bg-primary-700 dark:hover:bg-primary-400',
        secondary:
          'bg-secondary border border-primary hover:border-tertiary disabled:text-tertiary text-primary hover:text-secondary hover:bg-tertiary'
      }
    },
    defaultVariants: {
      variant: 'default',
      color: 'primary'
    }
  }
)

type ButtonProps = {} & ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    children?: React.ReactNode
  }

const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, disabled, className, variant, color, ...props }: ButtonProps, ref): React.ReactNode => {
  if (!children) disabled = true

  return (
    <button {...props} ref={ref} className={cn(buttonVariants({ className, variant, color }))}>
      {disabled && <Loader2 className={cn('animate-spin text-xs', children ? 'mr-2' : '')} />}
      {children ?? ''}
    </button>
  )
})
Button.displayName = 'Button'

export { Button, type ButtonProps }
