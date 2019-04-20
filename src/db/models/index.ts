import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
// import configuration from '../config/config';

interface Element { [key: string]: any };
const configuration = require('../config/config');
const configUrl: Element = configuration;

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const config = configUrl[env];
// tslint:disable-next-line:no-console
const db: Element = {};

let sequelize: any;
const imports: any = 'import';
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(file => {
    const model: Element = sequelize[imports](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
