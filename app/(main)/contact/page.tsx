import React from 'react'

import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Box } from '@/components/Box'
import { genMetadata } from '@/lib/gen-metadata'
import data from '@/data'

import type { Metadata } from 'next'
import Link from 'next/link'

const metadata: Metadata = genMetadata({ title: 'Contact me' })

const Page: React.FC = (): JSX.Element => {
  return (
    <>
      {Object.keys(data.contact).map((platform: string, index: number): React.ReactNode => {
        /* @ts-ignore */
        const contact = data.contact[platform]

        return (
          <AnimateOnScroll className="mb-4 last:mb-0" key={index}>
            <Box className="hover:bg-tertiary duration-300 flex items-center justify-center transition-all">
              <div className="flex h-12 w-full items-center space-x-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 bg-opacity-50 p-1 text-xl">
                  {contact.icon}
                </span>

                <Link
                  href={contact.link || '/contact'}
                  className="hover:font-medium flex-1 text-xl font-bold transition-all duration-300"
                  rel="noreferrer"
                  target="_blank"
                >
                  {platform}
                </Link>
              </div>
            </Box>
          </AnimateOnScroll>
        )
      })}
    </>
  )
}

export { metadata }
export default Page
