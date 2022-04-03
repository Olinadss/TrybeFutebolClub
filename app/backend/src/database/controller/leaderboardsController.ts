import { Response, Request } from 'express';
import StatusCode from './statusCode';
import ServiceLeaderboards from '../service/serviceLeaderboards';
import { ClubsAndMatchs } from '../interface/clubsAndMatchs';
import CreateLeaderboards from '../middleware/createLeaderboards';
import { ClubsAndMatchsAwayTeam } from '../interface/clubsAndMatchsAwayTeam';
import { AllArrayClubs } from '../interface/allClubs';

class LeaderboardsController {
  static getAll = async (req: Request, res: Response) => {
    const allMatchs = await ServiceLeaderboards.getAll() as unknown as AllArrayClubs[];

    const leaderboardAwayTeam = CreateLeaderboards.createLeaderboard(allMatchs);

    const orderLeaderboard = CreateLeaderboards.orderLeaderboard(leaderboardAwayTeam);

    res.status(StatusCode.OK).json(orderLeaderboard);
  };

  static getHomeTeam = async (req: Request, res: Response) => {
    const homeTeam = await ServiceLeaderboards.getHomeTeam() as ClubsAndMatchs[];

    const time = CreateLeaderboards.createHomeLeaderboard(homeTeam);

    const orderLeaderboard = CreateLeaderboards.orderLeaderboard(time);

    res.status(StatusCode.OK).json(orderLeaderboard);
  };

  static getAwayTeam = async (req: Request, res: Response) => {
    const awayTeam = await ServiceLeaderboards.getAwayTeam() as unknown as ClubsAndMatchsAwayTeam[];

    const leaderboardAwayTeam = CreateLeaderboards.createAwayLeaderboard(awayTeam);

    const orderLeaderboard = CreateLeaderboards.orderLeaderboard(leaderboardAwayTeam);

    res.status(StatusCode.OK).json(orderLeaderboard);
  };
}

export default LeaderboardsController;
