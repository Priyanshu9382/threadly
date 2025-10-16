import mongoose,{Document} from "mongoose";
import bcrypt from 'bcrypt'
import jwt, {Secret,SignOptions} from 'jsonwebtoken'
export interface IUser extends Document{
    username: string
    email: string
    password: string
    role: 'user' | 'admin'
    avatar: string
    refreshToken:string
    createdAt: Date
    updatedAt: Date
    isPasswordCorrect(password:string): Promise<boolean>
    generateRefreshToken(): Promise<string>
    generateAccessToken(): Promise<string>
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
    },
    refreshToken: {
        type: String,
        default: ""
    },
},{timestamps: true})

UserSchema.methods.isPasswordCorrect = async function(password: string):Promise<boolean>{
    return await bcrypt.compare(password, this.password)
}

UserSchema.pre<IUser>("save",async function(next){
    if(!this.isModified("password")) return next()
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.generateAccessToken = async function():Promise<string>{
    return  jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        }, process.env.ACCESS_TOKEN_SECRET as Secret,
        {
            expiresIn: 24*3600
        }
    )
}
UserSchema.methods.generateRefreshToken = async function():Promise<string>{
    return  jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        }, process.env.REFRESH_TOKEN_SECRET as Secret,
        {
            expiresIn: 7*24*3600
        }
    )
}
export default mongoose.model<IUser>("User", UserSchema)