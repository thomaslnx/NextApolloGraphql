import React from 'react';

import { withApollo } from '../libs/apollo';
// import { useQuery } from '@apollo/react-hooks';
import { useQuery } from '@apollo/client';
import { ALL_CONSULTS } from '../gql/allConsults';

const Home = () => {

  const { loading, error, data } = useQuery(ALL_CONSULTS);

    if (error) {
      return <h1>Error</h1>
    }

    if (loading) {
      return <h1>Loading...</h1>
    }

  return(
    <>
      <h1>Nextjs, Apollo and GraphQl setup</h1>

      <div>
        {
          data.characters.results.map( data => (
            <ul key={data.id}>
              <li>{data.id}</li>
              <li>{data.name}</li>
            </ul>
          ))
        }
      </div>

    </>
    );
}

export default withApollo({ ssr: true })(Home);