require('dotenv').config();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    operatorsAliases: false,
    dialect: 'postgres',
    logging: false,
  },

  test: {
    // dialect: 'postgres',
    // enter test database credentials here
  },

  staging: {
    // dialect: 'postgres',
    // enter staging database credentials here
  },

  production: {
    // dialect: 'postgres',
    // enter production database credentials here
  },
}

module.exports = config;
