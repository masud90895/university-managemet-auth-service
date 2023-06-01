/* eslint-disable no-console */
//import express from "express";
import { Application, Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import userRouter from './app/modules/user/user.route'

const app: Application = express()
const port = 5000

//parse json
app.use(express.json())
//url encoded
app.use(express.urlencoded({ extended: true }))

app.use(cors())

//console env
console.log(app.get('env'))

//application  route

app.use('/api/v1/users/', userRouter)

app.get('/', async (req: Request, res: Response) => {
  // Send a response to the browser
  res.send('Hello World!')
})

export { app, port }
