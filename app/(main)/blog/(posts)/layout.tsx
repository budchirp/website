import React from 'react'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

import type { LayoutProps } from '@/types/layout'

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactNode => {
  return (
    <Container>
      <PageHeader>Blog</PageHeader>

      <div className="grid grid-cols-1 auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>
    </Container>
  )
}

export default Layout
