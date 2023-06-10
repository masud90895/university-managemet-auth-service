//import express from "express";
import { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';

const app: Application = express();
const port = 5000;

//parse json
app.use(express.json());
//url encoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//application  route
app.use('/api/v1', routes);

// use globalErrorHandler
app.use(globalErrorHandler);

//handle not found route
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Route not found',
      },
    ],
  });
  next();
});

export { app, port };
