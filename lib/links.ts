type LinkProps = {
  label: string
  url: string
}

const links: LinkProps[] = [
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
  },
  {
    label: 'Blog',
    url: '/blog'
  }
]

export { links, type LinkProps }
