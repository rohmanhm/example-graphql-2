/* @flow */

import express from 'express'

import config from '@/config'
import Middleware from './middleware'

const { port } = config

const server = express()

// apply middleware to server
Middleware(server)

server.listen(port, () => {
  console.log(`Server running on http://localhost:${ port }/`)
})
