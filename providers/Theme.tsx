'use client'

import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }): JSX.Element => {
  return (
    <NextThemeProvider disableTransitionOnChange attribute="class">
      {children}
    </NextThemeProvider>
  )
}

export { ThemeProvider }
