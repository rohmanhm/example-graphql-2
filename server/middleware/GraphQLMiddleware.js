/* @flow */

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { graphqlEndpoint, graphiqlEndpoint } from '@config'
import schema from '@/containers'

export default (server: Object): void => {
  const options: Object = {
    schema,
    graphiql: true
  }

  server.use(graphqlEndpoint, graphqlExpress(options))
  server.use(graphiqlEndpoint, graphiqlExpress(
    {
      endpointURL: graphqlEndpoint,
      query: ''
    }
  ))
}
