import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GYM_BRO_API,
  cache: new InMemoryCache(),
})
