/* @flow */

import http from 'http'
import server from '../server'
import config from '../config'

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

  test('Should open graphiql', () => {
    http.get(`http://localhost:${ config.port }/${ config.graphiqlEndpoint }`, function (res) {
      expect(res.statusCode).toEqual(200)
      done()
    })
  })
})