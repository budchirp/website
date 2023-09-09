import React from 'react'

import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Box } from '@/components/Box'
import { genMetadata } from '@/lib/gen-metadata'

import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Loading projects...' })

const Loading: React.FC = (): React.ReactNode => {
  return (
    <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(10)].map((_: any, index: number): React.ReactNode => {
        return (
          <AnimateOnScroll key={index}>
            <Box className="grid gap-2">
              <div className="bg-tertiary h-3 w-8/12 animate-pulse rounded" />

              <div className="grid gap-1">
                <div className="bg-tertiary h-2 w-full animate-pulse rounded" />
                <div className="bg-tertiary h-2 w-full animate-pulse rounded" />
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="bg-tertiary h-3 w-3/12 animate-pulse rounded" />
                <div className="bg-tertiary h-3 w-3/12 animate-pulse rounded" />
              </div>
            </Box>
          </AnimateOnScroll>
        )
      })}
    </div>
  )
}

export { metadata }
export default Loading
