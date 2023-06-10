import mongoose from 'mongoose';

const handleCastError = (error: mongoose.Error.CastError) => {
  const message = `Invalid ${error?.path}: ${error?.value}`;
  return {
    statusCode: 400,
    message,
    errorMessage: [
      {
        path: error?.path?.toString() ?? '',
        message,
      },
    ],
  };
};
export default handleCastError;
