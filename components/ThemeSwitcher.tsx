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
        <Listbox.Options className={cn('fixed z-[100] w-screen origin-[85%_15%] top-[5.5rem] flex justify-center inset-x-0')}>
          <Container>
            <div className="relative flex justify-right items-right w-full">
              <div className="top-0 right-2 absolute w-5/12 md:w-3/12 rounded-2xl bg-primary border border-primary">
                {(Object.keys(themes) as Theme[]).map((theme: Theme): JSX.Element => {
                  const [label, Icon] = themes[theme]

                  return (
                    <Listbox.Option
                      key={theme}
                      className={({ selected }) =>
                        cn(
                          'border-b cursor-pointer border-primary transition-all duration-150 py-2 px-4 flex items-center hover:bg-secondary first:rounded-t-2xl last:rounded-b-2xl',
                          selected ? 'bg-secondary' : 'bg-primary'
                        )
                      }
                      value={theme}
                    >
                      {({ selected }) => (
                        <p
                          className={cn(
                            'flex items-center transition-all hover:text-accent-primary hover:font-bold duration-300',
                            selected ? 'font-bold text-accent-primary' : 'font-medium text-primary'
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
