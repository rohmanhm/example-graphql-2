/* @flow */

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import schema from '@/containers'

export default (server: Object): void => {
  const options: Object = {
    schema,
    graphiql: true
  }

  server.use('/graphql', graphqlExpress(options))
  server.use('/graphiql', graphiqlExpress(
    {
      endpointURL: '/graphql',
      query: ''
    }
  ))
}
