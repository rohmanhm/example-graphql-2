/* @flow */

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString
} from 'graphql'
import userType, {
  getUsers
} from './User'

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query Type',
  fields: {
    users: {
      type: new GraphQLList(userType),
      description: 'Show all users registered',
      resolve: getUsers
    }
  }
})

export const Schema = new GraphQLSchema({
  query: QueryType
})

export default Schema
