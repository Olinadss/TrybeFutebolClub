import { Router } from 'express';
import UserController from '../controller/userController';
import LoginValidation from '../middleware/loginValidation';

const router = Router();

router.post(
  '/login',
  LoginValidation.passwordValidation,
  LoginValidation.emailValidation,

  UserController.getUser,
);

export default router;
