import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const senhaSecreta = 'xablau';

const jwtConfig: SignOptions = {
  expiresIn: '28m',
  algorithm: 'HS256',
};

const generateJWT = (payload: string) => {
  const generateToken = jwt.sign({ data: payload }, senhaSecreta, jwtConfig);
  return generateToken;
};

export default generateJWT;
