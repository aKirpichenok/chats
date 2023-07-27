import { FC } from "react"
import { ChatItemHeaderProps } from "./types"
import './chatItemHeader.scss'

export const ChatItemHeader: FC<ChatItemHeaderProps> = ({name, female}) => {
  return (
    <div className="chat-item-header">
      <span>{name}</span>
      <span>{female}</span>
  </div>
  )
}