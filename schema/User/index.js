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
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'User ID'
    },
    name: {
      type: GraphQLString,
      description: 'User full name'
    },
    email: {
      type: GraphQLString,
      description: 'User email'
    }
  },
  interfaces: [NodeInterface]
})

export * from './resolver'
