import { cn } from '@/lib/cn'
import React from 'react'

type PageHeaderProps = {
  children: React.ReactNode
  topPart?: React.ReactNode
  bottomPart?: React.ReactNode
  className?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, topPart, bottomPart, className }: PageHeaderProps): JSX.Element => {
  return (
    <div className={cn('mb-4 mt-6 w-full border-b-[5px] border-gray-50 pb-2 dark:border-gray-800', className)}>
      {topPart && <div className="mt-1 w-full">{topPart}</div>}

      <h2 className="break-all text-3xl font-bold">{children}</h2>

      {bottomPart && <div className="mt-1 w-full">{bottomPart}</div>}
    </div>
  )
}

export { PageHeader, type PageHeaderProps }
