import { graphqlExpress } from 'graphql-server-express'
import schema from '@/containers'

export default server => {
  const options = {
    schema
  }
  server.use('/graphq;', graphqlExpress(options))
}
