import { useState, useCallback } from 'react'

type UseToggle = {
  visible: boolean
  show: () => void
  hide: () => void
  toggle: () => void
}

export default (initialValue: boolean = false): UseToggle => {
  const [visible, setVisible] = useState<boolean>(initialValue)

  const show = useCallback(() => setVisible(true), [])

  const hide = useCallback(() => setVisible(false), [])

  const toggle = useCallback(() => setVisible((prev) => !prev), [])

  return { visible, show, hide, toggle }
}
