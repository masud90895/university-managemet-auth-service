import { IUser } from './user.interface';
import { User } from "./user.model";

const createUserDb= async (data:IUser):Promise<IUser>=>{

    const user = new User(data);

      await user.save();

      console.log(user);

      return user

}



export const getUserDb= async ():Promise<IUser[]>=>{
const users = await User.find()
return users
}


export const getSpecificsUser = async (id:string):Promise<IUser | null>=>{

    const user = await User.findOne({id : id})
    return user

}





export default createUserDb