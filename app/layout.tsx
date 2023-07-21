import React from 'react'

import { ScrollToTop } from '@/providers/ScrollToTop'
import { ThemeProvider } from '@/providers/Theme'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { JetBrains_Mono, Lexend } from 'next/font/google'
import { cn } from '@/lib/cn'
import data from '@/data'

import type { LayoutProps } from '@/types/layout'
import type { Metadata } from 'next'

import '@/styles/globals.css'

const metadata: Metadata = {
  metadataBase: new URL(data.siteUrl),
  keywords: data.keywords,
  creator: data.title,
  authors: { name: data.title, url: data.siteUrl },
  description: data.description,
  manifest: '/app.webmanifest',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    siteName: `${data.title}'s website`,
    locale: 'en-US',
    type: 'website',
    description: data.description,
    url: data.siteUrl,
    title: {
      default: 'About me',
      template: `%s - ${data.title}`
    }
  }
}

const lexend = Lexend({ subsets: ['latin'], variable: '--font-main' })
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

const RootLayout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body
        className={cn(
          'text-primary bg-primary scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-600',
          lexend.variable,
          jetBrainsMono.variable
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
