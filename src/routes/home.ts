import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (request: Request, response: Response) => {
  return response.status(200).json({
    status: 'success',
    message: 'HIMS - home route',
    data: [],
  });
});

router.get('/dummyRoute', (request: Request, response: Response) => {
  return response.status(200).json({
    status: 'success',
    message: 'this is a dummy route',
    data: [
      {
        userId: '-Lap3GBWSnuOBYZp1ZpF',
        roleId: '-Lap3G59CKqnPcO3gw0f',
        email: 'dummy-user.user@mail.com',
        createdAt: '2019-09-28T10:55:51.603Z',
        centerDetails: {
          hospitalId: 'Lap4HGTnuOBYZp1ZpF',
          hospitalDetails: [],
        },
      },
    ],
  });
});

export default router;
