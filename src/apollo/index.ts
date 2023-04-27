import { ApolloClient, InMemoryCache } from '@apollo/client'

import { env } from '~/env.mjs'

const client = new ApolloClient({
  uri: env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
})

export default client
