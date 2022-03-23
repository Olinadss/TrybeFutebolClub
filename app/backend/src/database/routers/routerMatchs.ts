import { Router } from 'express';
import MatchsController from '../controller/matchsController';

const router = Router();

router
  .get('/matchs', MatchsController.getAll);

export default router;
