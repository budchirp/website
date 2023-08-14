import React from 'react'

import { Box } from '@/components/Box'

const Loading: React.FC = (): JSX.Element => {
  return (
    <>
      {[...Array(5)].map((_: any, index: number): JSX.Element => {
        return (
          <Box key={index}>
            <div className="mb-2">
              <hr className="bg-tertiary h-48 w-8/12 animate-pulse rounded-2xl" />
            </div>

            <div className="mb-2">
              <hr className="bg-tertiary h-3 w-8/12 animate-pulse rounded" />
            </div>

            <div className="mb-2 space-y-1">
              <hr className="bg-tertiary h-3 w-full animate-pulse rounded" />
              <hr className="bg-tertiary h-3 w-full animate-pulse rounded" />
            </div>

            <div>
              <hr className="bg-tertiary h-3 w-full animate-pulse rounded" />
            </div>
          </Box>
        )
      })}
    </>
  )
}

export default Loading
