/* @flow */

import { GraphQLSchema } from 'graphql'
import queryType from './Root/Query'

export default new GraphQLSchema({
  query: queryType
})
