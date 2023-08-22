import React from 'react'

import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Button } from '@/components/Button'
import { Box } from '@/components/Box'
import { genMetadata } from '@/lib/gen-metadata'
import data from '@/data'
import Link from 'next/link'

import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Projects' })

const Page: React.FC = async (): Promise<React.ReactNode> => {
  const reposRes = await fetch(`https://api.github.com/users/${data.githubUsername}/repos`, {
    cache: 'no-cache'
  })
  const colorsRes = await fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')

  const repos: any = await reposRes.json()
  const colors: { [key: string]: { color: string; url: string } } = await colorsRes.json()

  return repos.map((repo: any, index: number): React.ReactNode => {
    const currentColor: string | null = colors[repo.language]?.color ?? null

    return (
      <AnimateOnScroll key={index}>
        <Box className="hover:bg-tertiary space-y-1 transition duration-300">
          <Link
            href={repo.html_url}
            rel="noreferrer"
            target="_blank"
            className="text-primary hover:text-tertiary flex w-full items-center break-all text-2xl font-bold transition duration-300"
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
      </AnimateOnScroll>
    )
  })
}

export { metadata }
export default Page
