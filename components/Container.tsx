import React, { type ComponentProps } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps = {} & ComponentProps<'div'>

const Container: React.FC<ContainerProps> = ({ children, className, ...props }: ContainerProps): JSX.Element => {
  return (
    <div {...props} className={cn('mx-auto w-11/12 max-w-screen-sm px-2', className)}>
      {children}
    </div>
  )
}

export { Container, type ContainerProps }
