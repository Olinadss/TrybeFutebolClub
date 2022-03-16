import Users from '../models/Users';

class UserService {
  static getUser = async (email: string) => {
    const user = await Users.findOne({ where: { email } });

    return user;
  };
}

export default UserService;
