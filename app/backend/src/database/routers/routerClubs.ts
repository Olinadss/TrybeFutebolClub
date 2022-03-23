import { Router } from 'express';
import ClubsController from '../controller/clubsController';

const router = Router();

router.get('/clubs', ClubsController.getAll);

export default router;
