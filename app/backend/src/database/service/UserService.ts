import Users from '../models/Users';
import createTroken from '../jwt/jwt';

class UserService {
  static getUser = async (email: string) => {
    const user = await Users.findOne({ where: { email } });

    return user as Users;
  };

  static createToken(id: number, username: string) {
    const newToken = createTroken({ id, username });

    return newToken;
  }
}

export default UserService;
