import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import User from '../src/repository/UserRepository';
import { UserType } from './types';

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    addUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        role: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      async resolve(parentValue, args) {
        const { id, name, email, role } = args;
        const userDetails = { id, name, email, role };
        try {
          const user = await User.createUser(userDetails);
          return user;
        }
        catch (error) {
          throw new Error(error);
        };
      },
    },
  }),
});

export default RootMutation;
