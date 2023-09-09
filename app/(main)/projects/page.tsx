import React from 'react'

import { Button } from '@/components/Button'
import { Box } from '@/components/Box'
import { genMetadata } from '@/lib/gen-metadata'
import data from '@/data'
import Link from 'next/link'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const metadata: Metadata = genMetadata({ title: 'Projects' })

const Page: React.FC = async (): Promise<JSX.Element> => {
  const reposResponse = await fetch(`https://api.github.com/users/${data.githubUsername}/repos`)
  const colorsResponse = await fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')

  const repos: any = await reposResponse.json()
  const colors: { [key: string]: { color: string; url: string } } = await colorsResponse.json()

  if (!repos || !Array.isArray(repos)) {
    notFound()
  }

  return (
    <div className="masonry">
      {repos.map((repo: any, index: number): React.ReactNode => {
        const currentColor: string | null = colors[repo.language]?.color ?? null

        return (
          <Box key={index} className="hover:bg-tertiary group mb-4 grid h-max w-full gap-1 transition duration-300 last:mb-0">
            <Link
              href={repo.html_url}
              rel="noreferrer"
              target="_blank"
              className="text-primary group-hover:text-secondary flex w-full items-center break-all text-2xl font-bold transition duration-300"
            >
              {repo.name}
            </Link>

            {repo.description && <p className="text-secondary w-full text-sm">{repo.description}</p>}

            {repo.language && (
              <div className="flex items-center justify-between">
                {repo.language && (
                  <span style={{ ...(currentColor ? { color: currentColor as string } : {}) }} className={!currentColor ? 'text-secondary' : ''}>
                    {repo.language}
                  </span>
                )}
                {repo.homepage && (
                  <Link href={repo.homepage} className="w-min" target="_blank" rel="noreferrer">
                    <Button>Preview</Button>
                  </Link>
                )}
              </div>
            )}
          </Box>
        )
      })}
    </div>
  )
}

export { metadata }
export default Page
