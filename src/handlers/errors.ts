import { BotError, GrammyError, HttpError, Bot, Composer } from "grammy"
import { MyContext } from "../types"
import { logger } from "../utils"

async function errorHandler(err: BotError<MyContext>) {
  const ctx: MyContext = err.ctx
  const timeout: number = Date.now() - ctx["_start"]
  logger.error(
    `Process update [ID:${ctx.update.update_id}]: [failed] (in ${timeout}ms)`
  )
  const e = err.error
  if (e instanceof BotError) {
    logger.error(`Error in bot: ${e.ctx}`)
  } else if (e instanceof GrammyError) {
    logger.error(`Error in request: ${e.description}`)
  } else if (e instanceof HttpError) {
    logger.error(`Could not contact Telegram: ${e}`)
  } else {
    logger.error(`Unknown error: ${e}`)
  }
}

async function setup(bot: Bot<MyContext>) {
  bot.catch(errorHandler)
}

export default { setup }
