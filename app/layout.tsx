import React from 'react'

import { ScrollToTop } from '@/providers/ScrollToTop'
import { ThemeProvider } from '@/providers/Theme'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Lexend } from 'next/font/google'
import { cn } from '@/lib/cn'
import data from '@/data'

import type { LayoutProps } from '@/types/layout'
import type { Metadata } from 'next'

import '@/styles/globals.css'

const url = (process.env.APP_URL ?? '') as string

const metadata: Metadata = {
  metadataBase: new URL(url),
  keywords: data.keywords,
  authors: { name: 'budchirp', url },
  description: data.description,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || ''
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0a0e' }
  ],
  title: {
    default: 'About me',
    template: `%s - ${data.title}`
  },
  openGraph: {
    locale: 'en-US',
    type: 'website',
    description: data.description,
    url: '/',
    title: {
      default: 'About me',
      template: `%s - ${data.title}`
    }
  }
}

const lexend = Lexend({ subsets: ['latin'], variable: '--font-main' })

const RootLayout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body
        className={cn(
          'text-1 bg-1 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-600',
          lexend.variable
        )}
      >
        <ThemeProvider>
          <ScrollToTop>
            <Header />

            <main className="min-h-screen_">{children}</main>

            <Footer />
          </ScrollToTop>
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata }
export default RootLayout
