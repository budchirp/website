import React from 'react'

import { Box } from '@/components/Box'
import { genMetadata } from '@/lib/gen-metadata'

import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Loading projects...' })

const Loading: React.FC = (): React.ReactNode => {
  return [...Array(10)].map((_, index) => {
    return (
      <Box key={index}>
        <div className="mb-2 pb-2">
          <hr className="bg-tertiary h-3 w-8/12 animate-pulse rounded" />
        </div>

        <div className="mb-2 space-y-1 pb-2">
          <hr className="bg-tertiary h-3 w-full animate-pulse rounded" />
          <hr className="bg-tertiary h-3 w-full animate-pulse rounded" />
        </div>

        <div className="flex items-center justify-between space-y-1">
          <hr className="bg-tertiary h-2 w-3/12 animate-pulse rounded" />
          <hr className="bg-tertiary h-2 w-3/12 animate-pulse rounded" />
        </div>
      </Box>
    )
  })
}

export { metadata }
export default Loading
