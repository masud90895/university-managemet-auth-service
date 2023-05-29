import { Model, model } from 'mongoose'
import { IUser } from './user.interface'
import { Schema } from 'mongoose'

type UserModel = Model<IUser, object>

// create as schema for user
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

//create a model for user statics
const User = model<IUser, UserModel>('User', userSchema)

export default User
