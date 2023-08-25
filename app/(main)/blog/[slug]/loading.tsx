import React from 'react'
import { genMetadata } from '@/lib/gen-metadata'

import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Loading the post...' })

const Loading: React.FC = (): React.ReactNode => {
  return <p className="text-lg font-medium">Loading...</p>
}

export { metadata }
export default Loading
