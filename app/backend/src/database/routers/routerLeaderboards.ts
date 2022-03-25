import { Router } from 'express';
import LeaderboardsController from '../controller/leaderboardsController';

const router = Router();

router
  .get('/leaderboard', LeaderboardsController.getAll)
  .get('/leaderboard/home', LeaderboardsController.getHomeTeam)
  .get('/leaderboard/away', LeaderboardsController.getAwayTeam);

export default router;
