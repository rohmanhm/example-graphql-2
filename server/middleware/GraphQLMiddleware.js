/* @flow */

import { graphqlExpress } from 'graphql-server-express'
import schema from '@/containers'

export default (server: Object): void => {
  const options = {
    schema
  }
  server.use('/graphql', graphqlExpress(options))
}
