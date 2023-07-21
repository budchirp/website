import { LinkProps, links } from '@/components/Header'
import { Post } from '@/lib/post'
import data from '@/data'

import type { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = await new Post().getAll()
  const posts_sitemap = posts.map((post) => ({
    url: `${data.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString()
  }))

  const routes_sitemap = links.map((link: LinkProps): { url: string; lastModified: string } => ({
    url: `${data.siteUrl}/${link.url}`,
    lastModified: new Date().toISOString()
  }))

  return [...routes_sitemap, ...posts_sitemap]
}

export default sitemap
