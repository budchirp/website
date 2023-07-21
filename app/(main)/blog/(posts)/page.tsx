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
              <div className="relative border-b max-h-48 flex items-center justify-center border-primary overflow-hidden rounded-t-3xl w-full h-min">
                <Link href={'/blog/' + post.slug}>
                  <img
                    className="rounded-t-2xl hover:scale-110 transition duration-300 ease-out object-cover w-full"
                    alt={post.title}
                    src={post.imageUrl}
                  />
                </Link>
              </div>

              <div className="w-full p-4">
                <h6 className="text-sm flex font-medium items-center text-tertiary">
                  <span className="text-xs mr-1 font-normal">
                    <Calendar className="h-4 w-4" />
                  </span>
                  {post.date}
                </h6>

                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                  <h1 className="text-xl font-bold break-all hover:text-secondary transition-all hover:font-medium duration-300 ">{post.title}</h1>
                </Link>

                <p className="text-secondary mb-1">{post.description}</p>

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
