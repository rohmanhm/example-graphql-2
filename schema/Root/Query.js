/* @flow */

import {
  GraphQLObjectType,
  GraphQLList,
} from 'graphql'
import userType, {
  getUsers
} from '../User'

export default new GraphQLObjectType({
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
