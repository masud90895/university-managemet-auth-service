/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './config/index'
import { app } from './app'
import { errorLogger, logger } from './shared/logger'

// connect mongoose function
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      // Log a message to the terminal
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`Failed to connect to MongoDB ${error}`)
  }
}

main()
