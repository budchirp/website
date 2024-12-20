import type React from 'react'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/cn'

export type HeadingProps = {
  cover?: React.ReactNode
  description?: React.ReactNode
} & ComponentProps<'div'>

export const Heading: React.FC<HeadingProps> = ({
  className,
  children,
  cover,
  description,
  ...props
}: HeadingProps): React.ReactNode => {
  return (
    <div {...props} className={cn('mb-4 mt-12 grid w-full gap-1 pb-2', className)}>
      {cover}

      <h2 className='break-all text-3xl font-bold'>{children}</h2>

      {description}

      <span className='bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700 h-1' />
    </div>
  )
}
Heading.displayName = 'PageHeader'
