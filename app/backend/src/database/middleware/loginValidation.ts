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

  static async passwordValidation(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const user = await UserService.getUser(email);

    const verifyPassword = compareSync(password, user.password);

    if (!verifyPassword) {
      console.log(verifyPassword);
      console.log(password);
      console.log(user.password);

      return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Incorrect email or password' });
    }

    next();
  }
}

export default LoginValidation;
