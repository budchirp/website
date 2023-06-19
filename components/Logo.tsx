import React from 'react'
import data from '@/data'

type LogoProps = {}

const Logo: React.FC<LogoProps> = (): JSX.Element => {
  return (
    <h1 className="text-1 flex h-full items-center justify-center text-2xl font-bold">
      {data.title}
    </h1>
  )
}

export { Logo, type LogoProps }
