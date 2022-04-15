import { Bot } from "grammy"
import { MyContext } from "../../types"
import { logger } from "../../utils"
import start from "./start"

async function setup(bot: Bot<MyContext>) {
  logger.info("Setting up command handlers...")
  await start.setup(bot)
}

export default { setup }
