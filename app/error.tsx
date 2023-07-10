'use client'

import React from 'react'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

import type { ErrorProps } from '@/types/error'

const Error: React.FC<ErrorProps> = ({ reset }: ErrorProps): JSX.Element => {
  return (
    <Container className="h-screen_ justify-center flex flex-col space-y-4">
      <h2 className="text-5xl font-bold text-primary-500">:(</h2>

      <div className="space-y-1 text-3xl font-medium">
        <h2>Something</h2>
        <h2>Went</h2>
        <h2>Wrong!</h2>
      </div>

      <div>
        <Button onClick={reset}>Try again</Button>
      </div>
    </Container>
  )
}

export default Error
