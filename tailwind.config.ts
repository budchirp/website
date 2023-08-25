import colors from 'tailwindcss/colors'

import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: 'class',
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px'
      },
      spacing: {
        18: '4.5rem'
      },
      colors: {
        gray: {
          ...colors.gray,
          900: '#0b0a0e',
          800: '#0e0d12',
          700: '#121118',
          690: '#1a1b1e' // used for borders
        },
        accent: colors.rose
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            blockQuote: {
              borderColor: theme('colors.gray.50')
            },
            p: {
              color: theme('colors.gray.950')
            },
            hr: {
              backgroundColor: theme('colors.gray.50'),
              height: '0.25rem',
              marginTop: '1rem',
              marginBottom: '1rem'
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em'
            },
            h1: {
              lineHeight: 1,
              marginBottom: `1.5rem`,
              marginTop: '0.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            },
            h2: {
              marginTop: '0.5rem',
              marginBottom: `1rem`,
              fontSize: '1.25rem',
              fontWeight: 'semibold'
            },
            h3: {
              marginTop: '0.5rem',
              marginBotton: '1rem',
              fontSize: '1.125rem',
              fontWeight: 'medium'
            },
            h4: {
              marginTop: '0.5rem',
              marginBottom: '1rem',
              fontSize: '1rem',
              fontWeight: 'normal'
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.gray.800'),
              fontWeight: 500
            },
            'h2 code, h3 code': {
              font: 'inherit'
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: '0.5rem'
            },
            'ul > li': {
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'medium',
              position: 'relative',
              paddingLeft: '1.25rem',
              color: theme('colors.gray.950')
            },
            'ul > li::before': {
              content: '""',
              width: '0.50rem',
              height: '0.50rem',
              position: 'absolute',
              left: 0,
              borderRadius: '999px',
              backgroundColor: theme('colors.gray.200')
            },
            ol: {
              fontSize: '0.75rem',
              fontWeight: 'normal',
              color: theme('colors.gray.800')
            },
            'ol > li': {
              fontSize: '1rem',
              fontWeight: 'medium',
              color: theme('colors.gray.950')
            },
            a: {
              fontWeight: 'semibold',
              textDecoration: 'none'
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit'
            },
            strong: {
              color: theme('colors.gray.950'),
              fontWeight: theme('fontWeight.medium')
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit'
            },
            kbd: {
              backgroundColor: theme('colors.gray.50'),
              borderWidth: '1px',
              borderColor: theme('colors.gray.200'),
              padding: '0.125em 0.25em',
              color: theme('colors.gray.800'),
              fontWeight: 'semibold',
              fontSize: '0.875rem',
              fontVariantLigatures: 'none',
              borderRadius: '0.75rem',
              margin: '0 1px',
              paddingLeft: '0.50rem',
              paddingRight: '0.50rem'
            },
            code: {
              borderWidth: '1px',
              borderColor: theme('colors.gray.200'),
              color: theme('colors.gray.800'),
              backgroundColor: theme('colors.gray.50'),
              borderRadius: '0.75rem',
              paddingLeft: '0.50rem',
              paddingRight: '0.50rem'
            }
          }
        },
        dark: {
          css: {
            blockQuote: {
              borderColor: theme('colors.gray.800')
            },
            p: {
              color: theme('colors.gray.50')
            },
            hr: {
              backgroundColor: theme('colors.gray.800')
            },
            h1: {
              color: theme('colors.gray.50')
            },
            h2: {
              color: theme('colors.gray.200')
            },
            h3: {
              color: theme('colors.gray.100')
            },
            h4: {
              color: theme('colors.gray.200')
            },
            'h2 small, h3 small, h4 small': {
              color: theme('colors.gray.200')
            },
            'ul > li': {
              color: theme('colors.gray.50')
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.690')
            },
            ol: {
              fontSize: '0.75rem',
              fontWeight: 'normal',
              color: theme('colors.gray.200')
            },
            'ol > li': {
              fontSize: '1rem',
              fontWeight: 'medium',
              color: theme('colors.gray.50')
            },
            strong: {
              color: theme('colors.gray.50')
            },
            kbd: {
              backgroundColor: theme('colors.gray.800'),
              borderColor: theme('colors.gray.690'),
              color: theme('colors.gray.200')
            },
            code: {
              borderColor: theme('colors.gray.690'),
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.800')
            }
          }
        }
      })
    },
    fontFamily: {
      main: ['var(--font-main)'],
      mono: ['var(--font-mono)']
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')]
}

export default config
