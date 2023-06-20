import { Request, Response } from "express"
import createUserDb, { getSpecificsUser, getUserDb } from "./user.service"

const createUser =async (req : Request, res:Response) => {
    const data = req.body
    const user = await createUserDb(data)
    res.json({
        status : 'success',
        data: user
    })
   
}

export  const getUsers = async (req : Request, res:Response) => {
    const users = await getUserDb()
    res.send({
        status : 'success',
        data : users
    })
}

// customers =>



export const  getSpecificsUserDb = async (req : Request, res:Response) => {
   const id = req.params.id;
    const user = await getSpecificsUser(id)
    res.send({
        status: 200,
        data : user
    })
}





export default createUser



/*pattern
 Route => controller => service

*/   