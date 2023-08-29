import React from 'react'
import { genMetadata } from '@/lib/gen-metadata'

import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'

const metadata: Metadata = genMetadata({ title: 'Loading the post...' })

const Loading: React.FC = (): React.ReactNode => {
  return <PageHeader>Loading...</PageHeader>
}

export { metadata }
export default Loading
