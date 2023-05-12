import { useEffect, type MutableRefObject } from 'react'

const useChangeOpacityByDistance = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref?.current) return

      const { clientY, clientX } = e
      const { left, top, width, height } = ref.current.getBoundingClientRect()

      const x = Math.pow(clientX - (left + width / 2), 2)
      const y = Math.pow(clientY - (top + height / 2), 2)

      const distance = Math.floor(Math.sqrt(x + y))
      const amount = Math.abs(
        distance / (window.innerHeight + window.innerWidth)
      )

      ref.current.style.opacity = `clamp(0.3, calc(0.5 - ${amount}), 0.7)`
    }

    document.addEventListener('mousemove', listener)

    return () => {
      document.removeEventListener('mousemove', listener)
    }
  }, [ref])
}

export default useChangeOpacityByDistance
