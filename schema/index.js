/* @flow */

import { GraphQLSchema } from 'graphql'
import queryType from './Query'

export default new GraphQLSchema({
  query: queryType
})
