import React from 'react'

import { Button } from '@/components/button'
import { Box } from '@/components/box'
import { genMetadata } from '@/lib/gen-metadata'
import data from '@/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import type { Metadata } from 'next'

const metadata: Metadata = genMetadata({ title: 'Projects' })

const Page: React.FC = async (): Promise<JSX.Element> => {
  const colorsResponse = await fetch(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
  )
  const colors: { [key: string]: { color: string; url: string } } = await colorsResponse.json()

  let reposWithSources: { [key: string]: any[] } = {}

  await Promise.all(
    data.projectSources.map(async (source: string) => {
      const response = await fetch(`https://api.github.com/users/${source}/repos`)

      reposWithSources[source] = await response.json()
    })
  ).then(() => {
    data.projectSources.map((source: string) => {
      reposWithSources[source] = reposWithSources[source]
    })
  })

  if (!reposWithSources || Object.keys(reposWithSources).length < 1) {
    notFound()
  }

  return (
    <div className="grid gap-2">
      {Object.keys(reposWithSources).map((source: any, index: number): React.ReactNode => {
        return (
          <div className="grid gap-2" key={index}>
            <span className="text-secondary text-md font-medium">{source}/</span>

            <div className="masonry">
              {reposWithSources[source].map((repo: any, index: number): React.ReactNode => {
                const currentColor: string | null = colors[repo.language]?.color ?? null

                return (
                  <Box
                    key={index}
                    className="hover:bg-tertiary group mb-4 grid h-max w-full gap-1 transition duration-300 last:mb-0"
                  >
                    <Link
                      href={repo.html_url}
                      rel="noreferrer"
                      target="_blank"
                      className="text-primary group-hover:text-secondary flex w-full items-center break-all text-2xl font-bold transition duration-300"
                      aria-label={`Go to ${repo.html_url}`}
                    >
                      {repo.name}
                    </Link>

                    {repo.description && (
                      <p className="text-secondary w-full text-sm">{repo.description}</p>
                    )}

                    {repo.language && (
                      <div className="flex items-center justify-between">
                        {repo.language && (
                          <span
                            style={{ ...(currentColor ? { color: currentColor as string } : {}) }}
                            className={!currentColor ? 'text-secondary' : ''}
                          >
                            {repo.language}
                          </span>
                        )}
                        {repo.homepage && (
                          <Link
                            href={repo.homepage}
                            className="w-min"
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Go to ${repo.html_url}`}
                          >
                            <Button>Preview</Button>
                          </Link>
                        )}
                      </div>
                    )}
                  </Box>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { metadata }
export default Page
