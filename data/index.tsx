import {
  SiDiscord,
  SiTypescript,
  SiPython,
  SiJavascript,
  SiPhp,
  SiLua,
  SiRust,
  SiNeovim,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGnubash,
  SiSvelte,
  SiNestjs,
  SiMatrix
} from 'react-icons/si'
import { FaCss3, FaLinux, FaReact, FaVuejs } from 'react-icons/fa'
import { Hexagon, Mail, Send, Terminal } from 'lucide-react'

const data = {
  title: 'budchirp',
  description: 'Hello, World!',
  githubUsername: 'budchirp',
  keywords: ['about budchirp', 'budchirp projects', 'who is budchirp', 'contact budchirp'],
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
        name: 'Rust',
        icon: <SiRust />
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
        name: 'Vue',
        icon: <FaVuejs />
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
    2023: ['Started learning Rust', 'Started learning Svelte'],
    2022: ['Learned lua'],
    2021: ['Learned Typescript', 'Learned basic React & Vue', 'Learned Tailwindcss & Sass'],
    2020: ['Learned Javascript', 'PHP', 'Learned Python'],
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
    Matrix: {
      link: 'https://matrix.to/#/@budchirp:matrix.org',
      icon: <SiMatrix />
    }
  }
}

export default data
