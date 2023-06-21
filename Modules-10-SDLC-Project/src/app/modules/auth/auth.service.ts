import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import  Jwt  from 'jsonwebtoken';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  const  isUserExists = await User.isUserExist(id);

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isUserExists.password &&
    ! await User.isPasswordMatched(password, isUserExists.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect password');
  }

  //create access token and refresh token
  const accessToken = Jwt.sign({id: isUserExists.id, role: isUserExists.role}, process.env.JWT_SECRET as string, {expiresIn: '1h'});

  const refreshToken = Jwt.sign({id: isUserExists.id, role: isUserExists.role}, process.env.JWT_SECRET as string, {expiresIn: '1d'});

  


  return {

  };
};

export const AuthService = {
  loginUser,
};
