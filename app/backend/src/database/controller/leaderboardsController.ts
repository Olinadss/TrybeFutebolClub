import { Response, Request } from 'express';
import StatusCode from './statusCode';
import ServiceLeaderboards from '../service/serviceLeaderboards';
import LeaderboarHomedMiddleware from '../middleware/leaderboards';
import { ClubsAndMatchs } from '../interface/clubsAndMatchs';

class LeaderboardsController {
  static getAll = async (req: Request, res: Response) => {
    const allMatchs = await ServiceLeaderboards.getAll();

    res.status(StatusCode.OK).json(allMatchs);
  };

  static getHomeTeam = async (req: Request, res: Response) => {
    const homeTeam = await ServiceLeaderboards.getHomeTeam() as ClubsAndMatchs[];

    // if (homeTeam === undefined) {
    //   return StatusCode.UNPROCESSABLE_ENTITY;
    // }

    const time = homeTeam.map((item) => {
      const obj = {
        name: item.clubName,
        totalPoints: LeaderboarHomedMiddleware.totalPointsHome(item.homeClubMatchs),
        totalGames: LeaderboarHomedMiddleware.totalGames(item.homeClubMatchs),
        totalVictories: LeaderboarHomedMiddleware.totalVictories(item.homeClubMatchs),
        totalDraws: LeaderboarHomedMiddleware.totalDraws(item.homeClubMatchs),
        totalLosses: LeaderboarHomedMiddleware.totalLosses(item.homeClubMatchs),
      };
      return obj;
    });

    console.log(time);
    console.log(homeTeam);

    // const pontos = LeaderboarHomedMiddleware.totalDraws(homeTeam);

    res.status(StatusCode.OK).json(time);
  };

  static getAwayTeam = async (req: Request, res: Response) => {
    const awayTeam = await ServiceLeaderboards.getAwayTeam();

    res.status(StatusCode.OK).json(awayTeam);
  };
}

export default LeaderboardsController;
