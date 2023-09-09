import React from 'react'

import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Button } from '@/components/Button'
import { Box } from '@/components/Box'
import { genMetadata } from '@/lib/gen-metadata'
import { Post } from '@/lib/post'
import { Calendar, Search } from 'lucide-react'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'

import type { DynamicPageProps } from '@/types/page'
import type { BlogPost } from '@/types/post'
import type { Metadata } from 'next'
import { cn } from '@/lib/cn'
import { Input } from '@/components/Input'
import MiniSearch from 'minisearch'

const metadata: Metadata = genMetadata({ title: 'Blog' })

const search = async (formData: FormData): Promise<void> => {
  'use server'

  const searchText = formData.get('search')

  redirect(`/blog?search=${searchText}`)
}

const Page: React.FC<DynamicPageProps> = async ({ searchParams }: DynamicPageProps): Promise<JSX.Element> => {
  const post: Post = new Post()
  const allPosts: BlogPost[] = await post.getAll()

  let posts: BlogPost[] = []

  const searchText: string | null | undefined = searchParams.search

  if (searchText) {
    const miniSearch = new MiniSearch({ fields: ['title', 'description', 'tags'], storeFields: Object.keys(allPosts[0]) })
    miniSearch.addAll(allPosts)

    posts = miniSearch.search(searchText) as any[] as BlogPost[]
  } else {
    posts = allPosts
  }

  const {
    posts: paginatedPosts,
    page,
    totalPages
  }: { posts: BlogPost[]; page: number; totalPages: number } = await new Post().paginate(posts, Number(searchParams?.page || 0) || 0)
  posts = paginatedPosts

  if (!posts || posts.length < 1) {
    notFound()
  }

  const prevDisabled: boolean = page === 0
  const nextDisabled: boolean = page === totalPages

  return (
    <div className="grid gap-4">
      <form className="grid gap-2" action={search}>
        <Input defaultValue={searchText || ''} id="search" type="search" name="search" icon={<Search />} placeholder="Search posts..." />

        <Button className="w-min" type="submit">
          Search
        </Button>
      </form>

      <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(
          (post: BlogPost): React.ReactNode => (
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
                      <p className="text-secondary text-sm font-medium">{post.formattedDate}</p>
                    </div>

                    <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                      <h1 className="hover:text-secondary break-all text-xl font-bold transition duration-300">{post.title}</h1>
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
      </div>

      <div className="flex h-min w-full items-center justify-between gap-1">
        <Link
          className={cn('text-lg font-bold transition duration-300', nextDisabled ? 'text-tertiary' : 'text-primary hover:text-secondary')}
          aria-disabled={prevDisabled}
          aria-label="Previous page"
          href={`/blog?${searchText ? `search=${searchText}&` : ''}page=${!prevDisabled ? page - 1 : page}`}
        >
          Prev
        </Link>

        <span className="font-medium">
          page {page} out of {totalPages}
        </span>

        <Link
          className={cn('text-lg font-bold transition duration-300', nextDisabled ? 'text-tertiary' : 'text-primary hover:text-secondary')}
          aria-disabled={nextDisabled}
          aria-label="Next page"
          href={`/blog?${searchText ? `search=${searchText}&` : ''}page=${!nextDisabled ? page + 1 : page}`}
        >
          Next
        </Link>
      </div>
    </div>
  )
}

export { metadata }
export default Page
