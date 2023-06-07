//import express from "express";
import { Application } from 'express';
import express from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

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

// console.log("object");

export { app, port };
