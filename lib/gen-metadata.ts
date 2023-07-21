import type { Metadata } from 'next'

type GenMetadataProps = {
  title: string
  description?: string
}

const genMetadata = ({ title, description }: GenMetadataProps): Metadata => {
  return {
    title,
    description: description ?? undefined,

    openGraph: {
      title,
      description: description ?? undefined
    }
  }
}

export { genMetadata }
