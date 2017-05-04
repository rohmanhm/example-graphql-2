import {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'
import userType from './User'

export const NodeInterface = new GraphQLInterfaceType({
  name: 'NodeInterface',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolveType (fields) {
    if (fields.name) {
      return userType
    }

    return null
  }
})
