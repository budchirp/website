import React, { type ComponentProps } from 'react'

import { cn } from '@/lib/cn'

type ContainerProps = {} & ComponentProps<'div'>

const Container: React.FC<ContainerProps> = ({ children, className, ...props }: ContainerProps): React.ReactNode => {
  return (
    <div {...props} className={cn('mx-auto w-11/12 px-2 md:max-w-screen-sm md:px-4 lg:max-w-screen-md lg:px-6', className)}>
      {children}
    </div>
  )
}

export { Container, type ContainerProps }
