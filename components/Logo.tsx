import React, { type ComponentProps } from 'react'

import { cn } from '@/lib/cn'
import data from '@/data'
import Link from 'next/link'

type LogoProps = {} & Omit<ComponentProps<'h1'>, 'children'>

const Logo: React.ForwardRefExoticComponent<LogoProps & React.RefAttributes<HTMLHeadingElement>> = React.forwardRef<HTMLHeadingElement, LogoProps>(
  ({ className, ...props }, ref): React.ReactNode => {
    const label = `${data.title} logo`

    return (
      <Link href="/" aria-label={label}>
        <h1
          {...props}
          ref={ref}
          aria-label={label}
          className={cn('text-primary flex h-full items-center justify-center text-2xl font-bold', className)}
        >
          {data.title}
        </h1>
      </Link>
    )
  }
)
Logo.displayName = 'Logo'

export { Logo, type LogoProps }
