import express from 'express'
import {getUser, loginUser, registerUser,logoutUser} from '../controllers/user.controllers'
import { verifyUser } from '../middlewares/auth.middleware'
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/profile').get(verifyUser, getUser)
router.route('/logout').post(verifyUser,logoutUser)

export default router