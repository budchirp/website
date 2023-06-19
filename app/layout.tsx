import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Lexend } from 'next/font/google'
import { cn } from '@/lib/cn'
import data from '@/data'

import type { LayoutProps } from '@/types/layout'
import type { Metadata } from 'next'

import '@/styles/globals.css'

const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL as string),
  keywords: data.keywords,
  authors: { name: 'budchirp', url: 'https://budchirp.vercel.app' },
  description: data.description,
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
    <html lang="en">
      <body
        className={cn(
          'text-1 bg-1 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-600',
          lexend.variable
        )}
      >
        <Header />

        <main className="min-h-screen_">{children}</main>

        <Footer />
      </body>
    </html>
  )
}

export { metadata }
export default RootLayout
