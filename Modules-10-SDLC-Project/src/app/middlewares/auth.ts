// create auth

import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { JwtHelpers } from '../../helpers/jwtHelper';

import { JwtPayload } from 'jsonwebtoken';

const auth =
  (...requireRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // get authorization token
      const token = req.headers.authorization;
      // not authorize user
      if (!token) {
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          'You are not authorized to access this route'
        );
      }

      // verify token
      let verifiedUser: JwtPayload | null = null;
      try {
        verifiedUser = JwtHelpers.verifyToken(
          token,
          config.jwt.jwt_secret as Secret
        ) as JwtPayload;
      } catch (error) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Token');
      }

      req.user = verifiedUser; //role ,userID

      // role diye guard korar jnno
      if (requireRoles.length && !requireRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
