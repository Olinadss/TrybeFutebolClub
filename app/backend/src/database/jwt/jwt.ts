import { SignOptions, sign } from 'jsonwebtoken';
import fs = require('fs');
import { Payload } from '../interface/payload';

const secret = fs.readFile('jwt.evaluation.key', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  }
  return data;
});

const createTroken = (payload: Payload) => {
  const jwtOptions: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '5h',
  };

  const token = sign(payload, String(secret), jwtOptions);

  return { token };
};

export default createTroken;
