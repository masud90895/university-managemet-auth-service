/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './config/index'
import { app } from './app'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', err => {
  errorLogger.error(err)
  process.exit(1)
})

let server: Server
// connect mongoose function
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
      // Log a message to the terminal
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`Failed to connect to MongoDB ${error}`)
  }

  process.on('unhandledRejection', err => {
    if (server) {
      server.close(() => {
        errorLogger.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully')
  if (server) {
    server.close(() => {
      console.log('Process terminated')
    })
  }
})
