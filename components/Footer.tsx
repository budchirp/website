import React from 'react'
import { Github } from 'lucide-react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import data from '@/data'
import { Logo } from '@/components/Logo'

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="border-primary mt-4 flex h-16 w-full items-center justify-center border-t">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <div>
          <a aria-label="Github" href={'https://github.com/' + data.githubUsername} rel="noreferrer" target="_blank">
            <Button aria-label="Github" variant="round" color="secondary">
              <Github />
            </Button>
          </a>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
