/* @flow */

import server from '../server'
import config from '../config'
import { assertStatusCode } from './helpers/serverAssertions'

describe('Server', () => {

  beforeAll(() => {
    server.listen(config.port, () => {
      console.log('Server test running')
    })
  })

  afterAll(() => {
    // shutdown server
    server.close()
  })

  it('Should open graphiql', () => {
    assertStatusCode(`http://localhost:${ config.port }/${ config.graphiqlEndpoint }`, 200)
  })
})