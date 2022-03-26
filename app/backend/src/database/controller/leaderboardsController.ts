import { Response, Request } from 'express';
import StatusCode from './statusCode';
import ServiceLeaderboards from '../service/serviceLeaderboards';
import { ClubsAndMatchs } from '../interface/clubsAndMatchs';
import CreateLeaderboards from '../middleware/createLeaderboards';

class LeaderboardsController {
  static getAll = async (req: Request, res: Response) => {
    const allMatchs = await ServiceLeaderboards.getAll();

    res.status(StatusCode.OK).json(allMatchs);
  };

  static getHomeTeam = async (req: Request, res: Response) => {
    const homeTeam = await ServiceLeaderboards.getHomeTeam() as ClubsAndMatchs[];

    const time = CreateLeaderboards.createLeaderboard(homeTeam);

    const teste = CreateLeaderboards.orderLeaderboard(time);

    res.status(StatusCode.OK).json(teste);
  };

  static getAwayTeam = async (req: Request, res: Response) => {
    const awayTeam = await ServiceLeaderboards.getAwayTeam();

    res.status(StatusCode.OK).json(awayTeam);
  };
}

export default LeaderboardsController;
