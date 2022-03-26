import LeaderboarHomedMiddleware from './leaderboardsHome';
import { ClubsAndMatchs } from '../interface/clubsAndMatchs';
import { Ileaderboards } from '../interface/Ileaderboards';

class CreateLeaderboards {
  static createLeaderboard = (arrayClubs: ClubsAndMatchs[]) => {
    const leaderboards = arrayClubs.map((item) => {
      const obj = {
        name: item.clubName,
        totalPoints: LeaderboarHomedMiddleware.totalPointsHome(item.homeClubMatchs),
        totalGames: LeaderboarHomedMiddleware.totalGames(item.homeClubMatchs),
        totalVictories: LeaderboarHomedMiddleware.totalVictories(item.homeClubMatchs),
        totalDraws: LeaderboarHomedMiddleware.totalDraws(item.homeClubMatchs),
        totalLosses: LeaderboarHomedMiddleware.totalLosses(item.homeClubMatchs),
        goalsFavor: LeaderboarHomedMiddleware.goalsFavor(item.homeClubMatchs),
        goalsOwn: LeaderboarHomedMiddleware.goalsOwn(item.homeClubMatchs),
        goalsBalance: LeaderboarHomedMiddleware.goalsBalance(item.homeClubMatchs),
        efficiency: LeaderboarHomedMiddleware.efficiency(item.homeClubMatchs),
      };
      return obj;
    });

    return leaderboards;
  };

  static orderLeaderboard = (arrayClubs: Ileaderboards[]) => {
    const leaderboards = arrayClubs.sort((a, b) => b.goalsOwn - a.goalsOwn)
      .sort((a, b) => b.goalsFavor - a.goalsFavor)
      .sort((a, b) => b.goalsBalance - a.goalsBalance)
      .sort((a, b) => b.totalVictories - a.totalVictories)
      .sort((a, b) => b.totalPoints - a.totalPoints);

    return leaderboards;
  };
}

export default CreateLeaderboards;
