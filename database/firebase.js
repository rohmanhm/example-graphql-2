/* @flow */

import { resolve } from 'path'
import admin from 'firebase-admin'
import config from '../config'

const { url } = config.firebase

const serviceAccount = resolve(__dirname, 'firebaseServiceAccount.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: url
})

export default admin.database()
