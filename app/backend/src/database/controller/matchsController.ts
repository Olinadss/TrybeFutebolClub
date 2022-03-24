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
}

export default MatchsController;
