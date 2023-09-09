import React from 'react'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Github } from 'lucide-react'
import data from '@/data'
import Link from 'next/link'

const Footer: React.FC = (): React.ReactNode => {
  return (
    <>
      <footer className="border-primary mt-4 flex h-16 w-full items-center justify-center border-t">
        <Container className="flex h-full items-center justify-between gap-2">
          <Logo />

          <Link
            aria-label="Github"
            href={'https://github.com/' + data.githubUsername}
            rel="noreferrer"
            target="_blank"
          >
            <Button aria-label="Github" variant="round" color="secondary">
              <Github />
            </Button>
          </Link>
        </Container>
      </footer>
    </>
  )
}
Footer.displayName = 'Footer'

export { Footer }
