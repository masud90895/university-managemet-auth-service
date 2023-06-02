import winston from 'winston'
import path from 'path'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    // Log to the console
    new winston.transports.Console(), // i you want to log to the console
    new winston.transports.File({
      // eslint-disable-next-line no-undef
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'error',
    }), // if you want to log to a file after an error
  ],
})

const errorLogger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    // Log to the console
    new winston.transports.Console(), // i you want to log to the console
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
    }), // if you want to log to a file after an error
  ],
})

export { logger, errorLogger }
