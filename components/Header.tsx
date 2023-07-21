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

type LinkProps = {
  label: string
  url: string
}

const links: LinkProps[] = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Contact me',
    url: '/contact'
  },
  {
    label: 'Projects',
    url: '/projects'
  },
  {
    label: 'Blog',
    url: '/blog'
  }
]

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
          'bg-primary border-primary fixed top-0 z-[125] flex h-18 w-full items-center transition duration-300 justify-center border-b backdrop-blur-sm bg-blend-overlay',
          isMobileMenuOpened ? 'bg-opacity-100 ease-out' : '!bg-opacity-25 ease-in'
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link href="/" aria-label="Logo">
            <Logo />
          </Link>

          <div className="flex h-full space-x-2 items-center">
            <div className="hidden flex-row-reverse items-center gap-2 md:flex">
              {links.map((link: LinkProps, index: number) => (
                <Link
                  href={link.url}
                  key={index}
                  className={cn('hover:text-primary transition duration-150', link.url == pathname ? 'text-primary' : 'text-tertiary')}
                >
                  {link.label}
                </Link>
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
            as={Fragment}
            enter="transition-all ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              onClick={() => {
                setIsMobileMenuOpened(false)
              }}
              aria-hidden="true"
              className="fixed bg-blend-overlay inset-0 z-[75] h-screen w-screen !bg-opacity-5 backdrop-blur-sm bg-primary"
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="bg-primary border-primary fixed inset-x-0 top-[5.5rem] z-[100] mx-auto w-11/12 max-w-sm overflow-hidden rounded-2xl border md:hidden">
              <div className="flex items-center border-b border-primary px-6 h-14">
                <Dialog.Title as="h2" className="text-2xl h-full flex items-center leading-none font-bold">
                  Links
                </Dialog.Title>
              </div>

              <div className="px-6 my-2">
                {links.map((link: LinkProps, index: number) => (
                  <div key={index}>
                    <Link
                      className={cn(
                        'hover:text-primary leading-none mb-1 last:mb-0 text-lg font-medium transition duration-150',
                        link.url == pathname ? 'text-primary' : 'text-tertiary'
                      )}
                      href={link.url}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>

      <div aria-hidden="true" className="block h-18" />
    </>
  )
}

export { Header, links, type LinkProps }
