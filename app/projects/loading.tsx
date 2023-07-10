import React from 'react'

import { Box } from '@/components/Box'

const Loading: React.FC = (): JSX.Element => {
  return (
    <Box>
      <div className="mb-2 pb-2">
        <hr className="h-3 w-8/12 animate-pulse rounded bg-3" />
      </div>
      <div className="mb-2 space-y-1 pb-2">
        <hr className="h-3 w-full animate-pulse rounded bg-3" />
        <hr className="h-3 w-full animate-pulse rounded bg-3" />
      </div>

      <div className="flex items-center justify-between space-y-1">
        <hr className="h-2 w-3/12 animate-pulse rounded bg-3" />
        <hr className="h-2 w-3/12 animate-pulse rounded bg-3" />
      </div>
    </Box>
  )
}

export default Loading
