import React from 'react'

import { VerticalPage } from '@/components/VerticalPage'
import { Container } from '@/components/Container'
import { genMetadata } from '@/lib/gen-metadata'

import type { ErrorProps } from '@/types/error'
import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Page not found!' })

const NotFound: React.FC<ErrorProps> = (): React.ReactNode => {
  return (
    <Container>
      <VerticalPage items={['Page', 'not', 'found!']} title={'404'} />
    </Container>
  )
}

export { metadata }
export default NotFound
