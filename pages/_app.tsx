import type { AppProps } from 'next/app'
import EventManagerApolloProvider from '../graphql/apollo'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <EventManagerApolloProvider><Component {...pageProps} /></EventManagerApolloProvider>
}
