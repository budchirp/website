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
  SiGnubash
} from 'react-icons/si'
import { FaCss3, FaLinux, FaVuejs } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { Hexagon, Mail, Send, Terminal } from 'lucide-react'

const data = {
  title: 'budchirp',
  description: 'Hello, World!',
  githubUsername: 'budchirp',
  keywords: ['About budchirp', 'budchirp projects', 'who is budchirp', 'contact budchirp'],
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
        icon: <GrReactjs />
      },
      {
        name: 'Vue',
        icon: <FaVuejs />
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
    2023: ['Started learning Rust'],
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
    }
  }
}

export default data
