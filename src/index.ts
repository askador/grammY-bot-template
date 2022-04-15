import dotenv from "dotenv"
dotenv.config({ path: `${__dirname}/../.env` })

import bot from "./bot"
import { allowedUpdates, logger, onStartup, onShutdown } from "./utils"

process.once("SIGINT", async () => {
  logger.info("SIGINT")
  await onShutdown(bot)
})
process.once("SIGTERM", async () => {
  logger.info("SIGTERM")
  await onShutdown(bot)
})

bot.start({
  drop_pending_updates: false,
  allowed_updates: allowedUpdates,
  onStart: onStartup,
})
