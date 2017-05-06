import request from 'supertest'
import Express from '../server/express'
import config from '../config'

describe('Server', () => {
  let app
  beforeAll(() => {
    app = new Express().server
  })

  afterAll(done => {
    app.close()
    done()
  })

  it('should open endpoint /graphiql', () => {
    request(app)
      .get(config.graphiqlEndpoint)
      .expect(200)
      .then(res => expect(res.status).toEqual(200))
  })

  it('should open endpoint /graphql', () => {
    request(app)
      .get(config.graphqlEndpoint)
      .expect(400)
      .then(res => expect(res.text).toEqual('GET query missing.'))
  })
})
