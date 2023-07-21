import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

type DynamicLayoutProps = {
  params: {
    [key: string]: string
  }
} & LayoutProps

export type { LayoutProps, DynamicLayoutProps }
