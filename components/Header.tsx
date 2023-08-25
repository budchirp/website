'use client'

import React, { Fragment, useEffect, useState } from 'react'

import { cn } from '@/lib/cn'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Dialog, Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Box } from './Box'
import { type LinkProps, links } from '@/lib/links'

type HeaderLinkProps = {
  pathname: string
  label: string
  url: string
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ pathname, label, url }: HeaderLinkProps): React.ReactNode => {
  return (
    <Link
      className={cn(
        'hover:text-primary text-lg leading-6 transition-all duration-300 hover:font-bold',
        url == pathname ? 'text-primary font-bold' : 'text-tertiary font-medium'
      )}
      href={url}
    >
      {label}
    </Link>
  )
}

const Header: React.FC = () => {
  const pathname = usePathname()

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState<boolean>(false)

  useEffect(() => {
    setIsMobileMenuOpened(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'bg-primary border-primary fixed top-0 z-[125] flex h-18 w-full items-center justify-center border-b bg-blend-overlay backdrop-blur transition duration-300',
          isMobileMenuOpened ? 'bg-opacity-100 ease-out' : '!bg-opacity-25 ease-in'
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link href="/" aria-label="Logo">
            <Logo />
          </Link>

          <div className="flex h-full items-center space-x-2">
            <div className="hidden flex-row-reverse items-center gap-2 md:flex">
              {links.map((link: LinkProps, index: number) => (
                <HeaderLink pathname={pathname} label={link.label} url={link.url} key={index} />
              ))}
            </div>

            <div className="flex h-full items-center space-x-2">
              <ThemeSwitcher />

              <Button
                className="md:hidden"
                aria-label="Open menu"
                variant="round"
                color="secondary"
                onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
              >
                {isMobileMenuOpened ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <Transition show={isMobileMenuOpened} as={Fragment}>
        <Dialog onClose={() => setIsMobileMenuOpened(false)}>
          <Transition.Child
            as="div"
            enter="transition-all ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            onClick={() => {
              setIsMobileMenuOpened(false)
            }}
            aria-hidden="true"
            className="fixed inset-0 z-[75] h-screen w-screen bg-gray-100/25 bg-blend-overlay backdrop-blur dark:bg-black/25 md:hidden"
          />

          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="fixed inset-x-0 top-[5.5rem] z-[100] mx-auto flex w-screen origin-[90%_0%] justify-center">
              <Container className="flex items-center justify-center">
                <div className="relative flex w-full items-center justify-center">
                  <Box padding="none" variant="primary" className="w-full overflow-hidden sm:max-w-screen-xs">
                    <div className="border-primary flex h-16 items-center border-b px-6">
                      <Dialog.Title as="h2" className="flex h-full items-center text-2xl font-bold leading-none">
                        Links
                      </Dialog.Title>
                    </div>

                    <div className="my-2 grid gap-1 px-6">
                      {links.map(
                        (link: LinkProps, index: number): React.ReactNode => (
                          <HeaderLink pathname={pathname} label={link.label} url={link.url} key={index} />
                        )
                      )}
                    </div>
                  </Box>
                </div>
              </Container>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>

      <div aria-hidden="true" className="h-18" />
    </>
  )
}
Header.displayName = 'Header'

export { Header, links, type LinkProps }
