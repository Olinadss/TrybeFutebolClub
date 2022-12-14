import { Response, Request } from 'express';
import MatchsService from '../service/matchsService';
import StatusCode from './statusCode';

class MatchsController {
  static getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if (inProgress !== undefined) {
      const status = inProgress === 'true';
      const listMatchs = await MatchsService.getAll(status);
      return res.status(StatusCode.OK).json(listMatchs);
    }

    const listMatchs = await MatchsService.getAll();
    res.status(StatusCode.OK).json(listMatchs);
  };

  static create = async (req: Request, res:Response) => {
    const { body } = req;

    const newMatch = await MatchsService.createMatch(body);

    res.status(StatusCode.CREATED).json(newMatch);
  };

  static updateProgress = async (req: Request, res: Response) => {
    const { id } = req.params;

    const update = await MatchsService.updateProgress(id);

    res.status(StatusCode.OK).json(update);
  };

  static updateMatchs = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const match = await MatchsService.updateMatchs(id, homeTeamGoals, awayTeamGoals);

    res.status(StatusCode.OK).json(match);
  };
}

export default MatchsController;
