import { Request, Response, NextFunction } from 'express';
import { verify, SignOptions } from 'jsonwebtoken';
import fs = require('fs');
import StatusCode from '../controller/statusCode';

const secret = fs.readFile('jwt.evaluation.key', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  }
  return data;
});

const validationToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const jwtOptions: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '5h',
  };

  if (!token) {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Token not found' });
  }

  try {
    const userToken = verify(token, String(secret), jwtOptions);

    return userToken;
    next();
  } catch (error) {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Invalid token' });
  }

  return token;
};

export default validationToken;
