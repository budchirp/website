import React, { type ComponentProps } from 'react'

import { cn } from '@/lib/cn'

type InputProps = {
  icon: React.ReactNode
  label?: React.ReactNode
} & ComponentProps<'input'>

const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> =
  React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, id, icon, ...props }: InputProps, ref): React.ReactNode => {
      return (
        <div className="flex h-min w-full flex-col items-center gap-1">
          <label htmlFor={id}>{label}</label>
          <div className="relative flex h-10 w-full items-center rounded-3xl">
            <div className="absolute inset-y-0 left-0 flex h-10 w-10 items-center justify-center bg-transparent pl-2 text-3xl">
              {icon}
            </div>
            <input
              {...props}
              ref={ref}
              className={cn(
                'bg-primary text-primary placeholder-tertiary border-primary focus:border-secondary flex h-full w-full items-center rounded-3xl border py-2 pl-11 pr-4 transition duration-300',
                className
              )}
            />
          </div>
        </div>
      )
    }
  )
Input.displayName = 'Input'

export { Input, type InputProps }
