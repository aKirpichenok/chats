import { FC } from "react"
import { ChatItemMessageProps } from "./types"
import './chatItemMessage.scss'

export const ChatItemMessage: FC<ChatItemMessageProps> = ({message}) => {

  return (
    <div className="chat-item-message">{message}</div>
  )
}