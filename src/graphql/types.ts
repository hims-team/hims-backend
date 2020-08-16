import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    role: { type: GraphQLString},
    email: { type: GraphQLString },
  }),
});
