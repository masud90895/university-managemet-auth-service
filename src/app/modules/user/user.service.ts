//create user service
import User from './user.model'
import { IUser } from './user.interface'
import config from '../../../config'
import { generateUserID } from './user.utils'
import ApiError from '../../../errors/ApiError'

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
    throw new ApiError(400, 'Something went wrong creating the user')
  }
  return createdUser
}

//export all user services
export const UserService = {
  createUser,
}
