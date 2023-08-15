import React, { ComponentProps } from 'react'

import { cn } from '@/lib/cn'

type VerticalPageProps = {
  title: React.ReactNode
  items: React.ReactNode[]
} & ComponentProps<'div'>

const VerticalPage: React.FC<VerticalPageProps> = ({ className, children, title, items, ...props }: VerticalPageProps): JSX.Element => {
  return (
    <div {...props} className={cn('h-screen_ flex flex-col justify-center space-y-4', className)}>
      <h2 className="text-accent-primary text-5xl font-bold">{title}</h2>

      <div className="space-y-1">
        {items.map(
          (item: React.ReactNode, index: number): JSX.Element => (
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

export { VerticalPage, type VerticalPageProps }
