import { ClubTotalMatchs } from '../interface/ClubTotalMatchs';

class LeaderboarMiddleware {
  static totalPoints = (arrayClubsHome: ClubTotalMatchs[], arrayClubsAway: ClubTotalMatchs[]) => {
    const totalPointsHome = arrayClubsHome.reduce((acc, cur) => {
      if (cur.homeTeamGoals > cur.awayTeamGoals) {
        return acc + 3;
      } if (cur.homeTeamGoals === cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const totalPointsAway = arrayClubsAway.reduce((acc, cur) => {
      if (cur.awayTeamGoals > cur.homeTeamGoals) {
        return acc + 3;
      } if (cur.homeTeamGoals === cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalPointsHome + totalPointsAway;
  };

  static totalGames = (arrayClubsHome: ClubTotalMatchs[], arrayClubsAway: ClubTotalMatchs[]) => {
    const totalGamesHome = arrayClubsHome.length;

    const totalGamesAway = arrayClubsAway.length;

    return totalGamesHome + totalGamesAway;
  };

  static totalVictories = (
    arrayClubsHome: ClubTotalMatchs[],
    arrayClubsAway: ClubTotalMatchs[],
  ) => {
    const totalVictoriesHome = arrayClubsHome.reduce((acc, cur) => {
      if (cur.homeTeamGoals > cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const totalVictoriesAway = arrayClubsAway.reduce((acc, cur) => {
      if (cur.awayTeamGoals > cur.homeTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalVictoriesHome + totalVictoriesAway;
  };

  static totalDraws = (arrayClubsHome: ClubTotalMatchs[], arrayClubsAway: ClubTotalMatchs[]) => {
    const totalDrawsHome = arrayClubsHome.reduce((acc, cur) => {
      if (cur.homeTeamGoals === cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const totalDrawsAway = arrayClubsAway.reduce((acc, cur) => {
      if (cur.awayTeamGoals === cur.homeTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalDrawsHome + totalDrawsAway;
  };

  static totalLosses = (arrayClubsHome: ClubTotalMatchs[], arrayClubsAway: ClubTotalMatchs[]) => {
    const totalLossesHome = arrayClubsHome.reduce((acc, cur) => {
      if (cur.homeTeamGoals < cur.awayTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const totalLossesAway = arrayClubsAway.reduce((acc, cur) => {
      if (cur.awayTeamGoals < cur.homeTeamGoals) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return totalLossesHome + totalLossesAway;
  };

  static goalsFavor = (arrayClubsHome: ClubTotalMatchs[], arrayClubsAway: ClubTotalMatchs[]) => {
    const goalsFavorHome = arrayClubsHome.reduce((acc, cur) => acc + cur.homeTeamGoals, 0);
    const goalsFavorAway = arrayClubsAway.reduce((acc, cur) => acc + cur.awayTeamGoals, 0);

    return goalsFavorHome + goalsFavorAway;
  };

  static goalsOwn = (arrayClubsHome: ClubTotalMatchs[], arrayClubsAway: ClubTotalMatchs[]) => {
    const goalsOwnHome = arrayClubsHome.reduce((acc, cur) => acc + cur.awayTeamGoals, 0);
    const goalsOwnAway = arrayClubsAway.reduce((acc, cur) => acc + cur.homeTeamGoals, 0);

    return goalsOwnHome + goalsOwnAway;
  };

  static goalsBalance = (arrayClubsHome: ClubTotalMatchs[], arrayClubsAway: ClubTotalMatchs[]) => {
    const goalsProHome = arrayClubsHome.reduce((acc, cur) => acc + cur.homeTeamGoals, 0);
    const goalsProAway = arrayClubsAway.reduce((acc, cur) => acc + cur.awayTeamGoals, 0);

    const goalsOwnHome = arrayClubsHome.reduce((acc, cur) => acc + cur.awayTeamGoals, 0);
    const goalsOwnAway = arrayClubsAway.reduce((acc, cur) => acc + cur.homeTeamGoals, 0);

    const goalsBalance = (goalsProHome + goalsProAway) - (goalsOwnHome + goalsOwnAway);

    return goalsBalance;
  };

  static efficiency = (arrayClubsHome: ClubTotalMatchs[], arrayClubsAway: ClubTotalMatchs[]) => {
    const totalGamesHome = arrayClubsHome.length;

    const totalGamesAway = arrayClubsAway.length;

    const totalGames = totalGamesHome + totalGamesAway;

    const totalPoints = this.totalPoints(arrayClubsHome, arrayClubsAway);

    let efficiency = (totalPoints / (totalGames * 3)) * 100;

    efficiency = parseFloat(efficiency.toFixed(2));

    return efficiency;
  };
}

export default LeaderboarMiddleware;
