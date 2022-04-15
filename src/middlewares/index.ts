import { Bot } from "grammy"
import { logger } from "../utils"
import { MyContext } from "../types"
import { isGroup } from "../filters"
import { hydrateContext } from "@grammyjs/hydrate"
import loggingUpdates from "./logging"

async function setup(bot: Bot<MyContext>) {
  logger.info("Setting up middlewares...")

  bot.use(loggingUpdates)
  bot.use(hydrateContext())
}

export default { setup }
