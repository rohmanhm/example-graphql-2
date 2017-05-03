import bodyParser from 'body-parser'

export default server => {
  // support json encoded bodies
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
}
