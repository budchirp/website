import data from '@/data'

import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${data.siteUrl}/sitemap.xml`
  }
}

export default robots
