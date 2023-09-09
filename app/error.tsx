'use client'

import React from 'react'

import { VerticalPage } from '@/components/VerticalPage'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { genMetadata } from '@/lib/gen-metadata'

import type { ErrorProps } from '@/types/error'
import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Error' })

const Error: React.FC<ErrorProps> = ({ reset }: ErrorProps): React.ReactNode => {
  return (
    <Container>
      <VerticalPage items={['Something', 'went', 'wrong']} title={':('}>
        <Button onClick={reset}>Try again</Button>
      </VerticalPage>
    </Container>
  )
}

export { metadata }
export default Error
