import * as express from 'express';
import LoginRoutes from './database/routers/routerLogin';
import ClubsRoutes from './database/routers/routerClubs';
import MatchsRoutes from './database/routers/routerMatchs';
import LeaderboardsRoutes from './database/routers/routerLeaderboards';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(LoginRoutes);
    this.app.use(ClubsRoutes);
    this.app.use(MatchsRoutes);
    this.app.use(LeaderboardsRoutes);
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
