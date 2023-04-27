import { type AppType } from 'next/dist/shared/lib/utils'
import { appWithTranslation } from 'next-i18next'
import { ApolloProvider } from '@apollo/client'
import localFont from 'next/font/local'
import Head from 'next/head'

import { Main } from '~/layouts'
import { globalStyles } from '~/styles'
import { TITLE } from '~/constants/global'

import client from '~/apollo'

const visuelt = localFont({
  variable: '--visuelt-font',
  src: [
    {
      path: '../../public/assets/fonts/Visuelt/Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Visuelt/Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

globalStyles()

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <ApolloProvider client={client}>
      <Main className={`${visuelt.className} ${visuelt.variable}`}>
        <Component {...pageProps} />
      </Main>
    </ApolloProvider>
  </>
)

export default appWithTranslation(App)
