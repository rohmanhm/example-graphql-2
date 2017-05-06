/* @flow */

import ParserMiddleware from './ParserMiddleware'
import GraphQLMiddleware from './GraphQLMiddleware'

export default (server: express$Router): void => {
  ParserMiddleware(server)
  GraphQLMiddleware(server)
}
