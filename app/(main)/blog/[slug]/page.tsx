import React from 'react'

import { PageHeader } from '@/components/PageHeader'
import { components } from '@/components/MDX'
import { genMetadata } from '@/lib/gen-metadata'
import { Post } from '@/lib/post'
import { Book, Calendar, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

// @ts-ignore
import a11yEmoji from '@fec/remark-a11y-emoji'

import type { DynamicPageProps } from '@/types/page'
import type { Metadata } from 'next'
import type { BlogPost } from '@/types/post'

const generateMetadata = async ({ params: { slug } }: DynamicPageProps): Promise<Metadata> => {
  const post = (await new Post().getBySlug(slug)) as BlogPost

  return genMetadata({
    title: `${post.title} - Blog`,
    description: post.description,
    other: {
      openGraph: {
        type: 'article',
        publishedTime: new Date(post.date).toISOString(),
        images: [
          {
            url: post.imageUrl
          }
        ]
      }
    }
  })
}

const Page: React.FC<DynamicPageProps> = async ({
  params: { slug }
}: DynamicPageProps): Promise<
  | string
  | number
  | boolean
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | Iterable<React.ReactNode>
  | React.ReactPortal
  | null
  | undefined
> => {
  const post = await new Post().getBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <PageHeader
        bottomPart={
          <>
            <span className="text-secondary flex gap-1 text-sm font-bold">
              <User className="h-4 w-4" /> <p>{post.author}</p>
            </span>
            <span className="text-secondary flex gap-1 text-sm font-bold">
              <Calendar className="h-4 w-4" /> <p>{post.date.replaceAll('-', '/')}</p>
            </span>
            <span className="text-secondary flex gap-1 text-sm font-bold">
              <Book className="h-4 w-4" /> <p>{post.readingTime}</p>
            </span>
          </>
        }
      >
        {post.title}
      </PageHeader>

      <article className="prose dark:prose-dark">
        <MDXRemote
          options={{ mdxOptions: { rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings], remarkPlugins: [remarkGfm, a11yEmoji, remarkToc] } }}
          source={post.body}
          components={components as any}
        />
      </article>
    </>
  )
}

const generateStaticParams = async (): Promise<{ [key: string]: any }[]> => {
  const posts = await new Post().getAll()

  return posts.map((post) => ({ slug: post.slug }))
}

export { generateMetadata, generateStaticParams }
export default Page
