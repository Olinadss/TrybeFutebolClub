import { decode } from 'jsonwebtoken';

const decodedTroken = (token: string) => {
  const decodedToken = decode(token);

  return decodedToken;
};

export default decodedTroken;
