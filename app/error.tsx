'use client'

import React from 'react'

import { VerticalPage } from '@/components/VerticalPage'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

import type { ErrorProps } from '@/types/error'
import type { Metadata } from 'next'
import { genMetadata } from '@/lib/gen-metadata'

const metadata: Metadata = genMetadata({ title: 'Error' })

const Error: React.FC<ErrorProps> = ({ reset }: ErrorProps): JSX.Element => {
  return (
    <Container>
      <VerticalPage items={['Something', 'went', 'wrong!']} title={':('} customPart={<Button onClick={reset}>Try again</Button>} />
    </Container>
  )
}

export { metadata }
export default Error
