import { useCallback, useEffect } from 'react'
import { Location, useLocation } from 'react-router'

type Title = {
  prefix?: string
  delimiter?: string
  titles?: Record<string, string>
}

type Props = {
  scrollTop?: boolean
  changeTitle?: Title
}

export default ({ changeTitle, scrollTop }: Props): Location => {
  const location = useLocation()

  const handleTitle = useCallback(
    ({ pathname }: Location) => {
      if (!changeTitle) return

      const { titles, prefix, delimiter = ' | ' } = changeTitle
      const title = titles?.[pathname.substring(1)]

      document.title =
        title && prefix
          ? `${title}${delimiter}${prefix}`
          : title || prefix || ''
    },
    [changeTitle]
  )

  useEffect(() => {
    if (scrollTop) window.scrollTo(0, 0)
    if (changeTitle) handleTitle(location)
  }, [location, scrollTop, changeTitle, handleTitle])

  return location
}
