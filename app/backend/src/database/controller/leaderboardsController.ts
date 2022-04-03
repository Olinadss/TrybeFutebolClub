import { Response, Request } from 'express';
import StatusCode from './statusCode';
import ServiceLeaderboards from '../service/serviceLeaderboards';
import { ClubsAndMatchs } from '../interface/clubsAndMatchs';
import CreateLeaderboards from '../middleware/createLeaderboards';
import { ClubsAndMatchsAwayTeam } from '../interface/clubsAndMatchsAwayTeam';

class LeaderboardsController {
  static getAll = async (req: Request, res: Response) => {
    const allMatchs = await ServiceLeaderboards.getAll();

    res.status(StatusCode.OK).json(allMatchs);
  };

  static getHomeTeam = async (req: Request, res: Response) => {
    const homeTeam = await ServiceLeaderboards.getHomeTeam() as ClubsAndMatchs[];

    const time = CreateLeaderboards.createHomeLeaderboard(homeTeam);

    const teste = CreateLeaderboards.orderLeaderboard(time);

    res.status(StatusCode.OK).json(teste);
  };

  static getAwayTeam = async (req: Request, res: Response) => {
    const awayTeam = await ServiceLeaderboards.getAwayTeam() as unknown as ClubsAndMatchsAwayTeam[];

    const leaderboardAwayTeam = CreateLeaderboards.createAwayLeaderboard(awayTeam);

    const orderLeaderboard = CreateLeaderboards.orderLeaderboard(leaderboardAwayTeam);

    res.status(StatusCode.OK).json(orderLeaderboard);
  };
}

export default LeaderboardsController;
