/* @flow */

import axios from 'axios'
import server from '../server'
import config from '../config'

const request = axios.create({
  baseURL: `http://localhost:${ config.port }`
})

describe('Server', () => {

  beforeAll(done => {
    
  })

  afterAll(done => {
    
  })

  it('should open endpoint /graphiql', async done => {
    
  })

  it('should open endpoint /graphql', () => {
    
  })
})