import React, { Fragment, useEffect, useState } from 'react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Listbox, Transition } from '@headlessui/react'
import { Theme, themes } from '@/lib/themes'
import { cn } from '@/lib/cn'
import { LucideIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

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
              <div className="top-0 right-2 absolute w-5/12 md:w-3/12 rounded-2xl bg-1 border border-p-1">
                {(Object.keys(themes) as Theme[]).map((theme: Theme): JSX.Element => {
                  const [label, Icon] = themes[theme]

                  return (
                    <Listbox.Option
                      key={theme}
                      className={({ selected }) =>
                        cn(
                          'border-b cursor-pointer border-p-1 transition duration-150 py-2 md:py-3 px-4 flex items-center hover:bg-2 first:rounded-t-2xl last:rounded-b-2xl',
                          selected ? 'bg-2' : 'bg-1'
                        )
                      }
                      value={theme}
                    >
                      {({ selected }) => (
                        <p className={cn('flex items-center', selected ? 'font-bold text-primary-1' : 'font-medium text-1')}>
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

export { ThemeSwitcher }
