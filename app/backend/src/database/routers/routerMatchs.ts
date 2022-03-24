import { Router } from 'express';
import MatchsController from '../controller/matchsController';

const router = Router();

router
  .get('/matchs', MatchsController.getAll)
  .post('/matchs', MatchsController.create);

export default router;
