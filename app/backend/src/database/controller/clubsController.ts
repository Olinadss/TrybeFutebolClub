import { Response, Request } from 'express';
import ClubsService from '../service/ClubsService';
import StatusCode from './statusCode';

class ClubsController {
  static getAll = async (_req: Request, res: Response) => {
    const listClubs = await ClubsService.getAll();

    res.status(StatusCode.OK).json(listClubs);
  };

  static getOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    const club = await ClubsService.getOne(id);

    res.status(StatusCode.OK).json(club);
  };
}

export default ClubsController;
