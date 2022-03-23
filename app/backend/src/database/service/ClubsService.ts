import Clubs from '../models/Clubs';

class ClubsService {
  static getAll = async () => {
    const listClubs = await Clubs.findAll();

    return [listClubs];
  };
}

export default ClubsService;
