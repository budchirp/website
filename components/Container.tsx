import React, { type ComponentProps } from 'react'

import { cn } from '@/lib/cn'

type ContainerProps = {} & ComponentProps<'div'>

const Container: React.ForwardRefExoticComponent<
  ContainerProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }: ContainerProps, ref): React.ReactNode => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'mx-auto w-11/12 px-2 md:max-w-screen-sm md:px-4 lg:max-w-screen-md lg:px-6',
          className
        )}
      >
        {children}
      </div>
    )
  }
)
Container.displayName = 'Container'

export { Container, type ContainerProps }
