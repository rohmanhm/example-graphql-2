/* @flow */

import { readFileSync } from 'fs'
import { resolve } from 'path'

export const loadSchema = (pwd: ?string): string | boolean => {
  if (typeof pwd === 'string') {
    const schemaPath = resolve(pwd, 'schema.graphql')
    return readFileSync(schemaPath, 'utf-8')
  }

  return false
}
