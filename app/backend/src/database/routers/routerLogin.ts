import { Router } from 'express';
import UserController from '../controller/userController';
import LoginValidation from '../middleware/loginValidation';
import validationToken from '../jwt/auth';

const router = Router();

router.post(
  '/login',
  LoginValidation.notEmail,
  LoginValidation.notPassword,
  LoginValidation.emailValidation,
  LoginValidation.passwordValidation,
  UserController.getUser,
)
  .get('/login/validate', validationToken, UserController.getUser);

export default router;
