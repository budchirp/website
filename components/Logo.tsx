import React, { ComponentProps } from 'react'

import data from '@/data'
import { cn } from '@/lib/cn'

type LogoProps = {} & ComponentProps<'h1'>

const Logo: React.FC<LogoProps> = ({ className, ...props }): JSX.Element => {
  return (
    <h1 {...props} className={cn('text-primary flex h-full items-center justify-center text-2xl font-bold', className)}>
      {data.title}
    </h1>
  )
}

export { Logo, type LogoProps }
