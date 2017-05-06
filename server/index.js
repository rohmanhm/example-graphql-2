/* @flow */

import Server from './server'
import { port } from '../config'

const server = new Server()
server.start(port)

export default server
