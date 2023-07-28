import dayjs from "dayjs"
import { IMessages } from "../interface/messages"

export const getOldMessages = (messages: Array<IMessages>) => messages.filter((message: IMessages) => !message.is_new)
export const getNewMessages = (messages: Array<IMessages>) => messages.filter((message: IMessages) => message.is_new)

export const sortMessagesByDate = (messages: Array<IMessages>) => {
  const oldMessages = getOldMessages(messages).sort((a, b) => a.created_at - b.created_at)

  const messagesByDate: { [key: string]: typeof messages } = {}

  oldMessages.forEach((message) => {
    const date = dayjs(message.created_at)
    const day = date.format('DD.MM.YYYY')

    if (!messagesByDate[day]) {
      messagesByDate[day] = [];
    }

    messagesByDate[day].push(message);
  })
  console.log(messagesByDate)
  return messagesByDate
}