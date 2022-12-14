import { Router } from 'express';
import MatchsController from '../controller/matchsController';
// import validationToken from '../jwt/auth';
import MatchValidation from '../middleware/matchValidation';

const router = Router();

router
  .patch('/matchs/:id/finish', MatchsController.updateProgress)
  .get('/matchs', MatchsController.getAll)
  .patch('/matchs/:id', MatchsController.updateMatchs)
  .post(
    '/matchs',
    MatchValidation.validationTeam,
    MatchValidation.validationTeamExist,
    MatchsController.create,
  );

export default router;
