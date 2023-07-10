import React, { type ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(['flex cursor-pointer items-center justify-center font-medium transition duration-300'], {
  variants: {
    variant: {
      default: 'rounded-2xl px-6 py-1',
      round: 'h-10 w-10 rounded-full p-2 text-2xl'
    },
    color: {
      primary: 'bg-primary-600 dark:bg-primary-300 text-1 hover:text-2 hover:bg-primary-700 dark:hover:bg-primary-400',
      secondary: 'bg-2 border border-p-1 text-1 hover:text-2 hover:bg-1'
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
  return (
    <button {...props} className={cn(buttonVariants({ className, variant, color }))}>
      {disabled && <Loader2 className={cn('animate-spin', children ? 'mr-2' : '')} />}
      {children ?? ''}
    </button>
  )
}

export { Button, type ButtonProps }
