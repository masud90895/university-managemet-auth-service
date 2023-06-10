import { IGenericErrorMessages } from './error';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessages[];
};

export type IGenericResponse<T> = {
  meta: {
    page?: number;
    limit?: number;
    total: number;
  };
  data: T;
};
