import express from 'express'
import { verifyUser } from '../middlewares/auth.middleware'
import { comment, deleteComment, editComment, getAllComments } from '../controllers/comment.controller'
const router = express.Router()

router.route('/').post(verifyUser,comment)
router.route('/:postId').get(getAllComments)
router.route('/:id').patch(verifyUser,editComment).delete(deleteComment)


export default router