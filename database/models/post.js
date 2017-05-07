/* @flow */

import Sequelize from 'sequelize'

export const table = 'posts'
export const schema = {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
}

export const config = {
  
}

export default (conn: sequelize$Sequelize) => {
  return conn.define(table, schema, config)
}
