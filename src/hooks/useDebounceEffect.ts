import { useEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
function useDebounceEffect<TCallback extends Function>(
  cb: TCallback,
  deps: React.DependencyList,
  delay = 400
): TCallback {
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const debouncedCallback = () => {
      timerRef.current = undefined
      cb()
    }

    clearTimeout(timerRef.current)

    timerRef.current = setTimeout(debouncedCallback, delay)

    return () => {
      clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return cb
}

export default useDebounceEffect
