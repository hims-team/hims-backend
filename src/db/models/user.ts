import { Sequelize } from 'sequelize';

const Users = (sequelize: Sequelize, DataTypes: any) => {
  const User = sequelize.define('User', {
    id: {
      unique: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      unique: false,
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});

  return User;
};

export default Users;
