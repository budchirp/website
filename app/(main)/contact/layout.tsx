import type React from 'react'

import { Container } from '@/components/container'
import { Heading } from '@/components/heading'

import type { LayoutProps } from '@/types/layout'

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactNode => (
  <Container>
    <Heading>Contact me</Heading>

    {children}
  </Container>
)

export default Layout
