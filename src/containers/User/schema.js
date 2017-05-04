const schema = `
# Node type
type Node {
  id: ID!
}

# User type
type User implements Node {
  id: ID!
  # Every user have username, and it's must unique
  username: String!
  # Name of user registered
  name: String
  # Email user
  email: String
}
`

export default schema
