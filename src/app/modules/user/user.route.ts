import express from 'express'
import { USerController } from './user.controller'

const router = express.Router()

router.post('/create-user', USerController.createUser)

export const UserRoute = router
