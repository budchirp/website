import {
  SiDiscord,
  SiTypescript,
  SiPython,
  SiJavascript,
  SiPhp,
  SiLua,
  SiNeovim,
  SiTailwindcss,
  SiMongodb,
  SiGnubash,
  SiNestjs,
  SiC,
  SiKotlin,
  SiInstagram,
  SiExpress,
  SiLaravel,
  SiCplusplus,
  SiRust,
  SiJetpackcompose,
  SiKtor,
  SiSqlite
} from 'react-icons/si'
import { FaAndroid, FaCss3, FaGit, FaJava, FaLinux, FaReact } from 'react-icons/fa'
import { Mail, Send, Syringe, Terminal } from 'lucide-react'

const email = 'contact@cankolay.com'

const data = {
  name: 'Can Kolay',
  username: 'budchirp',
  description: 'Hello, World!',
  email,
  githubUsername: 'budchirp',
  projectSources: ['budchirp', 'OxygeNvim', 'KapacitorSync'],
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
  siteUrl: process.env.APP_URL || '',
  about: (
    <>
      <p>Full-Stack developer</p>
      <p>Amateur guitar player</p>
    </>
  ),
  technologies: {
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
        name: 'Kotlin',
        icon: <SiKotlin />
      },
      {
        name: 'Java',
        icon: <FaJava />
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
        name: 'Rust',
        icon: <SiRust />
      },
      {
        name: 'Bash',
        icon: <SiGnubash />
      }
    ],
    Tools: [
      {
        name: 'Linux',
        icon: <FaLinux />
      },
      {
        name: 'Git',
        icon: <FaGit />
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
    Database: [
      {
        name: 'MongoDB',
        icon: <SiMongodb />
      },
      {
        name: 'SQLite',
        icon: <SiSqlite />
      }
    ]
  },
  stacks: {
    Frontend: [
      {
        name: 'React',
        icon: <FaReact />
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
        name: 'Laravel',
        icon: <SiLaravel />
      },
      {
        name: 'Express.js',
        icon: <SiExpress />
      },
      {
        name: 'NestJS',
        icon: <SiNestjs />
      }
    ],

    Mobile: [
      {
        name: 'Android',
        icon: <FaAndroid />
      },
      {
        name: 'Jetpack Compose',
        icon: <SiJetpackcompose />
      },
      {
        name: 'Ktor',
        icon: <SiKtor />
      },
      {
        name: 'Hilt',
        icon: <Syringe />
      }
    ]
  },
  journey: {
    2024: ['Started learning Rust and C++'],
    2023: ['Started learning C, Java and Kotlin'],
    2022: ['Learned Typescript', 'Learned basic React', 'Learned TailwindCSS', 'Learned Lua'],
    2021: ['Learned Javascript, PHP', 'Learned Python'],
    2020: ['Learned HTML, CSS']
  },
  contact: {
    Email: {
      link: `mailto:${email}`,
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
      icon: <SiInstagram />
    },
    X: {
      link: 'https://x.com/budchirp',
      icon: '𝕏'
    }
  }
}

export default data
