import { ApolloClient, ApolloLink } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import fetch from 'isomorphic-unfetch';

interface Link {
  uri: string,
  credentials: string,
  fetch,
}

export default function createApolloClient(initialState, ctx) {
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: 'https://staging.api.upacaipalmas.com/developers/graphiql',
      credentials: 'same-origin',
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState),
  })
}