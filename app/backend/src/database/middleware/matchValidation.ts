import { Request, Response, NextFunction } from 'express';
import StatusCode from '../controller/statusCode';
import ClubsService from '../service/ClubsService';

class MatchValidation {
  static validationTeam = (req: Request, res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(StatusCode.UNAUTHORIZED)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    next();
  };

  static validationTeamExist = async (req: Request, res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;

    const teamHome = await ClubsService.getOne(homeTeam);
    const teamAway = await ClubsService.getOne(awayTeam);

    if (!teamHome || !teamAway) {
      return res.status(StatusCode.UNAUTHORIZED)
        .json({ message: 'There is no team with such id!' });
    }

    next();
  };
}

export default MatchValidation;
