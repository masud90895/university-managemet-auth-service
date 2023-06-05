//import express from "express";
import { Application /* NextFunction, Request, Response */ } from 'express'
import express from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoute } from './app/modules/user/user.route'

const app: Application = express()
const port = 5000

//parse json
app.use(express.json())
//url encoded
app.use(express.urlencoded({ extended: true }))

app.use(cors())

//application  route

app.use('/api/v1/users/', UserRoute)

// testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

// use globalErrorHandler
app.use(globalErrorHandler)

// console.log("object");

export { app, port }
