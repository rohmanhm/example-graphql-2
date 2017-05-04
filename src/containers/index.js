/* @flow */

import { makeExecutableSchema } from 'graphql-tools'
// import { schema as userSchema, resolver as userResolver } from './User'

const rootSchema = gql`
  type Query {
    feed: String
  }

  schema {
    query: Query
  }
`

const rootResolvers = {
  Query: {
    feed () {
      return 'feed'
    }
  }
}

const schema = rootSchema
const resolvers = Object.assign({}, rootResolvers)

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})

export default executableSchema
