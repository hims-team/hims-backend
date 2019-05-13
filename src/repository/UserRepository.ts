import models from '../db/models';

const { User } = models;

interface UserTypes {
  id: number;
  name: string;
  email: string;
  role: string;
}

/**
 * @description { user class }
 */
export default class UserRepository {

  /**
   * @description method to create a new user
   *
   * @param { userDetails }
   *
   * return { user }
   */
  public static createUser = async (userDetails: UserTypes): Promise<UserTypes> => {
    const { id, name, email, role } = userDetails;
    try {
      const user = await User.create({ id, name, email, role });
      if (!user) { return null }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * @description method to get details of a user
   *
   * @param { userDetails }
   *
   * return { user }
   */
  public static getSingleUser = async (userDetails: UserTypes): Promise<UserTypes> => {
    const { id } = userDetails;
    try {
      const user = await User.findOne(id);
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * @description method to get details of all users
   *
   * return { user }
   */
  public static getAllUsers = async (): Promise<UserTypes> => {
    try {
      const user = await User.findAll();
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
