import { type LinkProps, links } from '@/lib/links'
import { Post } from '@/lib/post'
import data from '@/data'

import type { BlogPost } from '@/types/post'
import type { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts: BlogPost[] = await new Post().getAll()
  const posts_sitemap = posts.map((post: BlogPost) => ({
    url: `${data.siteUrl}/blog/${post.slug}`,
    lastModified: post.date.toISOString()
  }))

  const routes_sitemap = links.map((link: LinkProps): { url: string; lastModified: string } => ({
    url: `${data.siteUrl}${link.url}`,
    lastModified: new Date().toISOString()
  }))

  return [...routes_sitemap, ...posts_sitemap]
}

export default sitemap
