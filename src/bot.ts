import { Bot } from "grammy"
import { MyContext, MyApi } from "./types"

const token = process.env.BOT_TOKEN
if (token === undefined) {
  throw new Error("Bot token must be provided!")
}

export default new Bot<MyContext, MyApi>(token)
