import { useEffect } from 'react'

export default (ref: any, cb: () => void) => {
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
