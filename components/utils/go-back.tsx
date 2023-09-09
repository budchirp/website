'use client'

import React from 'react'

import { Button } from '@/components/Button'
import { usePathname, useRouter } from 'next/navigation'

type GoBackProps = {
  removeSearchParams?: boolean
}

const GoBack: React.FC<GoBackProps> = ({ removeSearchParams }: GoBackProps): React.ReactNode => {
  const router = useRouter()
  const pathname = usePathname()

  const redirect = (): void => {
    if (removeSearchParams) {
      router.push(pathname)
    } else {
      router.back()
    }
  }

  return (
    <Button aria-label="Click to go to the previous page" onClick={redirect}>
      Go back
    </Button>
  )
}

export { GoBack, type GoBackProps }
