import { model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import { Schema } from 'mongoose';

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
);

//create a model for user statics
const User = model<IUser, UserModel>('User', userSchema);

export default User;
