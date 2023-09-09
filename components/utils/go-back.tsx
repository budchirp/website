'use client'

import React from 'react'
import { Button } from '../Button'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

type GoBackProps = {
  removeSearchParams?: boolean
}

const GoBack: React.FC<GoBackProps> = ({ removeSearchParams }: GoBackProps): React.ReactNode => {
  const router = useRouter()
  const pathname = usePathname()

  const label = 'Click to go to the previous page'

  return removeSearchParams ? (
    <Link aria-label={label} href={pathname}>
      <Button aria-label={label}>Go back</Button>
    </Link>
  ) : (
    <Button aria-label={label} onClick={() => router.back()}>
      Go back
    </Button>
  )
}

export { GoBack, type GoBackProps }
