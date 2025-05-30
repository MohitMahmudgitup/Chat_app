import express from 'express';
import { registerUser, loginUser, getUser } from '../controllers/user_controller.js';
import { auth } from '../middleware/auth_middleware.js';
import { imageUpload } from '../config/imageupload.js';

const router = express.Router();

router.post('/register',imageUpload, registerUser);
router.post('/login', loginUser);

// Example protected route
router.get('/profile',  getUser);

export default router;
