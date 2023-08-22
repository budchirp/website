import React from 'react'

import { Code } from 'bright'
import Link from 'next/link'

Code.lineNumbers = true

Code.theme = 'github-dark'

Code.className = '!bg-gray-800 !font-mono'
Code.codeClassName = '!bg-gray-800 !font-mono'

const components = {
  a: (props: any): React.ReactNode => <Link href={props.href}>{props.children}</Link>,
  pre: Code
}

export { components }
