import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import apiRoutes from './api/api.route';

const app = express();

// load environment variables
dotenv.config({ path: '.env' });

// express config
app.set('port', process.env.PORT);

// api routes
app.use('/api', apiRoutes);

// default error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  res.status(status).send(err);
});

export default app;
