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
    description: description ?? undefined,

    openGraph: {
      title,
      description: description ?? undefined,
      ...openGraph
    },

    ..._other
  }
}

export { genMetadata }
