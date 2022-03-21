import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import Users from '../database/models/Users';
import UserService from '../database/service/UserService';
import LoginValidation from '../database/middleware/loginValidation';
import { LoginRes } from '../database/interface/loginRes'

import { app } from '../app';

import { Response } from 'superagent';
import { strictEqual } from 'assert';

chai.use(chaiHttp);

const { expect } = chai;

describe('1 - Testa Users Model', () => {

  const users = {
    id: 1,
    username: "Admin",
    role: "admin",
    email: "admin@admin.com",
    password: "123456"
  }

  before(async () => sinon.stub(Users, 'findOne').resolves(users as Users));

  after(async () => {
    (Users.findOne as sinon.SinonStub).restore();
  });

  it('Testa se a classe User existe', () => {
    const objUsers: Users = new Users();
    expect(objUsers).to.be.an('object');
  });

  it('Testa se a classe User possui o atributo username', () => {
    const objUsers: Users = new Users();
    expect(typeof objUsers.username).to.be.a('string');
  });

  it('Testa se a classe Users retorna um usuario', async () => {
    const objUsers = await Users.findOne()
    expect(objUsers).to.be.a('object');
  });
});

describe('2 - Testa as validações da rota login', () => {
  let chaiHttpResponse: Response;
  
  const users = {
    id: 1,
    username: "Admin",
    role: "admin",
    email: "admin@admin.com",
    password: "123456"
  }

  const responseLogin = {
    "user": {
      "id": 2,
      "username": "User",
      "role": "user",
      "email": "user@user.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJVc2VyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NDc4NzU3NTAsImV4cCI6MTY0Nzg5Mzc1MH0.JFxwKuKurN6WWokoF04RNtTJaCGRB5xX4c7lak5B_iQ"
  }

  before(async () => {
    sinon.stub(Users, 'findOne').resolves(users as Users);
    sinon.stub(UserService, 'getUser').resolves(responseLogin as LoginRes)
  });

  after(async () => {
    (Users.findOne as sinon.SinonStub).restore();
  });

  const bodyReq = {
    email: 'user@user.com',
    password: 'secret_user',
  }

  it('se a rota login retorna status 200 OK', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send();
    expect(chaiHttpResponse.status).to.be.equal(200);
  });
})

