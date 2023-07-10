import React from 'react'

import { Container } from '@/components/Container'

import type { ErrorProps } from '@/types/error'

const NotFound: React.FC<ErrorProps> = (): JSX.Element => {
  return (
    <Container className="h-screen_ justify-center flex flex-col space-y-4">
      <h2 className="text-5xl font-bold text-primary-500">404</h2>

      <div className="space-y-1 text-3xl font-medium">
        <h2>Page</h2>
        <h2>Not</h2>
        <h2>Found!</h2>
      </div>
    </Container>
  )
}

export default NotFound
