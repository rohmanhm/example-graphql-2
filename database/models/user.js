/* @flow */

import Sequelize from 'sequelize'

export const table = 'users'
export const schema = {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  fullname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
}

export const config = {
  
}

export default (conn: sequelize$Sequelize) => {
  return conn.define(table, schema, config)
}
