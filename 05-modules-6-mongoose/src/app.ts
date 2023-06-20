import express, { Application} from "express";
import cors from 'cors'

const app : Application = express()

import userRoute from "./app/modules/user/user.route"

app.use(cors())

// parse data 
app.use(express.json())
app.use(express.urlencoded({ extended : true }))


// app.get('/api/v1/user',userRoute)
app.use('/api/v1/user',userRoute)
// app.use('/getUsers',userRoute)


export  {app}