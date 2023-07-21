import { useEffect, useRef, useState } from 'react'

const useElementOnScreen = (): [React.RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const makeAppearRepeating = (entries: any) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const callback = makeAppearRepeating

  useEffect(() => {
    const containerRefCurrent = containerRef.current
    const observer = new IntersectionObserver(callback, { threshold: 0 })
    if (containerRefCurrent) observer.observe(containerRefCurrent)

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent)
      }
    }
  }, [containerRef, callback])

  return [containerRef, isVisible]
}

export { useElementOnScreen }
