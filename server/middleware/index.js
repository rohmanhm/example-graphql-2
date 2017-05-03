export default server => {
  server.use(import('./ParserMiddleware'))
  server.use(import('./GraphQLMiddleware'))
}
