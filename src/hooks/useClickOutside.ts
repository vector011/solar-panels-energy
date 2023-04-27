/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect } from 'react'

const useClickOutside = (ref: any, cb: () => void) => {
  useEffect(() => {
    const listener = (e: MouseEvent) =>
      !!ref?.current && !ref.current.contains(e.target) && cb()

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, cb])
}

export default useClickOutside
