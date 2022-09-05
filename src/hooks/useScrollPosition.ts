import { useState, useEffect } from 'react'

export default function useScrollPosition(scrollFactor = 0): number {
  const [position, setPosition] = useState<number>(0)

  useEffect(() => {
    const onScroll = () => setPosition(window.scrollY)

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return position * scrollFactor
}
