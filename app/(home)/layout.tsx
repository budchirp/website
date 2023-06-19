import React from 'react'
import { Container } from '@/components/Container'

import type { LayoutProps } from '@/types/layout'

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  return <Container>{children}</Container>
}

export default Layout
