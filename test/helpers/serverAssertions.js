/* @flow */

import http from 'http'

export const assertStatusCode = (route: string, expectedCode: number): void => {
  http.get(route, res => {
    expect(res.statusCode).toEqual(expectedCode)
    done()
  })
}