import type { Metadata } from 'next'

type GenMetadataProps = {
  title: string
  description?: string
  other?: Metadata
}

const genMetadata = ({ title, description, other }: GenMetadataProps): Metadata => {
  return {
    title,
    description: description ?? undefined,

    openGraph: {
      title,
      description: description ?? undefined
    },

    ...other
  }
}

export { genMetadata }
