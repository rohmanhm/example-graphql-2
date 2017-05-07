/* @flow */

import db from '@/database/firebase'

const userRef = db.ref('users')

export const parseValues = (values: any) => {
  return Object.values(values)
}

export const getUser = (id: string) => {

}

export const getUsers = () => {
  return userRef.once('value')
    .catch(err => err)
    .then(snapshot => {
      return parseValues(snapshot.val())
    })
}
