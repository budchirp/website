import React from 'react'

import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Box } from '@/components/Box'
import { genMetadata } from '@/lib/gen-metadata'

import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Loading projects...' })

const Loading: React.FC = (): React.ReactNode => {
  return [...Array(10)].map((_: any, index: number): React.ReactNode => {
    return (
      <AnimateOnScroll key={index}>
        <Box className="grid gap-2">
          <hr className="bg-tertiary h-3 w-8/12 animate-pulse rounded" />

          <div className="grid gap-1">
            <hr className="bg-tertiary h-2 w-full animate-pulse rounded" />
            <hr className="bg-tertiary h-2 w-full animate-pulse rounded" />
          </div>

          <div className="flex items-center justify-between gap-2">
            <hr className="bg-tertiary h-3 w-3/12 animate-pulse rounded" />
            <hr className="bg-tertiary h-3 w-3/12 animate-pulse rounded" />
          </div>
        </Box>
      </AnimateOnScroll>
    )
  })
}

export { metadata }
export default Loading
