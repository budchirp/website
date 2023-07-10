import React from 'react'

type PageHeaderProps = {
  children: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }: PageHeaderProps): JSX.Element => {
  return (
    <div className="border-gray-100 dark:border-gray-800 mb-4 mt-8 w-full border-b-[5px] px-2 pb-2">
      <h2 className="text-3xl font-bold">{children}</h2>
    </div>
  )
}

export { PageHeader, type PageHeaderProps }
