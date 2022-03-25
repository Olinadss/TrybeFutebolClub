import { Response, Request } from 'express';
import StatusCode from './statusCode';
import ServiceLeaderboards from '../service/serviceLeaderboards';

class LeaderboardsController {
  static getAll = async (req: Request, res: Response) => {
    const allMatchs = await ServiceLeaderboards.getAll();

    res.status(StatusCode.OK).json(allMatchs);
  };

  static getHomeTeam = async (req: Request, res: Response) => {
    const homeTeam = await ServiceLeaderboards.getHomeTeam();

    res.status(StatusCode.OK).json(homeTeam);
  };

  static getAwayTeam = async (req: Request, res: Response) => {
    const awayTeam = await ServiceLeaderboards.getAwayTeam();

    res.status(StatusCode.OK).json(awayTeam);
  };
}

export default LeaderboardsController;
