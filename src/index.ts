// tslint:disable:no-console
import dotenv from 'dotenv';
import app from './app';
import models from './db/models/index';

dotenv.config();

const PORT = process.env.PORT || 9000;

models.sequelize.sync().then(() => {
  app.on('error', (error) => {
    console.log(error);
  });
  app.on('listening', (listen) => {
    console.log(listen);
  });
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} 🚀`);
  });
});
