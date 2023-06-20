import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id : { type: String, required: true,unique: true },
    role : { type: String, required: true},
    password : { type: String,required: true},
    name: {
        firstName : { type: String, required: true},
        middleName : { type: String},
        lastName : { type: String}
    },
    dateOfBirth : { type: String},
    gender: { type: String, enum : ['male', 'female']},
    email: { type: String },
    contact : { type: String},
    emergencyNumber : { type: String},
    presentAddress : { type: String},
    permanentAddress : { type: String}
  });


//   Step 3: Model created 

const User = model<IUser>("User",userSchema)

export {User, userSchema} 