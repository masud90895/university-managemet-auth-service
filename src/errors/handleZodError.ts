import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessages } from '../interfaces/error';

//zod error handler

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessages[] = error?.errors.map(
    (issue: ZodIssue) => {
      return {
        path: issue?.path[issue?.path.length - 1],
        message: issue?.message,
      };
    }
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  };
};

export default handleZodError;
