/* @flow */

import express from 'express'
import Middleware from './middleware'

class Server {
  server: express$Application

  constructor (): void {
    this.server = express()
    this.middleware()
  }

  start (port: number): void {
    this.server.listen(port, error => {
      if (error) return console.log(error)

      console.log(`Server running on ${ port }`)
    })
  }

  middleware (): void {
    Middleware(this.server)
  }
}

export default Server
