import Clubs from '../models/Clubs';
import Matchs from '../models/Matchs';

class ServiceLeaderboards {
  static getAll = async () => {
    const allTeam = await Clubs.findAll({
      include: [{
        model: Matchs, as: 'homeClubMatchs', where: { inProgress: false },
      },
      { model: Matchs, as: 'awayClubMatchs', where: { inProgress: false } },
      ],
    });

    return allTeam;
  };

  static getHomeTeam = async () => {
    const homeTeam = await Clubs.findAll({
      include: [{
        model: Matchs, as: 'homeClubMatchs', where: { inProgress: false },
      },
      ],
    });

    return homeTeam;
  };

  static getAwayTeam = async () => {
    const awayTeam = await Clubs.findAll({
      include: [{
        model: Matchs, as: 'awayClubMatchs', where: { inProgress: false },
      },
      ],
    });

    return awayTeam;
  };
}

export default ServiceLeaderboards;
