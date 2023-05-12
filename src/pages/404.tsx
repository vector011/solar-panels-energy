import { type NextPage } from 'next'
import { useRouter } from 'next/router'

import { useDidMount } from '~/hooks'

const Custom404: NextPage = () => {
  const router = useRouter()

  useDidMount(() => {
    void router.replace('/')
  })

  return <></>
}

export default Custom404
