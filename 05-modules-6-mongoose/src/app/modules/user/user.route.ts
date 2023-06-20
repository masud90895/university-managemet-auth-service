import express from "express";
import createUser, { getSpecificsUserDb, getUsers } from "./user.controller";

const router = express.Router();

router.get('/',getUsers)
router.post('/createdUser', createUser)
router.get('/:id',getSpecificsUserDb)


export default router;