//create user service
import User from './user.model'
import { IUser } from './user.interface'
import config from '../../../config'
import { generateUserID } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //created auto increment id
  const id = await generateUserID()
  user.id = id

  // created default password for student
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)
  // if user not created throw error
  if (!createdUser) {
    throw Error('Something went wrong creating the user')
  }
  return createdUser
}

//export all user services
export default {
  createUser,
}
