import { Router } from 'express';
import wrapAsync from '../utils/wrapAsync';
import { getPersons } from './api.controller';

const apiRouter = Router();
apiRouter.get('/persons', wrapAsync(async (req, res, next) => {
  const response = await getPersons();
  return res.send(response);
}));

export default apiRouter;
