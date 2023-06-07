import { Response } from 'express';

type IResponseData<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data?: T | null;
};

const sendResponse = <T>(res: Response, data: IResponseData<T>): void => {
  const responseData: IResponseData<T> = {
    statusCode: data.statusCode,
    success: data.success,
    data: data.data || null,
    message: data.message || null,
  };
  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
