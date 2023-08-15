import React from 'react'

import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Box } from '@/components/Box'
import { genMetadata } from '@/lib/gen-metadata'
import data from '@/data'

import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'About me' })

const Page: React.FC = (): JSX.Element => {
  return (
    <div className="mt-16 grid gap-4">
      <AnimateOnScroll>
        <p className="text-accent-primary text-3xl font-bold">{data.title}</p>
        <p className="text-lg">
          <span className="text-secondary line-through">Almost</span> full-stack developer
        </p>
      </AnimateOnScroll>

      <div className="grid gap-2">
        <AnimateOnScroll>
          <p className="text-secondary text-xl font-medium">Technologies</p>
        </AnimateOnScroll>

        <div>
          {Object.keys(data.skills).map(
            (key: string, index: number): JSX.Element => (
              <AnimateOnScroll key={index}>
                <span className="text-tertiary text-sm">{key}</span>
                <div className="my-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* @ts-ignore */}
                  {data.skills[key].map((skill: any, index: number): JSX.Element => {
                    return (
                      <Box key={index} padding="none" className="flex items-center space-x-3 p-2">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 bg-opacity-50 p-1 text-xl">
                          {skill.icon}
                        </span>
                        <p className="text-secondary break-all text-sm font-medium">{skill.name}</p>
                      </Box>
                    )
                  })}
                </div>
              </AnimateOnScroll>
            )
          )}
        </div>
      </div>

      <div data-nosnippet className="grid gap-2">
        <AnimateOnScroll>
          <p className="text-secondary text-xl font-medium">Programming journey</p>
        </AnimateOnScroll>

        <div>
          {Object.keys(data.journey)
            .reverse()
            .map(
              (key: string, index: number): JSX.Element => (
                <AnimateOnScroll key={index} className="mb-2 grid grid-cols-2">
                  <span className="text-accent-primary text-2xl font-bold">{key}</span>
                  <div>
                    {/* @ts-ignore */}
                    {data.journey[key].map(
                      (text: string, index: number): JSX.Element => (
                        <div key={index} className="flex">
                          <span className="text-primary-600 mr-2">-</span>
                          <p className="text-secondary">{text}</p>
                        </div>
                      )
                    )}
                  </div>
                </AnimateOnScroll>
              )
            )}
        </div>
      </div>
    </div>
  )
}

export { metadata }
export default Page
