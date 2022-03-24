import Clubs from '../models/Clubs';
import Matchs from '../models/Matchs';

class MatchsService {
  static getAll = async () => {
    const matchs = await Matchs.findAll({
      include: [{
        model: Clubs, as: 'homeMatch', attributes: { exclude: ['id'] },
      }, {
        model: Clubs, as: 'awayMatch', attributes: { exclude: ['id'] },
      }],
    });

    return matchs;
  };
}

export default MatchsService;
