import { type NextPage } from 'next'
import { type SSRConfig } from 'next-i18next'

type TLocale = {
  locale?: string
}

declare global {
  type NextPageWithProps<P = unknown> = NextPage<SSRConfig & P & TLocale>

  type ID = string
}

export {}
