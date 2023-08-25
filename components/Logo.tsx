import React, { ComponentProps } from 'react'

import data from '@/data'
import { cn } from '@/lib/cn'

type LogoProps = {} & ComponentProps<'h1'>

const Logo: React.ForwardRefExoticComponent<LogoProps & React.RefAttributes<HTMLHeadingElement>> = React.forwardRef(
  ({ className, ...props }, ref): React.ReactNode => {
    return (
      <h1 {...props} ref={ref} className={cn('text-primary flex h-full items-center justify-center text-2xl font-bold', className)}>
        {data.title}
      </h1>
    )
  }
)
Logo.displayName = 'Logo'

export { Logo, type LogoProps }
