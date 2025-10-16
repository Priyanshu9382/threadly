import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

import userRouter from './routes/user.routes'
import commentRouter from './routes/comment.routes'
import postRouter from './routes/post.routes'
app.use('/api/v1/user', userRouter)
app.use('/api/v1/comments', commentRouter)
app.use('/api/v1/posts', postRouter)
export default app