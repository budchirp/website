import React from 'react'

type VerticalPageProps = {
  title: React.ReactNode
  items: React.ReactNode[]
  customPart?: React.ReactNode
}

const VerticalPage: React.FC<VerticalPageProps> = ({ title, items, customPart }: VerticalPageProps): JSX.Element => {
  return (
    <div className="h-screen_ justify-center flex flex-col space-y-4">
      <h2 className="text-5xl font-bold text-accent-primary">{title}</h2>

      <div className="space-y-1">
        {items.map(
          (item: React.ReactNode, index: number): JSX.Element => (
            <h2 className="font-medium text-secondary text-2xl" key={index}>
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
