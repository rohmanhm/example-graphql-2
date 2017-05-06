/* @flow */

import Express from './express'
import { port } from '../config'

export { Express }
export default new Express(port)
