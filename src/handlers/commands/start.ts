import { Bot } from "grammy"
import { Chat } from "@grammyjs/types"
import { MyContext } from "../../types"
import { isGroup, isPrivate } from "../../filters/"

async function startPrivate(ctx: MyContext & { chat: Chat.PrivateChat }) {
  await ctx.reply(`Hello <i>${ctx.from.first_name}!</>`)
}

async function startGroup(
  ctx: MyContext & { chat: Chat.SupergroupChat | Chat.GroupChat }
) {
  await ctx.reply(`Cool chat title: <b>${ctx.chat.title}</>`)
}

async function setup(bot: Bot<MyContext>) {
  bot.filter(isPrivate).command("start", startPrivate)
  bot.filter(isGroup).command("start", startGroup)
}

export default { setup }
