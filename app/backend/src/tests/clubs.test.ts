import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
chai.use(chaiHttp);
const { expect } = chai;
import Clubs from '../database/models/Clubs'


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
      expect(chaiHttpResponse.body).to.be.equal(resultAll[1]);
    });
  }

});