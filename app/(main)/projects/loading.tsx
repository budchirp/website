import React from 'react'

import { Box } from '@/components/Box'

const Loading: React.FC = (): JSX.Element => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <Box key={index}>
            <div className="mb-2 pb-2">
              <hr className="h-3 w-8/12 animate-pulse rounded bg-tertiary" />
            </div>

            <div className="mb-2 space-y-1 pb-2">
              <hr className="h-3 w-full animate-pulse rounded bg-tertiary" />
              <hr className="h-3 w-full animate-pulse rounded bg-tertiary" />
            </div>

            <div className="flex items-center justify-between space-y-1">
              <hr className="h-2 w-3/12 animate-pulse rounded bg-tertiary" />
              <hr className="h-2 w-3/12 animate-pulse rounded bg-tertiary" />
            </div>
          </Box>
        )
      })}
    </>
  )
}

export default Loading
