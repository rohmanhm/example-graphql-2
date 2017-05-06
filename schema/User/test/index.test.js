import userType from '../'
import { getUsers } from '../resolver'

describe('User', () => {
  describe('schema', () => {
    it('should not empty', () => {
      expect(userType)
    })
  })

  describe('resolver', () => {
    it('should return at least 1 data', () => {
      const actual = Object.keys(getUsers()).length
      expect(actual).toBeGreaterThan(0)
    })
  })
})
