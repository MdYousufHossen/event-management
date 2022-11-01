import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';


const GRAPQL_ENDPOINT= 'https://api.react-finland.fi/graphql'

  const EventManagerApolloProvider:React.FC<PropsWithChildren<{}>>=({children})=>{
  const client = new ApolloClient({
        uri:GRAPQL_ENDPOINT,
        cache: new InMemoryCache(),
      });
      return <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
  }

  export default EventManagerApolloProvider