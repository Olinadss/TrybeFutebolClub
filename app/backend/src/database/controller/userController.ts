import { Request, Response } from 'express';
import { Token } from '../interface/token';
import UserService from '../service/UserService';
import StatusCode from './statusCode';

class UserController {
  static getUser = async (req: Request, res: Response) => {
    const { email } = req.body;
    const user = await UserService.getUser(email);

    const token = UserService.createToken(user.id, user.username, user.role);

    res.status(StatusCode.OK).json({ user, token });
  };

  static loginValidation = async (req: Request, res: Response) => {
    const token = req.headers.authorization;

    const decode = UserService.decodedToken(String(token));
    const tokenDecode = decode as Token;

    res.status(StatusCode.OK).json(tokenDecode.role);
  };
}

export default UserController;
