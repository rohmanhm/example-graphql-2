/* @flow */

import ParserMiddleware from './ParserMiddleware'
import GraphQLMiddleware from './GraphQLMiddleware'

export default (server: Object): void => {
  ParserMiddleware(server)
  GraphQLMiddleware(server)
}
