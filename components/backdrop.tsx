import { cn } from '@/lib/cn'
import { Transition } from '@headlessui/react'
import type React from 'react'

export type BackdropProps = {
  open: boolean
  onClose?: () => void
}

export const Backdrop: React.FC<BackdropProps> = ({
  open,
  onClose
}: BackdropProps): React.ReactNode => {
  return (
    <Transition
      show={open}
      as='div'
      onClick={onClose}
      appear
      className={cn(
        'transition-all bg-primary !bg-opacity-25 !backdrop-blur-sm h-screen inset-0 fixed z-[100] w-screen',
        'data-[closed]:!backdrop-blur-none data-[closed]:!bg-opacity-0',
        'data-[enter]:ease-out data-[enter]:duration-400',
        'data-[leave]:ease-in data-[leave]:duration-200'
      )}
    />
  )
}
