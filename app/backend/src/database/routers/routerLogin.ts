import { Router } from 'express';
import UserController from '../controller/userController';
import LoginValidation from '../middleware/loginValidation';

const router = Router();

router.post(
  '/login',
  LoginValidation.notEmail,
  LoginValidation.notPassword,
  LoginValidation.emailValidation,
  LoginValidation.passwordValidation,

  UserController.getUser,
);

router.get('/login/validation');

export default router;
