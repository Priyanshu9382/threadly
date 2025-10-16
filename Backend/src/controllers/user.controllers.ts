import { AsyncHandler } from '../utils/AsyncHandler'
import { ApiError } from '../utils/ApiError'
import { ApiResponse } from '../utils/ApiResponse'
import User, { IUser } from '../models/user.model'

const registerUser = AsyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        throw new ApiError(400, "All fields are required")
    }
    const user = await User.findOne({ $or: [{ email }, { username }] })
    if (user) {
        throw new ApiError(400, "User already exists!")
    }
    // const avatar = `../assets/images/${Math.ceil(Math.random()*4)}`
    const newUser = await User.create({
        username,
        email,
        password,
        // avatar
    })
    const createdUser = await User.findById(newUser._id).select("-password")
    if (!createdUser) {
        throw new ApiError(500, "Error in creating User!")
    }
    return res
        .status(201)
        .json(
            new ApiResponse(201, {
                createdUser
            }, "User created Successfully")
        )
})


const loginUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new ApiError(400, "User Credentials are required!")
    }
    const user = await User.findOne({ email: email })
    if (!user) {
        throw new ApiError(400, "User does not exist. Register first")
    }
    const isPasswordCorrect = await user.isPasswordCorrect(password)
    if (!isPasswordCorrect) {
        throw new ApiError(400, "User credentials is incorrect!")
    }
    let accessToken, refreshToken
    try {
        accessToken = await user.generateAccessToken()
        refreshToken = await user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating token")
    }
    const loggedInUser = await User.findById(user._id).select("-password")
    if (!loggedInUser) {
        throw new ApiError(500, "Error in logging user")
    }
    const options = {
        httpOnly: true,
        secure: true
    }
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", loggedInUser.refreshToken, options)
        .json(
            new ApiResponse(200, {
                user,
                accessToken
            }, "User loggedIn successfully!")
        )
})

const getUser = AsyncHandler(async (req, res) => {
    const user = req.user
    if (!user) {
        throw new ApiError(500, "User not found")
    }
    return res
        .status(200)
        .json(
            new ApiResponse(200, user, "user fetched successfully!")
        )
})

const logoutUser = AsyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true,
        },
    )
    const options = {
        httpOnly: true,
        secure: true,
    }
    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new ApiResponse(200, {}, "User loggedOut successfully")
        )
})


export { loginUser, getUser, registerUser, logoutUser }