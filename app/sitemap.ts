import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  return ['', '/contact', '/projects'].map((url: string) => ({
    url: `${process.env.APP_URL}${url}`,
    lastModified: new Date().toISOString()
  }))
}

export default sitemap
