//import express from "express";
import { Application, Request, Response } from 'express'
import express from 'express'
import cors from 'cors'

const app: Application = express()
const port = 5000

//parse json
app.use(express.json())
//url encoded
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  // Send a response to the browser
  res.send('Hello World!')
})

export { app, port }
