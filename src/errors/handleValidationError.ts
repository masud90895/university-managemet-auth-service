import mongoose from 'mongoose'
import { IGenericErrorMessages } from '../interfaces/error'
import { IGenericResponse } from '../interfaces/common'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericResponse => {
  const errors: IGenericErrorMessages[] = Object.values(err.errors).map(el => {
    return {
      path: el.path,
      message: el.message,
    }
  })
  const statusCode = 400

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}

export default handleValidationError
