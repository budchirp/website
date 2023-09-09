import React, { type ComponentProps } from 'react'

import { cn } from '@/lib/cn'

type PageHeaderProps = {
  topPart?: React.ReactNode
  bottomPart?: React.ReactNode
} & ComponentProps<'div'>

const PageHeader: React.ForwardRefExoticComponent<
  PageHeaderProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  (
    { className, children, topPart, bottomPart, ...props }: PageHeaderProps,
    ref
  ): React.ReactNode => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn('border-primary mb-4 mt-8 grid w-full gap-1 border-b-4 pb-2', className)}
      >
        {topPart}

        <h2 className="break-all text-3xl font-bold">{children}</h2>

        {bottomPart}
      </div>
    )
  }
)
PageHeader.displayName = 'PageHeader'

export { PageHeader, type PageHeaderProps }
