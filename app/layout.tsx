import React from 'react'

import { ThemeProvider } from '@/providers/Theme'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import data from '@/data'
import { Lexend } from 'next/font/google'

import type { LayoutProps } from '@/types/layout'
import type { Metadata } from 'next'

import '@/styles/globals.css'

const metadata: Metadata = {
  metadataBase: new URL(data.siteUrl),
  keywords: data.keywords,
  creator: data.name,
  publisher: data.name,
  authors: [{ name: data.name, url: data.siteUrl }],
  description: data.description,
  manifest: '/manifest.json',
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
    maximumScale: 5
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  twitter: {
    description: data.description,
    title: {
      default: 'About me',
      template: `%s - ${data.title}`
    }
  },
  openGraph: {
    siteName: `${data.title}'s website`,
    locale: 'en_US',
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

const RootLayout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactNode => {
  return (
    <html suppressHydrationWarning lang="en-US">
      <body className={lexend.variable}>
        <ThemeProvider>
          <Header />

          <main className="min-h-screen_">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata }
export default RootLayout
