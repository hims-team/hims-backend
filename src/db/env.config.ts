import 'dotenv/config';
const {
  DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_TYPE, DEV_DB_NAME,
} = process.env;

const config: Record<string, any> = {
  development: {
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
  production: {
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
  test: {
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DEV_DB_NAME,
  },
}

export default config;
