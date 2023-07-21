import React from 'react'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

import type { LayoutProps } from '@/types/layout'

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Container>
      <PageHeader>Projects</PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
    </Container>
  )
}

export default Layout