const config = {
  // is empty
}

module.exports = process.env.NODE_ENV !== 'production'
  ? Object.assign(config, require('./dev'))
  : Object.assign(config, require('./prod'))
