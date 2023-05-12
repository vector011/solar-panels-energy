import { useEffect, type MutableRefObject } from 'react'

const usePageOffset = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>
) => {
  useEffect(() => {
    if (!ref.current) return

    const bottomOffset = `${ref.current.clientHeight}px`
    document.body.style.paddingBottom = bottomOffset

    return () => {
      document.body.style.paddingBottom = '0px'
    }
  }, [ref])
}

export default usePageOffset
