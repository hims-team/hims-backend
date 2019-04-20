import { GraphQLID,  GraphQLList, GraphQLObjectType } from 'graphql';
import models from '../src/db/models';
import User from '../src/repository/UserRepository';
import { UserType } from './types';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    getSingleUser: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      async resolve(parentValue: object, args: any) {
        try {
          const user = await User.getSingleUser(args.id);
          return user;
        } catch (error) {
          throw new Error(error);
        }
      },
    },

    getAllUsers: {
      type: new GraphQLList(UserType),
      async resolve(parentValue, args) {
        try {
          const user = await User.getAllUsers();
          return user;
        } catch (error) {
          throw new Error(error);
        }
      },
    },
  }),
});

export default RootQuery;
