import { Bot } from "grammy"
import { BotCommand } from "@grammyjs/types"
import { MyContext } from "../types"
import { type BotCommandScope } from "@grammyjs/types/bot-command-scope"
import logger from "./logger"

type MyBotCommands = {
  ["commands"]: BotCommand[], 
  ["scope"]: BotCommandScope,
  ["language_code"]: string | null
}

const DEFAULT_COMMANDS_PRIVATE: MyBotCommands = {
  commands: [
    {
      command: "start",
      description: "Старт бота в приватном чате"
    },
    {
      command: "help",
      description: "Помощь в использовании бота в приватном чате"
    }
  ],
  scope: {type: "all_private_chats"},
  language_code: null
}

const EN_COMMANDS_PRIVATE: MyBotCommands = {
  commands: [
    {
      command: "start",
      description: "Start the bot in private chat"
    },
    {
      command: "help",
      description: "Help message with a bot in private chat"
    }
  ],
  scope: {type: "all_private_chats"},
  language_code: "en"
}

const EN_COMMANDS_GROUP: MyBotCommands = {
  commands: [
    {
      command: "start",
      description: "Start the bot in group chat"
    },
    {
      command: "help",
      description: "help message with a bot in group chat"
    }
  ],
  scope: {type: "all_group_chats"},
  language_code: 'en'
}

const DEFAULT_COMMANDS_GROUP: MyBotCommands = {
  commands: [
    {
      command: "start",
      description: "Старт бота в группе"
    },
    {
      command: "help",
      description: "Помощь в использовании бота в группе"
    }
  ],
  scope: {type: "all_group_chats"},
  language_code: null
}


async function setup(bot: Bot<MyContext>) {
  logger.info("Setting up bot commands...")

  const allCommands: MyBotCommands[] = [
    EN_COMMANDS_PRIVATE,
    DEFAULT_COMMANDS_PRIVATE,
    EN_COMMANDS_GROUP,
    DEFAULT_COMMANDS_GROUP
  ]

  for (const {commands, scope, language_code} of allCommands) {
    bot.api.setMyCommands(commands, {scope: scope, language_code: language_code})
  }
}

export default {setup}