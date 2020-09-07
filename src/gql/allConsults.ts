// import gql from 'graphql-tag';
import { gql } from '@apollo/client'

export const ALL_CONSULTS = gql`
  query characters {
    characters {
      results {
        id
        name
      }
    }
  }
`;