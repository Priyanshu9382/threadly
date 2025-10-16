import express from 'express'
import { verifyUser } from '../middlewares/auth.middleware'
import { createPost,getPost, deletePost } from '../controllers/post.controller'
const router = express.Router()

router.route('/create').post(verifyUser, createPost)
router.route('/:postId').get(getPost).delete(verifyUser, deletePost)

export default router