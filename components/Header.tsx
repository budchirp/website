'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { type LinkProps, links } from '@/lib/links'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Dialog, Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

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
          'bg-1 border-p-1 fixed top-0 z-[125] flex h-18 w-full items-center transition duration-300 justify-center border-b backdrop-blur-sm bg-blend-overlay',
          isMobileMenuOpened ? 'bg-opacity-100 ease-out' : '!bg-opacity-5 ease-in'
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link href="/" aria-label="Logo">
            <Logo />
          </Link>

          <div className="flex h-full space-x-2 items-center">
            <div className="hidden flex-row-reverse items-center gap-2 md:flex">
              {links.map((link: LinkProps, index: number) => (
                <Link href={link.url} key={index} className={cn('hover:text-1 transition duration-150', link.url == pathname ? 'text-1' : 'text-3')}>
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
              className="fixed bg-blend-overlay inset-0 z-[75] h-screen w-screen !bg-opacity-5 backdrop-blur-sm bg-1"
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
            <Dialog.Panel className="bg-1 shadow-2xl border-p-1 fixed inset-x-0 top-[5.5rem] z-[100] mx-auto w-11/12 max-w-sm overflow-hidden rounded-2xl border md:hidden">
              <div className="flex items-center px-6 py-4">
                <Dialog.Title as="h2" className="text-2xl font-bold">
                  Links
                </Dialog.Title>
              </div>

              <div className="space-y-1 px-6 pb-4">
                {links.map((link: LinkProps, index: number) => (
                  <div key={index}>
                    <Link
                      className={cn('hover:text-1 text-lg font-medium transition duration-150', link.url == pathname ? 'text-1' : 'text-3')}
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

export { Header }