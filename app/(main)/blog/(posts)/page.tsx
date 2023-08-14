import React from 'react'

import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Post } from '@/lib/post'
import { Calendar } from 'lucide-react'
import Link from 'next/link'
import { genMetadata } from '@/lib/gen-metadata'

import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const metadata: Metadata = genMetadata({ title: 'Blog' })

const Page: React.FC = async (): Promise<JSX.Element> => {
  const posts = await new Post().getAll()

  return (
    <>
      {posts.map(
        (post): JSX.Element => (
          <AnimateOnScroll key={post.slug}>
            <Box className="h-min" padding="none">
              <div className="border-primary relative flex h-min max-h-48 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b">
                <Link href={'/blog/' + post.slug}>
                  <img
                    className="w-full rounded-t-2xl object-cover transition duration-300 ease-out hover:scale-110"
                    alt={post.title}
                    src={post.imageUrl}
                  />
                </Link>
              </div>

              <div className="w-full space-y-1 p-4">
                <h6 className="text-tertiary flex items-center text-sm font-medium">
                  <span className="mr-1 text-xs font-normal">
                    <Calendar className="h-4 w-4" />
                  </span>
                  {post.date}
                </h6>

                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                  <h1 className="hover:text-tertiary break-all text-xl font-bold transition duration-300">{post.title}</h1>
                </Link>

                <p className="text-secondary">{post.description}</p>

                <Link href={'/blog/' + post.slug}>
                  <Button className="w-full">Read more</Button>
                </Link>
              </div>
            </Box>
          </AnimateOnScroll>
        )
      )}
    </>
  )
}

export { metadata }
export default Page
