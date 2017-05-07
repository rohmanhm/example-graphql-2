import userType from '../'
import * as resolver from '../resolver'

afterAll(done => {
  done()
})

describe('User', () => {
  describe('schema', () => {
    it('should not empty', () => {
      expect(userType)
    })
  })

  describe('resolver', () => {
    it('should return at least 1 data', async done => {
      const users = await resolver.getUsers()
      const actual = await Object.keys(users).length
      expect(actual).toBeGreaterThan(0)
      done()
    })

    it('should parse values from firebase object', () => {
      const actual = {
        firebasekeythatidontcare: {
          username: 'admin',
          name: 'admin name'
        },
        firebasekeythatidontcarereally: {
          username: 'admin2',
          name: 'admin2 name'
        }
      }
      const expected = [
        {
          username: 'admin',
          name: 'admin name'
        },
        {
          username: 'admin2',
          name: 'admin2 name'
        }
      ]
      expect(resolver.parseValues(actual)).toMatchObject(expected)
    })
  })
})
