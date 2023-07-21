import React from 'react'

type PageHeaderProps = {
  children: React.ReactNode
  topPart?: React.ReactNode
  bottomPart?: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, topPart, bottomPart }: PageHeaderProps): JSX.Element => {
  return (
    <div className="border-gray-50 dark:border-gray-800 mb-4 mt-6 w-full border-b-[5px] pb-2">
      {topPart && <div className="mt-1 w-full">{topPart}</div>}

      <h2 className="text-3xl font-bold break-all">{children}</h2>

      {bottomPart && <div className="mt-1 w-full">{bottomPart}</div>}
    </div>
  )
}

export { PageHeader, type PageHeaderProps }
