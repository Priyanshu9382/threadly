import mongoose from "mongoose";

export interface IUser extends Document{
    username: string,
    email: string,
    password: string,
    role: 'user' | 'admin',
    avatar: string,
    createdAt: Date,
    updatedAt: Date
}

const UserSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    avatar:{
        type: String,
        // required: true,
    }
},{timestamps: true})

export default mongoose.model<IUser>("User", UserSchema)