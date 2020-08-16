import 'reflect-metadata';
import { createConnection } from 'typeorm';

import entities from '../entities';
import config from './env.config';

const { NODE_ENV } = process.env;
const configuration = config[NODE_ENV];

export default createConnection({
  ...configuration,
  entities,
  synchronize: true,
  logging: true,
});
