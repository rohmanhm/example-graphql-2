const config = {
  graphqlEndpoint: '/graphql',
  graphiqlEndpoint: '/graphiql'
}

let envConfig 

switch (process.env.NODE_ENV) {
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