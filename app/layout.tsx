import React from 'react'

import { BackdropProvider } from '@/providers/backdrop'
import { ThemeProvider } from '@/providers/theme'
import { Header } from '@/components/ui/header'
import { Footer } from '@/components/ui/footer'
import data from '@/data'
import { Lexend } from 'next/font/google'

import type { LayoutProps } from '@/types/layout'
import type { Metadata } from 'next'

import '@/styles/globals.css'

const metadata: Metadata = {
  metadataBase: new URL(data.siteUrl),
  keywords: data.keywords,
  creator: data.username,
  publisher: data.username,
  authors: [{ name: data.username, url: data.siteUrl }],
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
    template: `%s - ${data.username}`
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
      template: `%s - ${data.username}`
    }
  },
  openGraph: {
    siteName: `${data.username}'s website`,
    locale: 'en_US',
    type: 'website',
    description: data.description,
    url: data.siteUrl,
    title: {
      default: 'About me',
      template: `%s - ${data.username}`
    }
  }
}

const lexend = Lexend({ subsets: ['latin'], variable: '--font-main' })

const RootLayout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactNode => {
  return (
    <html suppressHydrationWarning lang="en-US">
      <body className={lexend.variable}>
        <ThemeProvider>
          <BackdropProvider>
            <Header />

            <main className="min-h-screen_">{children}</main>

            <Footer />
          </BackdropProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata }
export default RootLayout
