import React from 'react'
import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import data from '@/data'
import Link from 'next/link'

const Page = async () => {
  const res = await fetch(`https://api.github.com/users/${data.githubUsername}/repos`, {
    cache: 'no-cache'
  })
  const repos: any = await res.json()

  return (
    <>
      {repos.map((repo: any, index: number): React.ReactNode => {
        return (
          <Box key={index}>
            <div className="flex w-full items-center break-words">
              <div>
                <Link href={repo.html_url} rel="noreferrer" target="_blank">
                  <p className="text-1 break-all text-2xl font-bold">{repo.name}</p>
                </Link>
              </div>
            </div>

            {repo.description && (
              <div className="text-2 mt-2 w-full pt-2 text-sm font-medium">{repo.description}</div>
            )}

            {repo.language && (
              <div className="mt-2 flex items-center justify-between pt-2">
                {repo.language && (
                  <span className="font-base text-primary-3 flex">{repo.language}</span>
                )}
                {repo.homepage && (
                  <div>
                    <a href={repo.homepage} className="w-full" target="_blank" rel="noreferrer">
                      <Button>Preview</Button>
                    </a>
                  </div>
                )}
              </div>
            )}
          </Box>
        )
      })}
    </>
  )
}

export default Page
