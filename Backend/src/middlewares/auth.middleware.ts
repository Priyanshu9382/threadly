import { ApiError } from "../utils/ApiError";
import { AsyncHandler } from "../utils/AsyncHandler";
import jwt,{DecodeOptions} from 'jsonwebtoken'
import User from "../models/user.model";

const verifyUser = AsyncHandler(async(req, res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if(!token){
            throw new ApiError(401,"Unauthorized Access")
        }
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as {_id:string}
        const user = await User.findById(decoded?._id).select("-password -refreshToken")
        if(!user){
            throw new ApiError(401, "Invalid access token")
        }
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, "Invalid Access Token")
    }
})

export {verifyUser}