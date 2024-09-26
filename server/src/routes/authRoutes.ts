import { Router } from 'express';
import { createUser, saveUserData, loginUser, loginWithToken } from '../controllers/authController';

const router = Router();

router.post('/register', createUser);
router.post('/save', saveUserData);
router.post('/login', loginUser);
router.post('/login/token', loginWithToken);

export default router;
