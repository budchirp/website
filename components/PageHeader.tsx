import React, { ComponentProps } from 'react'

import { cn } from '@/lib/cn'

type PageHeaderProps = {
  topPart?: React.ReactNode
  bottomPart?: React.ReactNode
} & ComponentProps<'div'>

const PageHeader: React.FC<PageHeaderProps> = ({ className, children, topPart, bottomPart, ...props }: PageHeaderProps): JSX.Element => {
  return (
    <div {...props} className={cn('mb-4 mt-8 w-full border-b-[5px] border-gray-50 pb-2 dark:border-gray-800', className)}>
      {topPart && <div className="mt-1 w-full">{topPart}</div>}

      <h2 className="break-all text-3xl font-bold">{children}</h2>

      {bottomPart && <div className="mt-1 w-full">{bottomPart}</div>}
    </div>
  )
}

export { PageHeader, type PageHeaderProps }
