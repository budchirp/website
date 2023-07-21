import React from 'react'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

import type { LayoutProps } from '@/types/layout'
import { Post } from '@/lib/post'
import { VerticalPage } from '@/components/VerticalPage'

const Layout: React.FC<LayoutProps> = async ({ children }: LayoutProps): Promise<JSX.Element> => {
  const posts = await new Post().getAll()

  return (
    <Container>
      {posts.length > 0 ? (
        <>
          <PageHeader>Blog</PageHeader>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
        </>
      ) : (
        <VerticalPage items={["There's", 'nothing', 'to', 'see']} title={'👻'} />
      )}
    </Container>
  )
}

export default Layout
