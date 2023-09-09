import React from 'react'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

import type { LayoutProps } from '@/types/layout'

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactNode => {
  return (
    <Container>
      <PageHeader>Projects</PageHeader>

      {children}
    </Container>
  )
}

export default Layout
