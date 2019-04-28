"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            unique: true,
            primaryKey: true,
            type: DataTypes.STRING,
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
exports.default = Users;
