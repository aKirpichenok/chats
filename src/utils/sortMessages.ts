import { IMessages } from "../interface/messages"

export const getOldMessages = (messages: Array<IMessages>) => messages.filter((message: IMessages) => !message.is_new)
export const getNewMessages = (messages: Array<IMessages>) => messages.filter((message: IMessages) => message.is_new)