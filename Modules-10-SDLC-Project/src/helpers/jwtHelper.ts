import Jwt, { Secret } from 'jsonwebtoken';

//create token function
const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string
): string => {
  return Jwt.sign(payload, secret, {
    expiresIn: expireTime,
  });
};


const verifyToken = (token: string, secret: Secret): string | object => {
  return Jwt.verify(token, secret);
};




export const JwtHelpers = {
  createToken,
  verifyToken,
};
