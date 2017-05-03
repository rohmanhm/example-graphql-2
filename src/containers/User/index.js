// @flow

import { makeExecutableSchema } from 'graphql-tools'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import resolvers from './resolver'

const schemaPath = resolve(__dirname, 'schema.gql')
const schema = readFileSync(schemaPath, 'utf-8')

export default makeExecutableSchema({
  typeDefs: [schema],
  resolvers,
})
