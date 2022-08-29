import { useEffect, useState } from 'react'

export default (ref: any): number => {
  const [distance, setDistance] = useState<number>(0)

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref) return

      const { pageX, pageY, clientY, clientX } = e
      const { left, top, width, height } = ref.current.getBoundingClientRect()

      const x = Math.pow(clientX - (left + width / 2), 2)
      const y = Math.pow(clientY - (top + height / 2), 2)

      setDistance(Math.floor(Math.sqrt(x + y)))
    }

    document.addEventListener('mousemove', listener)

    return () => {
      document.removeEventListener('mousemove', listener)
    }
  }, [ref])

  return distance
}
