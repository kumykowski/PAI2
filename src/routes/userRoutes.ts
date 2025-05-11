import { Router } from 'express'
import { registerUser } from '../controllers/userController'
import { validateUserRegistration } from '../validators/userValidator'
import { loginUser } from '../controllers/userController'
import { validateUserLogin } from '../validators/userValidator'
import { mockAuth } from '../middlewares/authMiddleware'
import { updateMe } from '../controllers/userController'
import { validateUserUpdate } from '../validators/userValidator'
import { getMe } from '../controllers/userController'
import { deleteMe } from '../controllers/userController'

const router = Router()

router.post('/register', validateUserRegistration, registerUser)


router.post('/login', validateUserLogin, loginUser)


router.put('/me', mockAuth, validateUserUpdate, updateMe)

router.get('/me', mockAuth, getMe)

router.delete('/me', mockAuth, deleteMe)


export default router
