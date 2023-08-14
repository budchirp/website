import React from 'react'

type VerticalPageProps = {
  title: React.ReactNode
  items: React.ReactNode[]
  customPart?: React.ReactNode
}

const VerticalPage: React.FC<VerticalPageProps> = ({ title, items, customPart }: VerticalPageProps): JSX.Element => {
  return (
    <div className="h-screen_ flex flex-col justify-center space-y-4">
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

      {customPart && <div>{customPart}</div>}
    </div>
  )
}

export { VerticalPage, type VerticalPageProps }
