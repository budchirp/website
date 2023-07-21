import React from 'react'

import { VerticalPage } from '@/components/VerticalPage'
import { Container } from '@/components/Container'
import { genMetadata } from '@/lib/gen-metadata'

import type { ErrorProps } from '@/types/error'
import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Blog post not found!' })

const NotFound: React.FC<ErrorProps> = (): JSX.Element => {
  return (
    <Container>
      <VerticalPage items={['Blog', 'post', 'not', 'found!']} title={'🙈'} />
    </Container>
  )
}

export { metadata }
export default NotFound