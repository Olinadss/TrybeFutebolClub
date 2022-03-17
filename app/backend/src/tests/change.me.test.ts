// import * as sinon from 'sinon';
// import * as chai from 'chai';
// import chaiHttp = require('chai-http');
// import Users from '../database/models/Users';

// import { app } from '../app';

// import { Response } from 'superagent';
// import { strictEqual } from 'assert';

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('1 - Testa Users Model', () => {

//   // const users = {
//   //   id: 1,
//   //   username: "Admin",
//   //   role: "admin",
//   //   email: "admin@admin.com"
//   // }

//   // type teste = {
//   //   id: number
//   //   username: string
//   //   role: string
//   //   email: string
//   // }

//   // before(() => {
//   //   const eventMock = { findOne: sinon.spy() };
//   //   sinon.stub(Users, 'findOne').resolves({ users } as Users);
//   // });
//   /**
//    * Exemplo do uso de stubs com tipos
//    */

//   // let chaiHttpResponse: Response;

//   // before(async () => {
//   //   sinon
//   //     .stub(Example, "findOne")
//   //     .resolves({
//   //       ...<Seu mock>
//   //     } as Example);
//   // });

//   // after(()=>{
//   //   (Example.findOne as sinon.SinonStub).restore();
//   // })

//   // it('...', async () => {
//   //   chaiHttpResponse = await chai
//   //      .request(app)
//   //      ...

//   //   expect(...)
//   // });

//   it('Testa se a classe User existe', () => {
//     const objUsers: Users = new Users();
//     expect(objUsers).to.be.an('object');
//   });

//   it('Testa se a classe User possui o atributo username', () => {
//     const objUsers: Users = new Users();
//     expect(typeof objUsers.username).to.be.a('string');
//   });
// });

