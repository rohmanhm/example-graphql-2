// @flow

import express from 'express'
import GraphQLServer from 'graphql-server-express'
import config from '@config'

const { port } = config

const server = express()

server.listen(port, () => {
  console.log(`Server running on http://localhost:${ port }/`)
})
