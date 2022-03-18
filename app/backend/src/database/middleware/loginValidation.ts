import { Request, Response, NextFunction } from 'express';
import StatusCode from '../controller/statusCode';
import UserService from '../service/UserService';

class LoginValidation {
  static async emailValidation(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const user = await UserService.getUser(email);

    if (!user) {
      return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Incorrect email or password' });
    }

    next();
  }
}

export default LoginValidation;
