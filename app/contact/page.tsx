import React from 'react'
import { Box } from '@/components/Box'
import data from '@/data'

const Page: React.FC = (): JSX.Element => {
  return (
    <>
      {Object.keys(data.contact).map((platform: string, index: number): React.ReactNode => {
        /* @ts-ignore */
        const contact = data.contact[platform]

        return (
          <Box
            className="hover:bg-1 duration-250 mb-4 flex items-center justify-center transition-all last:mb-0"
            key={index}
          >
            <div className="flex h-12 w-full items-center space-x-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 bg-opacity-50 p-1 text-xl">
                {contact.icon}
              </span>
              <a
                href={contact.link || '/contact'}
                className="hover:text-3 flex-1 text-xl font-bold transition duration-300"
                rel="noreferrer"
                target="_blank"
              >
                {platform}
              </a>
            </div>
          </Box>
        )
      })}
    </>
  )
}

export default Page
