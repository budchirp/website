type RawPost = {
  slug: string
  author: string
  title: string
  description: string
  tags: string
  date: string
  imageUrl: string
}

type PostBody = string

type BlogPost = Omit<RawPost, 'tags' | 'date'> & {
  id: string
  readingTime: string
  body: PostBody
  tags: string[]
  date: Date
  formattedDate: string
}

export type { RawPost, PostBody, BlogPost }
