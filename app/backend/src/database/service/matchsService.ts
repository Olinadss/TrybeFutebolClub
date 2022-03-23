import Matchs from '../models/Matchs';

class MatchsService {
  static getAll = async () => {
    const matchs = await Matchs.findAll();

    return matchs;
  };
}

export default MatchsService;
