import { transports, format, createLogger, Logger } from "winston"

const logger: Logger = createLogger({
  level: "info",
  transports: [
    new transports.Console({
      format: format.simple(),
    }),
  ],
  exitOnError: true,
})

export default logger
