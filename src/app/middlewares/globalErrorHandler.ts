/* eslint-disable no-console */
import { ErrorRequestHandler } from 'express'
import { IGenericErrorMessages } from '../../interfaces/error'
import handleValidationError from '../../errors/handleValidationError'
import config from '../../config'
import ApiError from '../../errors/ApiError'
import { errorLogger } from '../../shared/logger'

//create global express error middleware
const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (config?.env === 'development') {
    console.log('Global Error Handler ~~', error)
  } else {
    errorLogger.error('Global Error Handler ~~', error)
  }

  // config.env === "development" ? console.log("Global Error Handler ~~", error) : errorLogger.error("Global Error Handler ~~", error)

  let statusCode = 500
  let message = 'Something went wrong'
  let errorMessage: IGenericErrorMessages[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedErrors = handleValidationError(error)
    statusCode = simplifiedErrors.statusCode
    message = simplifiedErrors.message
    errorMessage = simplifiedErrors.errorMessage
    //fix this code error problem
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error.stack : undefined,
  })
  next()
}

export default globalErrorHandler
