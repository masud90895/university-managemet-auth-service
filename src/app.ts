//import express from "express";
import { Application } from 'express'
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
// use globalErrorHandler
app.use(globalErrorHandler)

// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(404, 'Not Found')
// })

// console.log("object");

export { app, port }
