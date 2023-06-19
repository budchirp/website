'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { type LinkProps, links } from '@/lib/links'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

const Header: React.FC = () => {
  const pathname = usePathname()

  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      <header className="bg-1 border-p-1 fixed top-0 z-[125] flex h-16 w-full items-center justify-center border-b">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Logo">
            <Logo />
          </Link>

          <div className="flex items-center">
            <div className="hidden flex-row-reverse items-center gap-2 md:flex">
              {links.map((link: LinkProps, index: number) => (
                <Link
                  href={link.url}
                  key={index}
                  className={cn(
                    'hover:text-1 transition duration-300',
                    link.url == pathname ? 'text-1' : 'text-3'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Button
              className="md:hidden"
              aria-label="Open menu"
              variant="round"
              color="secondary"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X /> : <Menu />}
            </Button>
          </div>
        </Container>
      </header>

      <Transition show={mobileMenu}>
        <Transition.Child
          as="div"
          enter="transition-all duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          onClick={() => setMobileMenu(false)}
          className="fixed top-16 z-[75] h-screen w-screen bg-gray-100 !bg-opacity-25 backdrop-blur-sm dark:bg-black"
        />

        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-1 border-p-1 fixed inset-x-0 top-20 z-[100] mx-auto w-11/12 max-w-sm overflow-hidden rounded-2xl border">
            <div className="flex items-center px-6 py-4">
              <h2 className="text-2xl font-bold">Links</h2>
            </div>

            <div className="space-y-1 px-6 pb-4">
              {links.map((link: LinkProps, index: number) => (
                <div key={index}>
                  <Link
                    className={cn(
                      'hover:text-1 text-lg font-medium transition duration-300',
                      link.url == pathname ? 'text-1' : 'text-3'
                    )}
                    href={link.url}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Transition.Child>
      </Transition>

      <div className="block h-16" />
    </>
  )
}

export { Header }
