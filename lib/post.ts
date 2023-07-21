import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { cache } from 'react'

import type { BlogPost, PostBody, RawPost } from '@/types/post'

class Post {
  static path: string = process.cwd() + '/posts'

  private async _getAll(): Promise<BlogPost[] | []> {
    const postFiles: string[] = await fs.readdir(Post.path)

    const posts: BlogPost[] = await Promise.all(
      postFiles
        .filter((file: string) => path.extname(file) === '.md' || path.extname(file) === '.mdx')
        .map(async (file: string) => {
          const fileContent: string = await fs.readFile(Post.path + '/' + file, 'utf-8')

          const { data, content }: { data: RawPost; content: PostBody } = matter(fileContent) as any

          let newData: Omit<BlogPost, 'body'> = { ...data, tags: data.tags.split(', '), readingTime: readingTime(content).text }

          return { ...newData, body: content } as BlogPost
        })
    )

    return posts || []
  }

  async getAll(): Promise<BlogPost[] | []> {
    return cache<typeof this._getAll>(this._getAll)() || []
  }

  async getBySlug(slug: string): Promise<BlogPost | null | undefined> {
    const posts = await this.getAll()

    return (posts.find((post: BlogPost) => post.slug == slug) as BlogPost) || null
  }
}

export { Post }
