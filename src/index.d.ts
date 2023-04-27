import { type NextPage } from 'next'
import { type SSRConfig } from 'next-i18next'

declare global {
  type NextPageWithProps<P = unknown> = NextPage<SSRConfig & P>

  type ID = string
}

export {}
