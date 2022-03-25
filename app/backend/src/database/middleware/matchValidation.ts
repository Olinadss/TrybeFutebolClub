import { Request, Response, NextFunction } from 'express';
import StatusCode from '../controller/statusCode';

class MatchValidation {
  static validationTeam = (req: Request, res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(StatusCode.UNAUTHORIZED)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    next();
  };
}

export default MatchValidation;
