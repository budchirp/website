import React from 'react'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

import type { LayoutProps } from '@/types/layout'
import { Post } from '@/lib/post'
import { notFound } from 'next/navigation'

const Layout: React.FC<LayoutProps> = async ({ children }: LayoutProps): Promise<JSX.Element> => {
  const posts = await new Post().getAll()

  if (!posts || posts.length < 0) {
    notFound()
  }

  return (
    <Container>
      <PageHeader>Blog</PageHeader>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </Container>
  )
}

export default Layout
