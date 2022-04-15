import { Context as BaseContext, Api } from "grammy"
import { HydrateFlavor, HydrateApiFlavor } from "@grammyjs/hydrate"

type MyContext = BaseContext & HydrateFlavor<BaseContext>
type MyApi = HydrateApiFlavor<Api>

export { MyContext, MyApi }
