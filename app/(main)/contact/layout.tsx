import React from 'react'

import { Container } from '@/components/container'
import { PageHeader } from '@/components/page-header'

import type { LayoutProps } from '@/types/layout'

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactNode => {
  return (
    <Container>
      <PageHeader>Contact me</PageHeader>

      {children}
    </Container>
  )
}

export default Layout
