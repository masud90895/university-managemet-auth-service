/* eslint-disable no-undef */
import { createLogger, format, transports } from 'winston'
import path from 'path'
const { combine, timestamp, label, printf, prettyPrint } = format
//import DailyRotateFile from 'winston-daily-rotate-file'
import DailyRotateFile from 'winston-daily-rotate-file'

//create custom format
const customFormat = printf(({ level, message, timestamp, label }) => {
  //find date
  const date = new Date(timestamp)
  //fnd hours
  const hours = date.getHours()
  //find minutes
  const minutes = date.getMinutes()
  //find seconds
  const seconds = date.getSeconds()
  return `${date.toDateString()} ${hours}:${minutes}:${seconds} ${label} => ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    customFormat,
    prettyPrint()
  ),
  transports: [
    // Log to the console
    new transports.Console(), // i you want to log to the console
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'phu-%DATE%-success.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    customFormat,
    prettyPrint()
  ),
  transports: [
    // Log to the console
    new transports.Console(), // i you want to log to the console
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'phu-%DATE%-error.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export { logger, errorLogger }
