import { Moon, Sun, Laptop, type LucideIcon } from 'lucide-react'

type Theme = 'dark' | 'light' | 'system'

const themes: { [key in Theme]: [string, LucideIcon] } = {
  dark: ['Dark', Moon],
  light: ['Light', Sun],
  system: ['System', Laptop]
}

export { themes, type Theme }
