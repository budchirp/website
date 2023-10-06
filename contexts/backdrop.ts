import { createContext } from 'react'

type Backdrop = boolean

const BackdropContext = createContext<{
  backdrop: Backdrop
  setBackdrop: (backdrop: Backdrop) => void
}>({
  backdrop: false,
  setBackdrop: () => {}
})

export { BackdropContext, type Backdrop }
