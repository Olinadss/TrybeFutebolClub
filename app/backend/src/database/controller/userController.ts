import { Request, Response } from 'express';
import UserService from '../service/UserService';
import StatusCode from './statusCode';

class UserController {
  static getUser = async (req: Request, res: Response) => {
    const { email } = req.body;
    const user = await UserService.getUser(email);

    const token = UserService.createToken(user.id, user.username);

    res.status(StatusCode.OK).json({ user, token });
  };
}

export default UserController;
