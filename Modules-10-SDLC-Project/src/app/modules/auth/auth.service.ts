import httpStatus from 'http-status';
import jwt, { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { JwtHelpers } from '../../../helpers/jwtHelper';
import { User } from '../user/user.model';
import { ILoginUser, ILoginUserResponse, IRefreshTokenResponse } from './auth.interface';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { id, password } = payload;

  const isUserExists = await User.isUserExist(id);

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isUserExists.password &&
    !(await User.isPasswordMatched(password, isUserExists.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect password');
  }

  //create access token and refresh token

  const { id: userID, role, needsPasswordChange } = isUserExists;

  const accessToken = JwtHelpers.createToken(
    { id: userID, role: role },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = JwtHelpers.createToken(
    { id: userID, role: role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  };
};

//refreshToken
const refreshToken = async (token: string) : Promise<IRefreshTokenResponse> => {
  let verifiedToken: jwt.JwtPayload | string = '';
  try {
    verifiedToken = JwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid refresh token');
  }

  // // Check if verifiedToken is of type JwtPayload
  // if (typeof verifiedToken !== 'object' || !('userId' in verifiedToken) || !('role' in verifiedToken)) {
  //   throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid refresh token');
  // }

  const { userId } = verifiedToken as jwt.JwtPayload;

  //checking deleted user refresh token

  const isUserExist = await User.isUserExist(userId);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  //generate new token

  const newAccessToken = JwtHelpers.createToken(
    { id: isUserExist?.id, role: isUserExist?.role },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  loginUser,
  refreshToken,
};
