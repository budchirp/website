import React from 'react'

import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Box } from '@/components/Box'
import { genMetadata } from '@/lib/gen-metadata'
import data from '@/data'

import type { Metadata } from 'next'
import Link from 'next/link'

const metadata: Metadata = genMetadata({ title: 'Contact me' })

const Page: React.FC = (): React.ReactNode => {
  return (
    <div className="grid gap-4">
      {Object.keys(data.contact).map((platform: string, index: number): React.ReactNode => {
        /* @ts-ignore */
        const contact = data.contact[platform]

        return (
          <AnimateOnScroll key={index}>
            <Box className="hover:bg-tertiary flex h-16 items-center gap-3 duration-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 bg-opacity-50 p-1 text-xl">{contact.icon}</span>

              <Link
                href={contact.link || '/contact'}
                className="text-primary hover:text-tertiary flex-1 text-xl font-bold transition duration-300"
                rel="noreferrer"
                target="_blank"
              >
                {platform}
              </Link>
            </Box>
          </AnimateOnScroll>
        )
      })}
    </div>
  )
}

export { metadata }
export default Page
