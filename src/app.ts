import * as bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import express from 'express';
import routes from './routes';

import expressGraphQl from 'express-graphql';
import { GraphQLSchema } from 'graphql';

import mutation from '../graphql/mutation';
import query from '../graphql/queries';

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    dotenv.config();

    this.app.use(cors());
    this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    const schema = new GraphQLSchema({
      query,
      mutation,
    });

    // routes
    this.app.use('/api/v1', routes);
    this.app.use('/', expressGraphQl({
      schema,
      graphiql: true,
    }));
  }
}

export default new App().app;
