import React, { type ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  ['flex items-center justify-center font-medium transition duration-300'],
  {
    variants: {
      variant: {
        default: ' rounded-2xl px-6 py-1',
        round: 'h-10 w-10 rounded-full p-2 text-2xl'
      },
      color: {
        primary: 'bg-primary-600 dark:bg-primary-300 text-white dark:text-black',
        secondary: 'bg-2 border border-p-1 text-1 hover:text-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      color: 'primary'
    }
  }
)

type ButtonProps = {} & ComponentProps<'button'> & VariantProps<typeof buttonVariants>

const Button = ({ className, variant, color, ...props }: ButtonProps): JSX.Element => {
  return (
    <button {...props} className={cn(buttonVariants({ className, variant, color }))}>
      {props.children}
    </button>
  )
}

export { Button, type ButtonProps }
