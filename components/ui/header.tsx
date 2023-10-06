'use client'

import React, { Fragment, useContext, useEffect } from 'react'

import { BackdropContext } from '@/contexts/backdrop'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'
import { Container } from '@/components/container'
import { Button } from '@/components/button'
import { Logo } from '@/components/logo'
import { Box } from '@/components/box'
import { type LinkProps, links } from '@/lib/links'
import { cn } from '@/lib/cn'
import { Transition, Menu } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu as MenuIcon, X } from 'lucide-react'

type HeaderLinkProps = {
  pathname: string
  label: string
  url: string
}

const HeaderLink: React.FC<HeaderLinkProps> = (
  { pathname, label, url }: HeaderLinkProps
): React.ReactNode => {
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

  const { backdrop, setBackdrop } = useContext(BackdropContext)

  return (
    <Menu>
      {({ open, close }) => {
        // eslint-disable-next-line
        useEffect(() => {
          close()
        }, [pathname])

        // eslint-disable-next-line
        useEffect(() => {
          setBackdrop(open)
        }, [open])

        return (
          <>
            <header
              className={cn(
                'bg-primary border-primary sticky top-0 z-[125] flex h-16 w-full items-center justify-center border-b backdrop-blur-sm transition-all delay-[50ms]',
                backdrop
                  ? '!bg-opacity-100 duration-200 ease-in'
                  : '!bg-opacity-25 duration-500 ease-out'
              )}
            >
              <Container className="flex h-full items-center justify-between gap-2">
                <Logo />

                <div className="flex h-full items-center gap-2">
                  <div className="hidden flex-row-reverse items-center gap-2 md:flex">
                    {links.map((link: LinkProps, index: number) => (
                      <HeaderLink
                        pathname={pathname}
                        label={link.label}
                        url={link.url}
                        key={index}
                      />
                    ))}
                  </div>

                  <div className="flex h-full items-center gap-2">
                    <ThemeSwitcher />

                    <Menu.Button
                      as={Button}
                      className="md:hidden"
                      aria-label="Open menu"
                      variant="round"
                      color="secondary"
                      onClick={close}
                    >
                      {open ? <X /> : <MenuIcon />}
                    </Menu.Button>
                  </div>
                </div>
              </Container>
            </header>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <div className="fixed inset-x-0 top-20 z-[100] mx-auto flex h-min w-screen origin-[90%_0%] justify-center md:hidden">
                <Container className="relative flex h-min items-center justify-center">
                  <Menu.Items
                    as={Box}
                    static
                    variant="primary"
                    className="top-0 grid w-full gap-2 overflow-hidden sm:max-w-screen-xs"
                  >
                    <h2 className="text-2xl font-bold">Links</h2>

                    <div className="grid gap-1">
                      {links.map(
                        (link: LinkProps, index: number): React.ReactNode => (
                          <Menu.Item
                            as={HeaderLink}
                            pathname={pathname}
                            label={link.label}
                            url={link.url}
                            key={index}
                          />
                        )
                      )}
                    </div>
                  </Menu.Items>
                </Container>
              </div>
            </Transition>
          </>
        )
      }}
    </Menu>
  )
}
Header.displayName = 'Header'

export { Header, links, type LinkProps }
