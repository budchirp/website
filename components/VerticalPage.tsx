import React, { type ComponentProps } from 'react'

import { cn } from '@/lib/cn'

type VerticalPageProps = {
  title: React.ReactNode
  items: React.ReactNode[]
} & ComponentProps<'div'>

const VerticalPage: React.ForwardRefExoticComponent<VerticalPageProps & React.RefAttributes<HTMLDivElement>> = React.forwardRef(
  ({ className, children, title, items, ...props }: VerticalPageProps, ref): React.ReactNode => {
    return (
      <div {...props} ref={ref} className={cn('h-screen_ flex flex-col justify-center gap-4', className)}>
        <h2 className="text-accent-primary text-5xl font-bold">{title}</h2>

        <div className="grid gap-1">
          {items.map(
            (item: React.ReactNode, index: number): React.ReactNode => (
              <h2 className="text-secondary text-2xl font-medium" key={index}>
                {item}
              </h2>
            )
          )}
        </div>

        {children && <div>{children}</div>}
      </div>
    )
  }
)
VerticalPage.displayName = 'VerticalPage'

export { VerticalPage, type VerticalPageProps }
