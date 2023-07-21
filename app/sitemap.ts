import data from '@/data'
import { Post } from '@/lib/post'

import type { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = await new Post().getAll()
  const posts_sitemap = posts.map((post) => ({
    url: `${data.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString()
  }))

  const routes: string[] = ['', 'contact', 'projects', 'blog']
  const routes_sitemap = routes.map((url: string): { url: string; lastModified: string } => ({
    url: `${data.siteUrl}/${url}`,
    lastModified: new Date().toISOString()
  }))

  return [...routes_sitemap, ...posts_sitemap]
}

export default sitemap
