import Users from '../models/Users';
import createTroken from '../jwt/jwt';
import decodedTroken from '../jwt/decoded';

class UserService {
  static getUser = async (email: string) => {
    const user = await Users.findOne({
      attributes: { exclude: ['password'] },
      where: { email },
    });

    return user as Users;
  };

  static getFullUser = async (email: string) => {
    const user = await Users.findOne({ where: { email } });

    return user as Users;
  };

  static createToken(id: number, username: string, role: string) {
    const newToken = createTroken({ id, username, role });

    return newToken;
  }

  static decodedToken(token: string) {
    const newToken = decodedTroken(token);

    return newToken;
  }
}

export default UserService;
