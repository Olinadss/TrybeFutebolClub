import Clubs from '../models/Clubs';
import Matchs from '../models/Matchs';

class MatchsService {
  static getAll = async (inProgress?: boolean) => {
    console.log('dentro do if', inProgress);

    if (inProgress === undefined) {
      return Matchs.findAll({
        include: [{
          model: Clubs, as: 'homeClub', attributes: { exclude: ['id'] },
        }, {
          model: Clubs, as: 'awayClub', attributes: { exclude: ['id'] },
        }],
      });
    }
    return Matchs.findAll({
      where: { inProgress },
      include: [{
        model: Clubs, as: 'homeClub', attributes: { exclude: ['id'] },
      }, {
        model: Clubs, as: 'awayClub', attributes: { exclude: ['id'] },
      }],
    });
  };
}

export default MatchsService;
