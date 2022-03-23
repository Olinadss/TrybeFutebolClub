import { Response, Request } from 'express';
import MatchsService from '../service/matchsService';
import StatusCode from './statusCode';

class MatchsController {
  static getAll = async (_req: Request, res: Response) => {
    const listMatchs = await MatchsService.getAll();

    res.status(StatusCode.OK).json(listMatchs);
  };
}

export default MatchsController;
