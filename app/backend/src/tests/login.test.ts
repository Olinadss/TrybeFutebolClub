import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import Users from '../database/models/Users';
import UserService from '../database/service/UserService';

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

