import React from 'react'
import { Box } from '@/components/Box'
import data from '@/data'
import { genMetadata } from '@/lib/gen-metadata'

import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'About me' })

const Page: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="mt-16">
        <p className="text-primary-1 text-3xl font-bold">{data.title}</p>
        <p className="text-lg">
          <span className="text-2 line-through">Almost</span> full-stack developer
        </p>
      </div>

      <div className="mt-8">
        <span className="text-2 mb-2 text-xl font-medium">Technologies</span>

        {Object.keys(data.skills).map(
          (key: string, index: number): JSX.Element => (
            <div key={index}>
              <span className="text-3 text-sm">{key}</span>
              <div className="my-4 grid grid-cols-2 gap-2 md:grid-cols-3">
                {/* @ts-ignore */}
                {data.skills[key].map((skill: any, index: number): JSX.Element => {
                  return (
                    <Box key={index} className="flex items-center space-x-3 !p-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 bg-opacity-50 p-1 text-xl">
                        {skill.icon}
                      </span>
                      <p className="text-2 break-all text-sm">{skill.name}</p>
                    </Box>
                  )
                })}
              </div>
            </div>
          )
        )}
      </div>

      <div data-nosnippet className="mt-8">
        <span className="text-2 mb-2 text-xl font-medium">Programming journey</span>

        <div>
          {Object.keys(data.journey)
            .reverse()
            .map(
              (key: string, index: number): JSX.Element => (
                <div key={index} className="mb-2 grid grid-cols-2">
                  <span className="text-primary-1 text-2xl font-bold">{key}</span>
                  <div>
                    {/* @ts-ignore */}
                    {data.journey[key].map(
                      (text: string, index: number): React.ReactNode => (
                        <div key={index} className="flex">
                          <span className="mr-2 text-primary-600">-</span>
                          <p className="text-secondary">{text}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </>
  )
}

export { metadata }
export default Page
