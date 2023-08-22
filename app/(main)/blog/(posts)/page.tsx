import React from 'react'

import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Post } from '@/lib/post'
import { Calendar } from 'lucide-react'
import Link from 'next/link'
import { genMetadata } from '@/lib/gen-metadata'

import type { Metadata } from 'next'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { notFound } from 'next/navigation'

const metadata: Metadata = genMetadata({ title: 'Blog' })

const Page: React.FC = async (): Promise<React.ReactNode> => {
  const posts = await new Post().getAll()

  if (!posts || posts.length < 0) {
    notFound()
  }

  return (
    <>
      {posts.map(
        (post): React.ReactNode => (
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

              <div className="grid w-full gap-2 p-4">
                <div>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4 text-xs" />
                    <p className="text-tertiary text-sm font-medium">{post.date}</p>
                  </div>

                  <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                    <h1 className="hover:text-tertiary break-all text-xl font-bold transition duration-300">{post.title}</h1>
                  </Link>

                  <p className="text-secondary">{post.description}</p>
                </div>

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
