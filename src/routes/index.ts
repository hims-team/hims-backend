import { Request, Response, Router } from 'express';

import home from './home';

const router = Router();

// add your router function here
router.use('/', home);
router.use('*', (request: Request, response: Response) => {
  return response.status(404).json({
    status: 'error',
    message: 'Oops, page not found',
  });
});

export default router;
