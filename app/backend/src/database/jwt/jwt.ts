import { SignOptions, sign } from 'jsonwebtoken';
import fs = require('fs');
import { Payload } from '../interface/payload';

const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

const createTroken = (payload: Payload) => {
  const jwtOptions: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '5h',
  };

  const token = sign(payload, String(secret), jwtOptions);

  return token;
};

export default createTroken;
