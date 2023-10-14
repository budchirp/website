import {
  SiDiscord,
  SiTypescript,
  SiPython,
  SiJavascript,
  SiPhp,
  SiLua,
  SiNeovim,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGnubash,
  SiSvelte,
  SiNestjs,
  SiC,
  SiCplusplus,
  SiGo,
  SiReddit
} from 'react-icons/si'
import { FaCss3, FaLinux, FaReact } from 'react-icons/fa'
import { Hexagon, Instagram, Mail, Send, Terminal } from 'lucide-react'

const data = {
  name: 'Can Kolay',
  username: 'budchirp',
  description: 'Hello, World!',
  githubUsername: 'budchirp',
  projectSources: ['budchirp', 'OxygeNvim'],
  keywords: [
    'budchirp',
    'who is budchirp',
    'about budchirp',
    'budchirp projects',
    'contact budchirp',
    'can kolay',
    'who is can kolay',
    'about can kolay',
    'contact can kolay',
    'can kolay projects'
  ],
  siteUrl: (process.env.APP_URL || 'http://localhost:3000') as string,
  skills: {
    Languages: [
      {
        name: 'Javascript',
        icon: <SiJavascript />
      },
      {
        name: 'Typescript',
        icon: <SiTypescript />
      },
      {
        name: 'Python',
        icon: <SiPython />
      },
      {
        name: 'PHP',
        icon: <SiPhp />
      },
      {
        name: 'Lua',
        icon: <SiLua />
      },
      {
        name: 'Go',
        icon: <SiGo />
      },
      {
        name: 'C',
        icon: <SiC />
      },
      {
        name: 'C++',
        icon: <SiCplusplus />
      },
      {
        name: 'Bash',
        icon: <SiGnubash />
      }
    ],
    Development: [
      {
        name: 'Linux',
        icon: <FaLinux />
      },
      {
        name: 'Neovim',
        icon: <SiNeovim />
      },
      {
        name: 'Termux',
        icon: <Terminal />
      }
    ],
    Frontend: [
      {
        name: 'React',
        icon: <FaReact />
      },
      {
        name: 'Svelte',
        icon: <SiSvelte />
      },
      {
        name: 'CSS',
        icon: <FaCss3 />
      },
      {
        name: 'TailwindCSS',
        icon: <SiTailwindcss />
      }
    ],
    Backend: [
      {
        name: 'Node.js',
        icon: <Hexagon />
      },
      {
        name: 'NestJS',
        icon: <SiNestjs />
      },
      {
        name: 'Express.js',
        icon: <SiExpress />
      }
    ],
    Database: [
      {
        name: 'MongoDB',
        icon: <SiMongodb />
      }
    ]
  },
  journey: {
    2023: ['Started learning C, C++ and Go', 'Started learning Svelte and Astro'],
    2022: ['Learned Lua'],
    2021: ['Learned Typescript', 'Learned basic React', 'Learned TailwindCSS'],
    2020: ['Learned Javascript, PHP', 'Learned Python'],
    2019: ['Learned HTML, CSS']
  },
  contact: {
    Email: {
      link: `mailto:budchirp@gmail.com`,
      icon: <Mail />
    },
    Telegram: {
      link: 'https://t.me/budchirp',
      icon: <Send />
    },
    Discord: {
      link: 'https://discordapp.com/users/1118636505737478205',
      icon: <SiDiscord />
    },
    Instagram: {
      link: 'https://instagram.com/budchirp',
      icon: <Instagram />
    },
    X: {
      link: 'https://x.com/budchirp',
      icon: '𝕏'
    },
    Reddit: {
      link: 'https://reddit.com/u/budchirp',
      icon: <SiReddit />
    }
  }
}

export default data
