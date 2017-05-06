/* @flow */

import http from 'http'
import express from 'express'
import Middleware from './middleware'

class Server {
  server: express$Application

  constructor (port?: number): void {
    this.server = express()
    this.middleware()

    if (port) this.start(port)
  }

  start (port: number): void {
    const server = http.createServer(this.server)
    server.listen(port, error => {
      if (error) return console.log(error)

      console.log(`Server running on ${ port }`)
    })
  }

  middleware (): void {
    Middleware(this.server)
  }
}

export default Server
