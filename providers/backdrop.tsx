'use client'

import React, { useState } from 'react'

import { BackdropContext, type Backdrop } from '@/contexts/backdrop'
import { Transition } from '@headlessui/react'

type BackdropProviderProps = {
  children: React.ReactNode
}

const BackdropProvider: React.FC<BackdropProviderProps> = (
  { children }: BackdropProviderProps
): React.ReactNode => {
  const [backdrop, setBackdrop] = useState<Backdrop>(false)

  return (
    <BackdropContext.Provider value={{ backdrop, setBackdrop }}>
      <Transition
        show={backdrop}
        as="div"
        enter="transition-all ease-out duration-500"
        enterFrom="opacity-0 !bg-opacity-0 backdrop-blur-none"
        enterTo="opacity-25 !bg-opacity-25 backdrop-blur-sm"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-25 !bg-opacity-25 backdrop-blur-sm"
        leaveTo="opacity-0 !bg-opacity-0 backdrop-blur-none"
        onClick={() => {
          setBackdrop(false)
        }}
        className="bg-primary h-screen_ fixed inset-0 z-[75] mt-16 w-screen delay-[50ms]"
      />

      {children}
    </BackdropContext.Provider>
  )
}

export { BackdropProvider }
