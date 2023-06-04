import { Model } from 'mongoose'

//create a interface for user
export type IUser = {
  id: string
  role: string
  password: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
