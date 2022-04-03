import { ClubTotalMatchs } from '../interface/ClubTotalMatchs';

class LeaderboarAwayMiddleware {
  static totalPointsHome = (arrayClubs: ClubTotalMatchs[]) => {
    const totalPoints = arrayClubs.reduce((acc, cur) => {
      if (cur.awayTeamGoals > cur.homeTeamGoals) {
        return acc + 3;
      } if (cur.homeTeamGoals === cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalPoints;
  };

  static totalGames = (arrayClubs: ClubTotalMatchs[]) => {
    const totalGames = arrayClubs.length;

    return totalGames;
  };

  static totalVictories = (arrayClubs: ClubTotalMatchs[]) => {
    const totalVictories = arrayClubs.reduce((acc, cur) => {
      if (cur.awayTeamGoals > cur.homeTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalVictories;
  };

  static totalDraws = (arrayClubs: ClubTotalMatchs[]) => {
    const totalDraws = arrayClubs.reduce((acc, cur) => {
      if (cur.homeTeamGoals === cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalDraws;
  };

  static totalLosses = (arrayClubs: ClubTotalMatchs[]) => {
    const totalLosses = arrayClubs.reduce((acc, cur) => {
      if (cur.awayTeamGoals < cur.homeTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalLosses;
  };

  static goalsFavor = (arrayClubs: ClubTotalMatchs[]) => {
    const goalsFavor = arrayClubs.reduce((acc, cur) => acc + cur.awayTeamGoals, 0);

    return goalsFavor;
  };

  static goalsOwn = (arrayClubs: ClubTotalMatchs[]) => {
    const goalsOwn = arrayClubs.reduce((acc, cur) => acc + cur.homeTeamGoals, 0);

    return goalsOwn;
  };

  static goalsBalance = (arrayClubs: ClubTotalMatchs[]) => {
    const totalGoalsPro = arrayClubs.reduce((acc, cur) => acc + cur.awayTeamGoals, 0);

    const totalGoalsOwn = arrayClubs.reduce((acc, cur) => acc + cur.homeTeamGoals, 0);

    const goalsBalance = totalGoalsPro - totalGoalsOwn;

    return goalsBalance;
  };

  static efficiency = (arrayClubs: ClubTotalMatchs[]) => {
    const totalGames = arrayClubs.length;

    const totalPoints = this.totalPointsHome(arrayClubs);

    let efficiency = (totalPoints / (totalGames * 3)) * 100;

    efficiency = parseFloat(efficiency.toFixed(2));

    return efficiency;
  };
}

export default LeaderboarAwayMiddleware;
