import { useEffect } from 'react'

const useDidMount = (cb: () => void) => useEffect(() => cb && cb(), [cb])

export default useDidMount
