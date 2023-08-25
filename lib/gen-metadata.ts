import data from '@/data'

import type { Metadata } from 'next'

type GenMetadataProps = {
  title: string
  description?: string
  other?: Metadata
}

const genMetadata = ({ title, description, other }: GenMetadataProps): Metadata => {
  const { openGraph, ..._other } = other ?? { openGraph: {} }

  return {
    title,
    description: description || data.description,

    openGraph: {
      title,
      description: description || data.description,
      ...openGraph
    },

    ..._other
  }
}

export { genMetadata }
