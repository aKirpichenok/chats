import { FC } from "react"
import { IChatItem } from "./interface"
import './chatItem.scss'

export const ChatItem: FC<IChatItem> = ({avatar,date, header,message, onClick}) => {
  return (
    <div className="chat-item" onClick={onClick}>
      {avatar}
      <div className="chat-item-main">
        <div className="chat-item-title">
        {header}
        {date}
        </div>
        <div className="chat-item-message">{message}</div>
      </div>
  </div>
  )
}