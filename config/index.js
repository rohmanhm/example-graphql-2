const config = {
  env: process.env.NODE_ENV,
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