import { Request, Response, NextFunction } from 'express';
import { compareSync } from 'bcryptjs';
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

  static async notEmail(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    if (!email) {
      return res.status(StatusCode.UNAUTHORIZED).json({ message: 'All fields must be filled' });
    }

    next();
  }

  static async passwordValidation(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const user = await UserService.getUser(email);

    const verifyPassword = compareSync(password, user.password);

    if (!verifyPassword) {
      return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Incorrect email or password' });
    }

    next();
  }

  static async notPassword(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;

    if (!password) {
      return res.status(StatusCode.UNAUTHORIZED).json({ message: 'All fields must be filled' });
    }

    next();
  }
}

export default LoginValidation;
