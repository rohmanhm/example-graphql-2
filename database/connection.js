/* @flow */

import Sequelize from 'sequelize'
import config from '../config'

const { name, host, user, pass, dialect } = config.db

export default new Sequelize(name, user, pass, {
  host,
  dialect
})
