import { useEffect, useState } from "react"
import { getNewMessages, sortMessagesByDate } from "../utils/sortMessages"
import { IMessages } from "../interface/messages"


export const useSortMessages = () => {

  const [messages, setMessages] = useState<Array<IMessages>>([])
  const [newMessages, setNewMessages] = useState<Array<IMessages>>([])
  const [oldMessages, setOldMessages] = useState<Array<[string, IMessages[]]>>([])
  const [isNewMessages, setIsNewMessages] = useState(false)
  const [isOldMessages, setIsOldMessages] = useState(false)

  useEffect(() => {
    if (messages.length > 0) {
      setNewMessages(getNewMessages(messages))
      setOldMessages(Object.entries(sortMessagesByDate(messages)))
      setIsNewMessages(newMessages.length > 0)
      setIsOldMessages(oldMessages.length > 0)
    }
  }, [messages])


  return {
    newMessages,
    oldMessages,
    isNewMessages,
    isOldMessages,
    setMessages
  }
}