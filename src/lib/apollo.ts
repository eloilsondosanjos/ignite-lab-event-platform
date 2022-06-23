import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qdklto3obd01xk10ix8474/master',
  cache: new InMemoryCache
})