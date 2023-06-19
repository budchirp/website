'use client'

import React from 'react'
import { Container } from '@/components/Container'

const Error: React.FC<ErrorProps> = ({ error, reset }: ErrorProps): JSX.Element => {
  return (
    <Container className="h-screen_ mt-8 flex flex-col space-y-4">
      <h2 className="mt-16 text-4xl font-bold text-primary-500">Error!</h2>

      <div className="space-y-1 text-3xl font-medium">
        <h2>Something</h2>
        <h2>Went</h2>
        <h2>Wrong!</h2>
      </div>
    </Container>
  )
}

export default Error
