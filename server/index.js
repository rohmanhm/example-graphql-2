/* @flow */

import express from 'express'

import config from '@/config'
import Middleware from './middleware'

const { port, env } = config

const server = express()

// apply middleware to server
Middleware(server)

if (env !== 'test') {
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${ port }/`)
  })
}

export default server