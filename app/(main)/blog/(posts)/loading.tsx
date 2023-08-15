import React from 'react'

import { Box } from '@/components/Box'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Button } from '@/components/Button'

const Loading: React.FC = (): JSX.Element => {
  return (
    <>
      {[...Array(10)].map((_: any, index: number): JSX.Element => {
        return (
          <AnimateOnScroll key={index}>
            <Box padding="none" key={index}>
              <hr className="bg-tertiary h-48 w-full animate-pulse rounded-t-2xl" />

              <div className="grid gap-2 p-4">
                <div>
                  <hr className="bg-tertiary h-3 w-8/12 animate-pulse rounded" />
                </div>

                <div className="grid gap-1">
                  <hr className="bg-tertiary h-3 w-full animate-pulse rounded" />
                  <hr className="bg-tertiary h-3 w-full animate-pulse rounded" />
                </div>

                <Button disabled color="secondary">
                  loading
                </Button>
              </div>
            </Box>
          </AnimateOnScroll>
        )
      })}
    </>
  )
}

export default Loading
