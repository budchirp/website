import type { Metadata } from 'next'

type GenMetadataProps = {
  title: string
}

const genMetadata = ({ title }: GenMetadataProps): Metadata => {
  return {
    title,

    openGraph: {
      title
    }
  }
}

export { genMetadata }
