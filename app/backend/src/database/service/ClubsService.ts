import Clubs from '../models/Clubs';

class ClubsService {
  static getAll = async () => {
    const listClubs = await Clubs.findAll();

    return listClubs;
  };

  static getOne = async (id: string) => {
    const club = await Clubs.findOne({ where: { id } });

    return club;
  };
}

export default ClubsService;
