import { useEffect, type MutableRefObject } from 'react'

const useChangeTranslateByScroll = <T extends HTMLElement>(
  ref1: MutableRefObject<T | null>,
  ref2: MutableRefObject<T | null>,
  mult1: number,
  mult2: number,
  scrollFactor: number
) => {
  useEffect(() => {
    const listener = () => {
      if (!ref1?.current || !ref2.current) return

      const scrollY = window.scrollY * scrollFactor
      const offset = window.innerHeight * 0.5

      ref1.current.style.transform = `translateY(${mult1 * scrollY}px)`
      ref2.current.style.transform = `translateY(${
        mult2 * (scrollY - offset)
      }px)`
    }

    document.addEventListener('scroll', listener)

    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [ref1, ref2, mult1, mult2, scrollFactor])
}

export default useChangeTranslateByScroll
