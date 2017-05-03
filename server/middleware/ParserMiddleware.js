/* @flow */

import bodyParser from 'body-parser'

export default (server: Object): void => {
  // support json encoded bodies
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
}
