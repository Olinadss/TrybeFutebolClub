import { Router } from 'express';
import ClubsController from '../controller/clubsController';

const router = Router();

router
  .get('/clubs', ClubsController.getAll)
  .get('/clubs/:id', ClubsController.getOne);

export default router;
