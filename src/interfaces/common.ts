import { IGenericErrorMessages } from './error'

export type IGenericResponse = {
  statusCode: number
  message: string
  errorMessage: IGenericErrorMessages[]
}
