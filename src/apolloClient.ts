import { ApolloClient, HttpLink, InMemoryCache, } from '@apollo/client';

import fetch from 'isomorphic-unfetch';

export default function createApolloClient(initialState, ctx) {
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: 'https://rickandmortyapi.com/graphql',
      credentials: 'same-origin',
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState),
  })
}

// uri: 'https://staging.api.upacaipalmas.com/developers/graphiql',