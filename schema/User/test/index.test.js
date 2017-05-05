import userType from '../'
import { getUsers } from '../resolver'

describe('User', () => {
  describe('schema', () => {
    test('Should not empty', () => {
      expect(userType)
    })
  })

  describe('resolver', () => {
    test('It should return at least 1 data', () => {
      const actual = Object.keys(getUsers()).length
      expect(actual).toBeGreaterThan(0)
    })
  })
})
