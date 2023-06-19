const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.neutral,
          900: '#0b0a0e',
          800: '#0e0d12',
          700: '#1a1b1e',
          100: colors.slate[50]
        },
        primary: colors.rose
      }
    },
    fontFamily: {
      main: ['var(--font-main)']
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
