import React from 'react'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

import type { LayoutProps } from '@/types/layout'

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Container>
      <PageHeader>Contact me</PageHeader>

      {children}
    </Container>
  )
}

export default Layout
