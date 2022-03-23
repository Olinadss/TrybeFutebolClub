import { Response, Request } from 'express';
import ClubsService from '../service/ClubsService';
import StatusCode from './statusCode';

class ClubsController {
  static getAll = async (_req: Request, res: Response) => {
    const listClubs = await ClubsService.getAll();

    res.status(StatusCode.OK).json(listClubs);
  };
}

export default ClubsController;
