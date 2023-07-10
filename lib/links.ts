type Link = {
  label: string
  url: string
}

const links: Link[] = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Contact me',
    url: '/contact'
  },
  {
    label: 'Projects',
    url: '/projects'
  }
]

export { links, type Link as LinkProps }
