import LeaderboarHomedMiddleware from './leaderboardsHome';
import { ClubsAndMatchs } from '../interface/clubsAndMatchs';
import { Ileaderboards } from '../interface/Ileaderboards';
import LeaderboarAwayMiddleware from './leaderboardsAway';
import { ClubsAndMatchsAwayTeam } from '../interface/clubsAndMatchsAwayTeam';
import LeaderboarMiddleware from './leaderboardHomeAndAway';
import { AllArrayClubs } from '../interface/allClubs';

class CreateLeaderboards {
  static createHomeLeaderboard = (arrayClubs: ClubsAndMatchs[]) => {
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

  static createAwayLeaderboard = (arrayClubs: ClubsAndMatchsAwayTeam[]) => {
    const leaderboards = arrayClubs.map((item) => {
      const obj = {
        name: item.clubName,
        totalPoints: LeaderboarAwayMiddleware.totalPointsHome(item.awayClubMatchs),
        totalGames: LeaderboarAwayMiddleware.totalGames(item.awayClubMatchs),
        totalVictories: LeaderboarAwayMiddleware.totalVictories(item.awayClubMatchs),
        totalDraws: LeaderboarAwayMiddleware.totalDraws(item.awayClubMatchs),
        totalLosses: LeaderboarAwayMiddleware.totalLosses(item.awayClubMatchs),
        goalsFavor: LeaderboarAwayMiddleware.goalsFavor(item.awayClubMatchs),
        goalsOwn: LeaderboarAwayMiddleware.goalsOwn(item.awayClubMatchs),
        goalsBalance: LeaderboarAwayMiddleware.goalsBalance(item.awayClubMatchs),
        efficiency: LeaderboarAwayMiddleware.efficiency(item.awayClubMatchs),
      };
      return obj;
    });

    return leaderboards;
  };

  static createLeaderboard = (arrayClubs: AllArrayClubs[]) => {
    const leaderboards = arrayClubs.map((item) => {
      const obj = {
        name: item.clubName,
        totalPoints: LeaderboarMiddleware.totalPoints(item.homeClubMatchs, item.awayClubMatchs),
        totalGames: LeaderboarMiddleware.totalGames(item.homeClubMatchs, item.awayClubMatchs),
        totalVictories: LeaderboarMiddleware
          .totalVictories(item.homeClubMatchs, item.awayClubMatchs),
        totalDraws: LeaderboarMiddleware.totalDraws(item.homeClubMatchs, item.awayClubMatchs),
        totalLosses: LeaderboarMiddleware.totalLosses(item.homeClubMatchs, item.awayClubMatchs),
        goalsFavor: LeaderboarMiddleware.goalsFavor(item.homeClubMatchs, item.awayClubMatchs),
        goalsOwn: LeaderboarMiddleware.goalsOwn(item.homeClubMatchs, item.awayClubMatchs),
        goalsBalance: LeaderboarMiddleware.goalsBalance(item.homeClubMatchs, item.awayClubMatchs),
        efficiency: LeaderboarMiddleware.efficiency(item.homeClubMatchs, item.awayClubMatchs),
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
