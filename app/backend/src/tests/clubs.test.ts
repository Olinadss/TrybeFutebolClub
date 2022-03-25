import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
chai.use(chaiHttp);
const { expect } = chai;
import Clubs from '../database/models/Clubs';
import Matchs from '../database/models/Matchs';


describe('Testa a rola clubs', () => {

  const resultAll = [
    {
      "id": 1,
      "clubName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "clubName": "Bahia"
    },
    {
      "id": 3,
      "clubName": "Botafogo"
    },
  ]

  let chaiHttpResponse: Response;

  {
    before(async () => {
      return sinon
        .stub(Clubs, 'findAll')
        .resolves(resultAll as Clubs[])
    });
  
    after(() => {
      (Clubs.findAll as sinon.SinonStub).restore();
    })

    it('acessar a rota clubs retorna a lista de clubes', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/clubs')
  
      expect(chaiHttpResponse.status).to.be.equal(200);
    });
  }

  {
    const clubs = {
      "id": 2,
      "clubName": "Bahia"
    }

    before(async () => {
      return sinon
        .stub(Clubs, 'findOne')
        .resolves(clubs as Clubs)
    });
  
    after(() => {
      (Clubs.findOne as sinon.SinonStub).restore();
    })
  
    it('acessar a rota clubs/:id retorna clube Bahia ', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/clubs/2')
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(resultAll[1]);
    });
  }
});

describe('Testa a rola matchs', () => {
  let chaiHttpResponse: Response;

  const matchsAll = [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeClub": {
        "clubName": "São Paulo"
      },
      "awayClub": {
        "clubName": "Grêmio"
      }
    },
    {
      "id": 41,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "homeClub": {
        "clubName": "São Paulo"
      },
      "awayClub": {
        "clubName": "Internacional"
      }
    }
  ]

  {
    before(() => {
      sinon.stub(Matchs, 'findAll').resolves(matchsAll as unknown as Matchs[])
    })

    after(() => {
      (Matchs.findAll as sinon.SinonStub).restore();
    });

    it('acessar a rota matchs retorna status OK', async () => {
      chaiHttpResponse = await chai 
        .request(app)
        .get('/matchs');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
    });
  }
  {
    const matchCreatedOK = {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 8,
      "awayTeamGoals": 2,
      "inProgress": true,
    }
    
    const matchsCreate = {
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 8,
      "awayTeamGoals": 2,
      "inProgress": true,
    }

    before(() => {
      sinon.stub(Matchs, 'create').resolves(matchCreatedOK as Matchs)
    })

    after(() => {
      (Matchs.create as sinon.SinonStub).restore();
    });
    
    it('se acessar a rota matchs post retorna status 201', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/matchs')
      .send(matchsCreate);
      
      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(matchCreatedOK)
    }); 
  }

  {

    const matchUpdate = {
      "homeTeamGoals": 3,
      "awayTeamGoals": 1
    }

    before(() => {
      sinon.stub(Matchs, 'update').resolves()
    })

    after(() => {
      (Matchs.update as sinon.SinonStub).restore();
    });

    it('acessar a rota matchs retorna status 200', async () => {
      chaiHttpResponse = await chai 
        .request(app)
        .patch('/matchs/:id')
        .send(matchUpdate);
  
      expect(chaiHttpResponse.status).to.be.equal(200);
    });
  }
});
