import { Router } from 'express';
import MatchsController from '../controller/matchsController';
// import validationToken from '../jwt/auth';

const router = Router();

router
  .patch('/matchs/:id/finish', MatchsController.updateProgress)
  .get('/matchs', MatchsController.getAll)
  .post('/matchs', MatchsController.create);

export default router;
