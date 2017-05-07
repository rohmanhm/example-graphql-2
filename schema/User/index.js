/* @flow */

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} from 'graphql'
import {
  NodeInterface
} from '../interfaces'

export default new GraphQLObjectType({
  name: 'User',
  description: 'User schema',
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    access_token: {
      type: GraphQLString
    }
  },
  // interfaces: [NodeInterface]
})

export * from './resolver'
