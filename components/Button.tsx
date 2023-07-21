import React, { type ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(['flex active:scale-95 cursor-pointer items-center justify-center font-bold transition-all duration-150'], {
  variants: {
    variant: {
      default: 'rounded-2xl px-6 py-1',
      round: 'h-10 w-10 rounded-full p-2 text-2xl'
    },
    color: {
      primary: 'bg-accent-600 dark:bg-accent-300 text-primary-reverse hover:text-secondary-reverse hover:bg-primary-700 dark:hover:bg-primary-400',
      secondary: 'bg-secondary border border-primary hover:border-secondary text-primary hover:text-secondary hover:bg-tertiary'
    }
  },
  defaultVariants: {
    variant: 'default',
    color: 'primary'
  }
})

type ButtonProps = {} & ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    children?: React.ReactNode
  }

const Button = ({ children, disabled, className, variant, color, ...props }: ButtonProps): JSX.Element => {
  if (!children) disabled = true

  return (
    <button {...props} className={cn(buttonVariants({ className, variant, color }))}>
      {disabled && <Loader2 className={cn('animate-spin', children ? 'mr-2' : '')} />}
      {children ?? ''}
    </button>
  )
}

export { Button, type ButtonProps }
