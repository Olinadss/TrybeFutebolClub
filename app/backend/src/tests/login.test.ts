import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import Users from '../database/models/Users';
import * as bcrypt from 'bcryptjs';

import { app } from '../app';

import { Response } from 'superagent';
import { strictEqual } from 'assert';
import { Payload } from '../database/interface/payload';
import UserService from '../database/service/UserService';

chai.use(chaiHttp);

const { expect } = chai;

// describe('1 - Testa Users Model', () => {

//   const users = {
//     id: 1,
//     username: "Admin",
//     role: "admin",
//     email: "admin@admin.com",
//     password: "123456"
//   }

//   before(async () => sinon.stub(Users, 'findOne').resolves(users as Users));

//   after(async () => {
//     (Users.findOne as sinon.SinonStub).restore();
//   });

//   it('Testa se a classe User existe', () => {
//     const objUsers: Users = new Users();
//     expect(objUsers).to.be.an('object');
    
//   });

//   it('Testa se a classe User possui o atributo username', () => {
//     const objUsers: Users = new Users();
//     expect(typeof objUsers.username).to.be.a('string');
//   });

//   it('Testa se a classe Users retorna um usuario', async () => {
//     const objUsers = await Users.findOne()
//     expect(objUsers).to.be.a('object');
//   });
// });

describe('2 - Testa as validações da rota login', () => {
  let chaiHttpResponse: Response;
  
  const users = {
    id: 1,
    username: "Admin",
    role: "admin",
    email: "admin@admin.com",
  }

  const login = {
    email: 'user@user.com',
    password: 'secret_user',
  }

  before(() => {
    sinon.stub(UserService, 'getUser').resolves(users as Users);
    sinon.stub(bcrypt, 'compareSync').returns(true)
  });

  after(() => {
    (UserService.getUser as sinon.SinonStub).restore();
    (bcrypt.compareSync as sinon.SinonStub).restore();
  });

  it('se a rota login retorna status 200 OK', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'user@user.com', password: 'secret_user' });  
    
    expect(chaiHttpResponse.status).to.be.equal(200);
  });
});