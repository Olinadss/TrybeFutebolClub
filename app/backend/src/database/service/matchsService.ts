import Clubs from '../models/Clubs';
import Matchs from '../models/Matchs';

class MatchsService {
  static getAll = async (inProgress?: boolean) => {
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

  static createMatch = async ({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress }: Matchs) => {
    const newMatch = await Matchs
      .create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress });

    return newMatch;
  };
}

export default MatchsService;
