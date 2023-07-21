import React from 'react'

type PageHeaderProps = {
  children: React.ReactNode
  customPart?: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, customPart }: PageHeaderProps): JSX.Element => {
  return (
    <div className="border-gray-50 dark:border-gray-800 mb-4 mt-8 w-full border-b-[5px] pb-2">
      <h2 className="text-3xl font-bold break-all">{children}</h2>

      {customPart && <div className="mt-1">{customPart}</div>}
    </div>
  )
}

export { PageHeader, type PageHeaderProps }
