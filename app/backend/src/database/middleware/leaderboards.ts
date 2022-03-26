import { ClubTotalMatchs } from '../interface/ClubTotalMatchs';

class LeaderboarHomedMiddleware {
  static totalPointsHome = (arrayClubs: ClubTotalMatchs[]) => {
    const totalPoints = arrayClubs.reduce((acc, cur) => {
      if (cur.homeTeamGoals > cur.awayTeamGoals) {
        return acc + 3;
      } if (cur.homeTeamGoals === cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalPoints;
  };

  static totalGames = (arrayClubs: ClubTotalMatchs[]) => {
    const totalPoints = arrayClubs.length;

    return totalPoints;
  };

  static totalVictories = (arrayClubs: ClubTotalMatchs[]) => {
    const totalPoints = arrayClubs.reduce((acc, cur) => {
      if (cur.homeTeamGoals > cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalPoints;
  };

  static totalDraws = (arrayClubs: ClubTotalMatchs[]) => {
    const totalPoints = arrayClubs.reduce((acc, cur) => {
      if (cur.homeTeamGoals === cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalPoints;
  };

  static totalLosses = (arrayClubs: ClubTotalMatchs[]) => {
    const totalPoints = arrayClubs.reduce((acc, cur) => {
      if (cur.homeTeamGoals < cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalPoints;
  };

  static goalsFavor = (arrayClubs: ClubTotalMatchs[]) => {
    const totalPoints = arrayClubs.reduce((acc, cur) => acc + cur.homeTeamGoals, 0);

    return totalPoints;
  };
}

export default LeaderboarHomedMiddleware;
