import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const catchAsync = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res);
    } catch (error) {
      next(error);
    }
  };
};

export default catchAsync;
