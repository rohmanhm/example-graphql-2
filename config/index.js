const { resolve } = require('path')
const { existsSync } = require('fs')

let dotenv = resolve(__dirname, '..', '.env')
if (!existsSync(dotenv)) {
  dotenv = resolve(__dirname, '..', '.env.example')
}
require('dotenv').config({ path: dotenv })

const config = {
  port: 80,
  env: process.env.NODE_ENV,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  },
  graphqlEndpoint: '/graphql',
  graphiqlEndpoint: '/graphiql'
}

let envConfig 
switch (config.env) {
  case 'production':
    envConfig = Object.assign(config, require('./prod'))
    break
  case 'test':
    envConfig = Object.assign(config, require('./test'))
    break
  default:
    envConfig = Object.assign(config, require('./dev'))
    break;
}

module.exports = envConfig