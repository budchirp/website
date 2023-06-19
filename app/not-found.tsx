import React from 'react'
import { Container } from '@/components/Container'

const NotFound: React.FC<ErrorProps> = (): JSX.Element => {
  return (
    <Container className="h-screen_ mt-8 flex flex-col space-y-4">
      <h2 className="mt-16 text-4xl font-bold text-primary-500">404</h2>

      <div className="space-y-1 text-3xl font-medium">
        <h2>Page</h2>
        <h2>Not</h2>
        <h2>Found!</h2>
      </div>
    </Container>
  )
}

export default NotFound
