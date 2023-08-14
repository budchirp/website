import React, { Fragment, useEffect, useState } from 'react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Listbox, Transition } from '@headlessui/react'
import { cn } from '@/lib/cn'
import { useTheme } from 'next-themes'

import { Moon, Sun, Laptop, type LucideIcon } from 'lucide-react'

type Theme = 'dark' | 'light' | 'system'

const themes: { [key in Theme]: [string, LucideIcon] } = {
  dark: ['Dark', Moon],
  light: ['Light', Sun],
  system: ['System', Laptop]
}

const ThemeSwitcher: React.FC = (): JSX.Element => {
  const { theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void } = useTheme() as any

  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  let Icon: LucideIcon | null = null
  if (mounted) {
    Icon = themes[theme as Theme][1]
  }

  return (
    <Listbox value={theme} onChange={(value: Theme) => setTheme(value)}>
      <Listbox.Button as={Fragment}>
        <Button disabled={!mounted} aria-label="Open theme switcher menu" variant="round" color="secondary">
          {Icon ? <Icon /> : null}
        </Button>
      </Listbox.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90"
      >
        <Listbox.Options className={cn('fixed inset-x-0 top-[5.5rem] z-[100] flex w-screen origin-[75%_0%] justify-center md:origin-[90%_0%]')}>
          <Container className="flex items-center justify-center">
            <div className="justify-right items-right relative flex w-full">
              <div className="w-38 bg-primary border-primary absolute right-2 top-0 rounded-2xl border">
                {(Object.keys(themes) as Theme[]).map((theme: Theme): JSX.Element => {
                  const [label, Icon] = themes[theme]

                  return (
                    <Listbox.Option
                      key={theme}
                      className={({ selected }) =>
                        cn(
                          'border-primary hover:bg-secondary flex cursor-pointer items-center border-b px-4 py-2 transition-all duration-150 first:rounded-t-2xl last:rounded-b-2xl',
                          selected ? 'bg-secondary' : 'bg-primary'
                        )
                      }
                      value={theme}
                    >
                      {({ selected }) => (
                        <p
                          className={cn(
                            'hover:text-accent-primary flex items-center transition-all duration-300',
                            selected ? 'text-accent-primary font-bold hover:font-semibold' : 'text-primary font-semibold hover:font-bold'
                          )}
                        >
                          <span className="mr-2">
                            <Icon />
                          </span>
                          {label}
                        </p>
                      )}
                    </Listbox.Option>
                  )
                })}
              </div>
            </div>
          </Container>
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}

export { ThemeSwitcher, themes, type Theme }
