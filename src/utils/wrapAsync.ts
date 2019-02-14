import { Response, Request, NextFunction, RequestHandler } from 'express';

export default function wrapAsync(fn: RequestHandler) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}
